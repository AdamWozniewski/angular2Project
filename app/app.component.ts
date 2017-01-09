import {Component} from "@angular/core";
import {Inject} from "@angular/core";
import {Directive} from "@angular/core";
import {OnInit} from "@angular/core";
import {NgFor} from "@angular/common";
import {NgIf} from '@angular/common';
import {NgForm} from '@angular/forms';
import {Validators, FormBuilder/*,ReactiveFormsModule*/,FormGroup,FormControl} from "@angular/forms"; // Import formluarzy  'FormControl' to dawne ControlGroup


//Komponenty
import { Article } from './Article/article';
import { ArticleComponent } from './Article/article.component';

import { FormComponent } from './Form/form.component';

import {User} from './Users/User';
import {UserComponent} from './Users/user.component';

import {Gallery} from './Gallery/Gallery';
import {GalleryComponent} from './Gallery/gallery.component';

// Serwisy danych
import {ArticleServices} from './Services/article.services';
import {UserServices} from './Services/users.services';
import {GalleryService} from './Services/gallery.services';

// http://blog.thoughtram.io/angular/2016/06/22/model-driven-forms-in-angular-2.html <- formularze


@Component({
	moduleId: module.id,
	selector:'my-app',
	providers:[ArticleServices,UserServices,GalleryService ,FormBuilder], // Dostarcza dane do Komponentu z zewnętrznego pliku !, FormBulider też jest providerrem
	templateUrl:'app.component.templates/app.component.templates.html'
})

export class AppComponent implements OnInit{ // implementujemy Interfejs
	articles_array:Article[]; // Zmienna przechowująca Artykuły 
	users_array:User[];
	gallery_array:Gallery[];


	number:number;
	// formSubmit:FormComponent; // połączenie z formularzem dodawania nowych ludków
	// userForm:FormGroup; // Obiekt obsługujący formularz
	// chuj:String="lafnafnfn";
	 // userForm: FormGroup=new FormGroup({
	 // 	name:new FormControl() // Pojedyncza Kontrolka dla formularza  AppComponent !!
	 // }); // dawnie było articleForm:FormControl=new FormGroup



	constructor(private _articleService:ArticleServices, private _userService:UserServices, private _gallerySerice:GalleryService ,private _formB:FormBuilder /* @Inject(FormBuilder) _formB: FormBuilder */){
		this.number=11;
	}


	getArticlesInAppComponent(){
		this._articleService.getArticles().then(articles_error=>this.articles_array=articles_error); // Asynchroniczna Usługa:
		//pobierz artykuły z metody getArticles, JEŻELI to się nie uda, stwórz funckję i do zmiennej tablicowej przypisz błąd

		// this.articles_array=this._articleService.getArticles(); //pobierz do komponentu dane
	}

	getUsersInAppComponent(){
		this._userService.getUsers().then(users_error=>this.users_array=users_error);
	}

	getGalleryInAppComponent(){
		this._gallerySerice.getGallery().then(gallery_error=>this.gallery_array=gallery_error); //suługa asynchroniczna
		// this._gallerySerice.getGallery();// pobierz dane do komponentu
	}

	ngOnInit(){ // implementacja metody Interfejsu
		this.getArticlesInAppComponent();
		this.getUsersInAppComponent(); 			// Gdy aplikacja się uruchamia, wykonaj metodę pobierająca Dane do Komponentu;
		this.getGalleryInAppComponent();

		// this.userForm=this._formB.group({
		// 	name:''                          // Inicjalizacja formularza dla AppComponent !!
		// });
		
	}

	onSubmitAppComponent(value:number){
		this.number=value;
    	alert(this.number);
		// alert("submit 2");
		// alert(this.formSubmit.onSubmit());
		// this.users_array.push(new User(1,this.userForm.value.name,this.userForm.value.name,this.userForm.value.name));
		// this.users_array.push(new User(1,this.formSubmit.onSubmit(),this.formSubmit.onSubmit(),this.formSubmit.onSubmit()));
	}

}

