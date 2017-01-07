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
var FormComponent = (function () {
    function FormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.values = [];
        this.primeFormUser = this.formBuilder.group({
            firstName: new forms_1.FormControl("", forms_1.Validators.required) // pole Wymagane                      // Inicjalizacja formularza dla AppComponent !!
        });
    }
    // onSubmit(userForm:NgForm){
    FormComponent.prototype.ngOnInit = function () {
        console.log("init od forma");
        // this.primeFormUser=this.formBuilder.group({
        // 	firstName:''                          // Inicjalizacja formularza dla FormComponent !!  Może być tutaj albo w konstruktorze
        // });
    };
    FormComponent.prototype.onSubmit = function () {
        // console.log("działa on submit");
        alert("działa");
        // return this.primeFormUser.value.firstName;
        // alert(this.primeFormUser.value.firstName);
        // this.values[0]=userForm.value.first;
        // this.name=f.value.first;
        // console.log(this.values[0]);
        // return this.values;
        // this.values[0].updateValue="";
    };
    return FormComponent;
}());
FormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'article-form',
        providers: [forms_1.FormBuilder],
        inputs: ['form_inputs'],
        templateUrl: 'template/form.component.template.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], FormComponent);
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map