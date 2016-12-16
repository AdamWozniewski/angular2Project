"use strict";
var Article = (function () {
    function Article(title_c, desc_c, link_c, image_c, votes_c) {
        this.title = title_c;
        this.desc = desc_c;
        this.link = link_c;
        this.image = image_c;
        this.votes = votes_c || 0;
    }
    Article.prototype.votesPlus = function () {
        this.votes += 1;
    };
    Article.prototype.votesMinus = function () {
        this.votes -= 1;
    };
    return Article;
}());
exports.Article = Article;
//# sourceMappingURL=article.js.map