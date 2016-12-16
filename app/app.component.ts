import {Component} from "@angular/core";
import {Directive} from "@angular/core";
import {NgFor} from "@angular/common";

import { Article } from './Article/article';
import { ArticleComponent } from './Article/article.component';

import { FormComponent } from './Form/form.component';

import {User} from './Users/User';
import {UserComponent} from './Users/user.component';

@Component({
	selector:'my-app',
	// declarations: [ArticleComponent,UserComponent,FormComponent],
	templateUrl:'app/app.component.templates/app.component.templates.html'
})

export class AppComponent {
	articles_array:Article[];
	articles_array=ARTICLES;



	
}


//ZRÓDŁO DANYCH 
var ARTICLES:Article[]=[
	new Article("tytuł1","opis1","link1","obrazek1",0),
	new Article("tytuł2","opis2","link2","obrazek2",0),
];
