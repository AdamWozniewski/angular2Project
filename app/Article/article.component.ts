import {Component} from "@angular/core";

import { Article } from './article';

@Component({
	selector:'single-art',
	inputs:['article_inputs'],
	host:{
		class:'angl2-class-dynamic'
	},
	templateUrl:'app/Article/template/article.component.template.html'
})

export class ArticleComponent{
	article:Article; // pobranie do komponentu obiektu typu Article

	votesPlusComponent():void{
		
	}

}


