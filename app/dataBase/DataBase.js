"use strict";
var article_1 = require("./../Article/article");
var User_1 = require("./../Users/User");
var Gallery_1 = require("./../Gallery/Gallery");
//Export Artykułów
exports.ARTICLES = [
    new article_1.Article("tytuł1", "opis1", "link1", "obrazek1", 0),
    new article_1.Article("tytuł2", "opis2", "link2", "obrazek2", 0),
];
//Export Użytkowników
exports.USERS = [
    new User_1.User(1, "adam", "W", "admin", "example@example.pl", "obrazek1.jpg"),
    new User_1.User(2, "adam2", "W2", "admin2", "example@example.pl")
];
//Export Użytkowników
exports.GALLERIES = [
    new Gallery_1.Gallery(1, "obrazek1.jpg", "obrazek1.jpg"),
    new Gallery_1.Gallery(2, "obrazek1.jpg", "W2")
];
//# sourceMappingURL=DataBase.js.map