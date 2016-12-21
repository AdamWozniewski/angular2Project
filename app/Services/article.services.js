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
var DataBase_1 = require("./../dataBase/DataBase"); // Pobierz do usługi BAZĘ DANYCH
var core_1 = require("@angular/core"); // Wstrzykiwanie zależności
var ArticleServices = (function () {
    function ArticleServices() {
    }
    ArticleServices.prototype.getArticles = function () {
        return Promise.resolve(DataBase_1.ARTICLES); // O
        // return ARTICLES;   // Pobierz Wszystkie artykuły z 'bazy danych'
    };
    return ArticleServices;
}());
ArticleServices = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ArticleServices);
exports.ArticleServices = ArticleServices;
//# sourceMappingURL=article.services.js.map