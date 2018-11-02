import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './pages/home/home.component';
import { CurrentGameComponent } from './components/current-game/current-game.component';
import { WikiLoaderComponent } from './pages/wiki-loader/wiki-loader.component';
import { RawHtmlPipe } from './pipes/raw-html.pipe';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { StoreModule } from './store/store.module';
import { DynamicComponentModule } from 'ng-dynamic';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurrentGameComponent,
    WikiLoaderComponent,
    RawHtmlPipe,
    WelcomeComponent,
    LoaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    StoreModule,
    DynamicComponentModule.forRoot({
      imports: [RouterModule]
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
