import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
// import { Article }   from './articles/Article';
// import { ArticleService }   from './articles/articleClass';
// import { FormService }   from './form/FormService';
@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent], //,Article
  bootstrap:    [ AppComponent ]
})
export class AppModule {


 }