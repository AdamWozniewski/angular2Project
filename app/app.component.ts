import {Component} from "@angular/core";
import {Directive} from "@angular/core";
import {NgFor} from "@angular/common";

import {Article} from './Article/article';
import {ArticleComponent} from './Article/article.component';

import {FormComponent} from './Form/form.component';

import {User} from './Users/User';
import {UserComponent} from './Users/user.component';

@Component({
	selector:'my-app',
	// directives:[ArticleComponent,UserComponent,FormComponent],
	templateUrl:'app/templates/app.component.template.html'
})

export class AppComponent {
	article:Article[];
}



