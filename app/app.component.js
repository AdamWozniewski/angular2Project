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
// Serwisy danych
var article_services_1 = require("./Services/article.services");
var AppComponent = (function () {
    function AppComponent(_articleService) {
        this._articleService = _articleService;
    }
    AppComponent.prototype.getArticlesInAppComponent = function () {
        var _this = this;
        this._articleService.getArticles().then(function (articles_error) { return _this.articles_array = articles_error; }); // Asynchroniczna Usługa:
        //pobierz artykuły z metody getArticles, JEŻELI to się nie uda, stwórz funckję i do zmiennej tablicowej przypisz błąd
        // this.articles_array=this._articleService.getArticles(); //pobierz do komponentu dane
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getArticlesInAppComponent(); // Gdy aplikacja się uruchamia, wykonaj metodę pobierająca Dane do Komponentu;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        providers: [article_services_1.ArticleServices],
        templateUrl: 'app/app.component.templates/app.component.templates.html'
    }),
    __metadata("design:paramtypes", [article_services_1.ArticleServices])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map