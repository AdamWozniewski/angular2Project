import {Component,Output, EventEmitter} from '@angular/core';
import {OnInit} from "@angular/core";
import {NgClass} from "@angular/common";
import {NgForm} from '@angular/forms';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';


@Component({
	moduleId: module.id,
	selector:'article-form',
	providers:[FormBuilder,],
	inputs:['form_inputs'],
	// outputs:['form_outputs'],
	templateUrl:'template/form.component.template.html'
})

export class FormComponent implements OnInit{
	@Output() articleChange: EventEmitter<number>; // Do komunikacji W GÓRĘ !! (do AppComponent)

	firstName:String;
	lastName:String;
	psswd:String;
	email:String;
	avatar:String;
	// primeFormUser:FormGroup;
	primeFormUser: FormGroup; // dawnie było articleForm:FormControl=new FormGroup


	constructor(private formBuilder: FormBuilder) {
		this.primeFormUser=this.formBuilder.group({
			firstName: new FormControl("",Validators.required),  // pole Wymagane                      // Inicjalizacja formularza dla AppComponent !!
			lastName: new FormControl("",Validators.required),
			psswd: new FormControl("",Validators.required),
			email: new FormControl("",Validators.required),
			avatar: new FormControl("",Validators.required)
		});
		// this.count = 0;
		this.articleChange = new EventEmitter<number>();
	}
	
	ngOnInit() {
		// this.primeFormUser=this.formBuilder.group({
		// 	firstName:''                          // Inicjalizacja formularza dla FormComponent !!  Może być tutaj albo w konstruktorze
		// });
	}


	onSubmit(){
			
			this.articleChange.emit(this.primeFormUser.value.firstName);

	}



}