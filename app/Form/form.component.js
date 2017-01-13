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
var forms_1 = require("@angular/forms");
var postman_service_1 = require("./../Services/postman.service");
var FormComponent = (function () {
    function FormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.primeFormUser = this.formBuilder.group({
            firstName: new forms_1.FormControl("", forms_1.Validators.required),
            lastName: new forms_1.FormControl("", forms_1.Validators.required),
            psswd: new forms_1.FormControl("", forms_1.Validators.required),
            email: new forms_1.FormControl("", forms_1.Validators.required),
            avatar: new forms_1.FormControl("", forms_1.Validators.required)
        });
        // this.count = 0;
        this.articleChange = new core_1.EventEmitter();
    }
    FormComponent.prototype.ngOnInit = function () {
        // this.primeFormUser=this.formBuilder.group({
        // 	firstName:''                          // Inicjalizacja formularza dla FormComponent !!  Może być tutaj albo w konstruktorze
        // });
    };
    FormComponent.prototype.onSubmit = function () {
        // this.arra[0]=this.primeFormUser.value.firstName;
        // this.arra[1]=this.primeFormUser.value.lastName;
        // this.arra[2]=this.primeFormUser.value.psswd;
        // this.arra[3]=this.primeFormUser.value.email;
        // this.arra[4]=this.primeFormUser.value.avatar;
        this.postman = new postman_service_1.PostMan(this.primeFormUser.value.firstName, this.primeFormUser.value.lastName, this.primeFormUser.value.psswd, this.primeFormUser.value.email, this.primeFormUser.value.avatar);
        this.articleChange.emit(this.postman);
        // this.articleChange.emit(this.arra[0]);
    };
    return FormComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FormComponent.prototype, "articleChange", void 0);
FormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'article-form',
        providers: [forms_1.FormBuilder],
        inputs: ['form_inputs'],
        // outputs:['form_outputs'],
        templateUrl: 'template/form.component.template.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], FormComponent);
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map