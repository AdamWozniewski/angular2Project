"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms"); // Import formluarzy  'FormControl' to dawne ControlGroup
// Serwisy danych
var article_services_1 = require("./Services/article.services");
var users_services_1 = require("./Services/users.services");
var gallery_services_1 = require("./Services/gallery.services");
// http://blog.thoughtram.io/angular/2016/06/22/model-driven-forms-in-angular-2.html <- formularze
var AppComponent = (function () {
    // formSubmit:FormComponent; // połączenie z formularzem dodawania nowych ludków
    // userForm:FormGroup; // Obiekt obsługujący formularz
    // chuj:String="lafnafnfn";
    // userForm: FormGroup=new FormGroup({
    // 	name:new FormControl() // Pojedyncza Kontrolka dla formularza  AppComponent !!
    // }); // dawnie było articleForm:FormControl=new FormGroup
    function AppComponent(_articleService, _userService, _gallerySerice, _formB /* @Inject(FormBuilder) _formB: FormBuilder */) {
        this._articleService = _articleService;
        this._userService = _userService;
        this._gallerySerice = _gallerySerice;
        this._formB = _formB; /* @Inject(FormBuilder) _formB: FormBuilder */
        this.number = 11;
    }
    AppComponent.prototype.getArticlesInAppComponent = function () {
        var _this = this;
        this._articleService.getArticles().then(function (articles_error) { return _this.articles_array = articles_error; }); // Asynchroniczna Usługa:
        //pobierz artykuły z metody getArticles, JEŻELI to się nie uda, stwórz funckję i do zmiennej tablicowej przypisz błąd
        // this.articles_array=this._articleService.getArticles(); //pobierz do komponentu dane
    };
    AppComponent.prototype.getUsersInAppComponent = function () {
        var _this = this;
        this._userService.getUsers().then(function (users_error) { return _this.users_array = users_error; });
    };
    AppComponent.prototype.getGalleryInAppComponent = function () {
        var _this = this;
        this._gallerySerice.getGallery().then(function (gallery_error) { return _this.gallery_array = gallery_error; }); //suługa asynchroniczna
        // this._gallerySerice.getGallery();// pobierz dane do komponentu
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getArticlesInAppComponent();
        this.getUsersInAppComponent(); // Gdy aplikacja się uruchamia, wykonaj metodę pobierająca Dane do Komponentu;
        this.getGalleryInAppComponent();
        // this.userForm=this._formB.group({
        // 	name:''                          // Inicjalizacja formularza dla AppComponent !!
        // });
    };
    AppComponent.prototype.onSubmitAppComponent = function (value) {
        this.number = value;
        alert(this.number);
        // alert("submit 2");
        // alert(this.formSubmit.onSubmit());
        // this.users_array.push(new User(1,this.userForm.value.name,this.userForm.value.name,this.userForm.value.name));
        // this.users_array.push(new User(1,this.formSubmit.onSubmit(),this.formSubmit.onSubmit(),this.formSubmit.onSubmit()));
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        providers: [article_services_1.ArticleServices, users_services_1.UserServices, gallery_services_1.GalleryService, forms_1.FormBuilder],
        templateUrl: 'app.component.templates/app.component.templates.html'
    }),
    __metadata("design:paramtypes", [article_services_1.ArticleServices, users_services_1.UserServices, gallery_services_1.GalleryService, forms_1.FormBuilder /* @Inject(FormBuilder) _formB: FormBuilder */])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map