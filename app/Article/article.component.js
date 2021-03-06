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
var ArticleComponent = (function () {
    function ArticleComponent() {
    }
    ArticleComponent.prototype.votesPlusComponent = function () {
        console.log(this.article);
        // this.article.votesPlus();
    };
    return ArticleComponent;
}());
ArticleComponent = __decorate([
    core_1.Component({
        selector: 'single-art',
        inputs: ['article_inputs'],
        host: {
            class: 'angl2-class-dynamic'
        },
        templateUrl: 'app/Article/template/article.component.template.html'
    }),
    __metadata("design:paramtypes", [])
], ArticleComponent);
exports.ArticleComponent = ArticleComponent;
//# sourceMappingURL=article.component.js.map