import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";

import {Article} from "./Article/article";
import {ArticleComponent} from "./Article/article.component";

import { FormComponent } from "./Form/form.component";

import { User } from "./Users/User";
import { UserComponent } from "./Users/user.component";



@NgModule({
	imports: 		[BrowserModule],
	declarations: 	[AppComponent,ArticleComponent,UserComponent],
	bootstrap: 		[AppComponent],
})

export class AppModule{}
