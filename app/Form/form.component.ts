import {Component} from '@angular/core';
import {OnInit} from "@angular/core";
import {NgClass} from "@angular/common";
import {NgForm} from '@angular/forms';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';


@Component({
	moduleId: module.id,
	selector:'article-form',
	providers:[FormBuilder],
	inputs:['form_inputs'],
	templateUrl:'template/form.component.template.html'
	// template:"chuj"

})

export class FormComponent implements OnInit{

	values:any[]=[];
	// primeFormUser:FormGroup;
	primeFormUser: FormGroup; // dawnie było articleForm:FormControl=new FormGroup

	constructor(private formBuilder: FormBuilder) {
		this.primeFormUser=this.formBuilder.group({
			firstName: new FormControl("",Validators.required)  // pole Wymagane                      // Inicjalizacja formularza dla AppComponent !!
		});
	}
	// onSubmit(userForm:NgForm){
	
	ngOnInit() {
		console.log("init od forma");


		// this.primeFormUser=this.formBuilder.group({
		// 	firstName:''                          // Inicjalizacja formularza dla FormComponent !!  Może być tutaj albo w konstruktorze
		// });
	}

	onSubmit(){
			// console.log("działa on submit");
			alert("działa");
			// return this.primeFormUser.value.firstName;
			// alert(this.primeFormUser.value.firstName);
			// this.values[0]=userForm.value.first;
			// this.name=f.value.first;
			// console.log(this.values[0]);
			// return this.values;
			// this.values[0].updateValue="";
	}

}