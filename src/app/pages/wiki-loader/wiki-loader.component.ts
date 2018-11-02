import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { WikiApiService } from 'src/app/services/wiki-api.service';
import { first } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { PushPage } from 'src/app/store/actions/game.action';
import { Page } from 'src/app/models/page.model';

@Component({
  selector: 'app-wiki-loader',
  templateUrl: './wiki-loader.component.html',
  styleUrls: ['./wiki-loader.component.scss']
})
export class WikiLoaderComponent implements OnInit, OnDestroy {

  sub:Subscription = new Subscription();
  title: string;
  content: string;

  constructor(private route: ActivatedRoute, private wiki: WikiApiService, private store: Store) { }

  ngOnInit() {

    var query;

    //get title param
    this.sub.add(
      this.route.params.subscribe(
        params => {
          query = params['title'];

          this.content = null;

          //extract contents from the result
          this.getPageContent(query);


        }
      )
    );

  }

  /**
   * Get content of a wikipedia page
   * @param title title of the page to get content
   */
  async getPageContent(title: string) {

    const data = await this.wiki.getParsedData(title).pipe(first(val => val !== null)).toPromise();

    this.content = data.content.innerHTML.replace("{", "&#123;").replace("}", "&#125;");
    const page = data.page;

    this.title = page.title;

    this.store.dispatch(new PushPage(page));

  }

  ngOnDestroy() {

    this.sub.unsubscribe();

  }

}
