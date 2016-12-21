"use strict";
var article_1 = require("./../Article/article");
var User_1 = require("./../Users/User");
//Export Artykułów
exports.ARTICLES = [
    new article_1.Article("tytuł1", "opis1", "link1", "obrazek1", 0),
    new article_1.Article("tytuł2", "opis2", "link2", "obrazek2", 0),
];
//Export Użytkowników
exports.USERS = [
    new User_1.User(1, "adam", "W", "admin"),
    new User_1.User(2, "adam2", "W2", "admin2")
];
//# sourceMappingURL=DataBase.js.map