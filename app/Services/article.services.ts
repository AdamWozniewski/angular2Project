import {ARTICLES} from './../dataBase/DataBase';  // Pobierz do usługi BAZĘ DANYCH
import {Injectable} from "@angular/core"; // Wstrzykiwanie zależności


@Injectable()

export class ArticleServices{
	getArticles(){
		return Promise.resolve(ARTICLES) // O
		// return ARTICLES;   // Pobierz Wszystkie artykuły z 'bazy danych'
	}
}