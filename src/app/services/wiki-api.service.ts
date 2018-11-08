import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import $ from 'jquery';
import { Page } from '../models/page.model';

@Injectable({
  providedIn: 'root'
})
export class WikiApiService {

  private apiUrl = "https://en.wikipedia.org/w/api.php";

  private options = {
    action: 'parse',
    prop: 'text',
    format: 'json',
    disableeditsection: 'true',
    disablelimitreport: 'true',
    origin: '*',
    redirects: 'true'
  };

  constructor(private http: HttpClient){ }

  /**
   * Returns the parsed json response
   * @param title Title of the page
   */
  getPageText(title: string): Observable<any>  {

    return this.http.get(this.apiUrl,{
      params: {
        page: title,
        ...this.options
      }
    })
    .pipe(
      catchError(this.handleError('getPageText', {}))
    );

  }

  /**
   * Returns parsed html data of a wikipedia page
   * @param title title of the page to parse
   */
  getParsedData(title: string): Observable<{page: Page, content: HTMLElement, redirects?:{from: string, to:string}}> {

    return this.getPageText(title)
      .pipe(map(data => {

        console.log(data);
        if(data && data.parse) {

          const content = this.filterContent(data.parse.text['*']);
          const page: Page = {
            page_id: data.parse.pageid,
            title: data.parse.title
          }
          const redirects = data.parse.redirects;
          return { page, content, redirects }

        }

      }));
  }


  /**
   * Handle http errors
   * @param {string} operation
   * @param {T} result
   */
  private handleError<T> (operation = 'operation', result?: T) {

    return (error:any): Observable<T> => {

      console.log(error);

      return of(result as T);

    }
  }

  /**
   * Returns preprocessed text for wiki search
   * @param text Text to be parsed
   */
  private filterContent(text: string): HTMLElement {

    const div = document.createElement('div');

    div.innerHTML = text.replace(/\{/g,"&#123;").replace(/\{/g, "&#125;");

    //remove unwanted reference and navigations
    $(div).find('#References, .reflist, [role="navigation"], sup, .reference, .ambox, #toc').remove();

    var removeStart = $(div).find("#See_also").parent().next();
    removeStart.nextAll().remove();

    //change all href to routerLinks
    $(div).find('a').each(
      function() {
        $(this).get(0).setAttributeNS("http://www.mozilla.org/ns/specialspace","routerLink", $(this).attr('href'));
        $(this).removeAttr('href');
      }
    );

    //change center to div
    $(div).find('center').each(
      function () {
        $(this).replaceWith(`<div style="text-align:center">${$(this).html()}</div>`)
      }
    );

    $(div).find('big').each(
      function () {
        $(this).replaceWith(`<span style="font-size: 1.1em">${$(this).html()}</span>`)
      }
    );

    $(div).find('s, strike').each(
      function () {
        $(this).replaceWith(`<span style="text-decoration: line-through;">${$(this).html()}</span>`)
      }
    );

    $(div).find('u').each(
      function () {
        $(this).replaceWith(`<span style="text-decoration: underline;">${$(this).html()}</span>`)
      }
    );

    $(div).find('dir').each(
      function () {
        $(this).replaceWith(`<ul>${$(this).html()}</ul>`)
      }
    );

    $(div).find('tt').each(
      function () {
        $(this).replaceWith(`<span style="font-family: monospace">${$(this).html()}</span>`)
      }
    );

    $(div).find('acronym, applet, basefont, frame, frameset, isindex, noframes').remove();
    $(div).find('acronym, applet, basefont, frame, frameset, isindex, noframes').remove();

    //disable external links
    $(div).find('.external').attr('href', '');

    //apply wikipedia styling
    this.applyStyling(div);

    return div;

  }

  /**
   * Apply inline styling to items
   * @param div Element container of the text
   */
  private applyStyling(div: HTMLElement) {

    $(div).find('h2').attr('style', "font-size:1.5em; font-weight: 600;margin: 1em 0 0.5em 0;border-bottom:1px solid #2e2e2e");

    $(div).find('h3').attr('style', "font-size:1.3em; font-weight: 600; margin: 0.6em 0 0.3em 0;");

    $(div).find('h4').attr('style', "font-size:1.1em; font-weight: 600; margin: 0.6em 0 0.3em 0;");

    $(div).find('#toc').attr('style', "border: 1pt solid #aaa; background-color: #f9f9f9; padding: 16px; display: table;");

    $(div).find('p').attr('style', 'text-align: justify; margin: 0.4em 0 0.5em 0;');

    $(div).find('#toc h2').attr('style', 'text-align: center; font-weight: bold');

    $(div).find('.tright').attr('style', 'float:right;clear:right;margin:0.5em 0 1.3em 1.4em;');

    $(div).find('.tleft').attr('style', 'float:left;clear:left;margin:0.5em 1.4em 1.3em 0;');

    $(div).find('.thumbinner').attr('style', 'border: 1px solid #c8ccd1; padding: 3px; background-color: #f8f9fa; font-size: 94%; text-align: center; overflow: hidden; width: 222px;');

    $(div).find('.thumbcaption').attr('style', 'font-size: 88%');

    $(div).find('.infobox').attr('style', 'border: 1px solid #a2a9b1; border-spacing: 3px; background-color: #f8f9fa; color: black; margin: 0.5em 0 0.5em 1em; padding: 16px; width:20%; font-size: 88%; float: right; clear: right; line-height: 1.5em');

    $(div).find('.infobox td, .infobox th').attr('style', 'padding: 8px');

    $(div).find('.infobox th .fn').parent().css('text-align', 'center');
  }

}
