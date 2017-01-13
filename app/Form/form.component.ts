import {Component,Output, EventEmitter} from '@angular/core';
import {OnInit} from "@angular/core";
import {NgClass} from "@angular/common";
import {NgForm} from '@angular/forms';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { PostMan } from './../Services/postman.service';


@Component({
	moduleId: module.id,
	selector:'article-form',
	providers:[FormBuilder],
	inputs:['form_inputs'],
	// outputs:['form_outputs'],
	templateUrl:'template/form.component.template.html'
})



export class FormComponent implements OnInit{
	@Output() articleChange: EventEmitter<PostMan>; // Do komunikacji W GÓRĘ !! (do AppComponent)

	firstName:String;
	lastName:String;
	psswd:String;
	email:String;
	avatar:String;
	// primeFormUser:FormGroup;
	primeFormUser: FormGroup; // dawnie było articleForm:FormControl=new FormGroup

	postman:PostMan;
	constructor(private formBuilder: FormBuilder) {
		this.primeFormUser=this.formBuilder.group({
			firstName: new FormControl("",Validators.required),  // pole Wymagane                      // Inicjalizacja formularza dla AppComponent !!
			lastName: new FormControl("",Validators.required),
			psswd: new FormControl("",Validators.required),
			email: new FormControl("",Validators.required),
			avatar: new FormControl("") // Avatar jest opcjonalny
		});
		// this.count = 0;
		this.articleChange = new EventEmitter<PostMan>();
	}
	
	ngOnInit() {
		// this.primeFormUser=this.formBuilder.group({
		// 	firstName:''                          // Inicjalizacja formularza dla FormComponent !!  Może być tutaj albo w konstruktorze
		// });
	}


	onSubmit(){
		

		
		// this.arra[0]=this.primeFormUser.value.firstName;
		// this.arra[1]=this.primeFormUser.value.lastName;
		// this.arra[2]=this.primeFormUser.value.psswd;
		// this.arra[3]=this.primeFormUser.value.email;
		// this.arra[4]=this.primeFormUser.value.avatar;
		this.postman=new PostMan(1,this.primeFormUser.value.firstName,this.primeFormUser.value.lastName,this.primeFormUser.value.psswd,this.primeFormUser.value.email,this.primeFormUser.value.avatar);


		this.articleChange.emit(this.postman);
		// this.articleChange.emit(this.arra[0]);

	}



}