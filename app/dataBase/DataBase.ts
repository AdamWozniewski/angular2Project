
import {Article} from './../Article/article';
import {User} from './../Users/User';
import {Gallery} from './../Gallery/Gallery';



//Export Artykułów
export var ARTICLES:Article[]=[
	new Article("tytuł1","opis1","link1","obrazek1",0),
	new Article("tytuł2","opis2","link2","obrazek2",0),
];

//Export Użytkowników
export var  USERS:User[]=[
	new User(1,"adam","W","admin","example@example.pl","obrazek1.jpg"),
	new User(2,"adam2","W2","admin2","example@example.pl")
];
//Export Użytkowników
export var  GALLERIES:Gallery[]=[
	new Gallery(1,"obrazek1.jpg","obrazek1.jpg"),
	new Gallery(2,"obrazek1.jpg","W2")
];

