import {Component} from "@angular/core";
import {Directive} from "@angular/core";
import {NgFor} from "@angular/common";
import {OnInit} from "@angular/core";


//Komponenty
import { Article } from './Article/article';
import { ArticleComponent } from './Article/article.component';

import { FormComponent } from './Form/form.component';

import {User} from './Users/User';
import {UserComponent} from './Users/user.component';


// Serwisy danych
import {ArticleServices} from './Services/article.services';



@Component({
	selector:'my-app',
	providers:[ArticleServices], // Dostarcza dane do Komponentu !
	templateUrl:'app/app.component.templates/app.component.templates.html'
})

export class AppComponent implements OnInit{ // implementujemy Interfejs
	articles_array:Article[]; // Zmienna przechowująca Artykuły 
	users_array:User[];

	constructor(private _articleService:ArticleServices){

	}

	getArticlesInAppComponent(){
		this._articleService.getArticles().then(articles_error=>this.articles_array=articles_error); // Asynchroniczna Usługa:
		//pobierz artykuły z metody getArticles, JEŻELI to się nie uda, stwórz funckję i do zmiennej tablicowej przypisz błąd



		// this.articles_array=this._articleService.getArticles(); //pobierz do komponentu dane
	}

	ngOnInit(){ // implementacja metody Interfejsu
		this.getArticlesInAppComponent(); // Gdy aplikacja się uruchamia, wykonaj metodę pobierająca Dane do Komponentu;
	}

}

