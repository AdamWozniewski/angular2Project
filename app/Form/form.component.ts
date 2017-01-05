import {Component} from '@angular/core';
import {OnInit} from "@angular/core";
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

	constructor(private formBuilder: FormBuilder) {}
	// onSubmit(userForm:NgForm){
	
	ngOnInit() {
		console.log("init od forma");
		this.primeFormUser=this.formBuilder.group({
			firstName:'',
		});
	}

	onSubmit(){
			// console.log("działa on submit");
			return this.primeFormUser.value.firstName;
			// alert(this.primeFormUser.value.firstName);
			// this.values[0]=userForm.value.first;
			// this.name=f.value.first;
			// console.log(this.values[0]);
			// return this.values;
			// this.values[0].updateValue="";
	}

}