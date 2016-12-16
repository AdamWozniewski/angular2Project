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
var article_1 = require("./Article/article");
var AppComponent = (function () {
    function AppComponent() {
        this.articles_array = ARTICLES;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        // declarations: [ArticleComponent,UserComponent,FormComponent],
        templateUrl: 'app/app.component.templates/app.component.templates.html'
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//ZRÓDŁO DANYCH 
var ARTICLES = [
    new article_1.Article("tytuł1", "opis1", "link1", "obrazek1", 0),
    new article_1.Article("tytuł2", "opis2", "link2", "obrazek2", 0),
];
//# sourceMappingURL=app.component.js.map