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
// import {Http, Response, Headers} from 'http/http';
// import files =require ("fs");
var forms_1 = require("@angular/forms");
var FormFileUploadComponent = (function () {
    function FormFileUploadComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.fileUpload = this._formBuilder.group({
            file: new forms_1.FormControl() // Dodawawnie zdjęć jest opcjonalne
        });
    }
    FormFileUploadComponent.prototype.ngOnInit = function () {
    };
    FormFileUploadComponent.prototype.onSubmitFile = function () {
        // files.writeFile("bonzo.txt","CHUUUUJ",function(error){
        // 	if(error){
        // 		console.log("NIE");
        // 	}else{
        //
        // 		console.log("tak");
        // 	}
        // });
        // this.name=this.fileUpload.value;
        // alert(this.name);	
        console.log("ok");
    };
    return FormFileUploadComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FormFileUploadComponent.prototype, "fileUploadEvent", void 0);
FormFileUploadComponent = __decorate([
    core_1.Component({
        selector: 'form-file-upload',
        // providers:[FormBuilder],
        // inputs:['form_inputs_file'],
        templateUrl: 'app/Form/template/formFileUlopad.component.template.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], FormFileUploadComponent);
exports.FormFileUploadComponent = FormFileUploadComponent;
//# sourceMappingURL=formFileUpload.component.js.map