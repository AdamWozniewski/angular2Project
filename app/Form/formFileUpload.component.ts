import {Component,Output, EventEmitter} from '@angular/core';
import {OnInit} from "@angular/core";
import {NgClass} from "@angular/common";
import {NgForm} from '@angular/forms';
// import {Http, Response, Headers} from 'http/http';
import files =require ("fs");
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';


@Component({
	selector:'form-file-upload',
	// providers:[FormBuilder],
	// inputs:['form_inputs_file'],
	templateUrl:'app/Form/template/formFileUlopad.component.template.html'
	// template:``
})

export class FormFileUploadComponent implements OnInit{

	@Output() fileUploadEvent: EventEmitter<String>;

	// private fs=require('../fs');
	

	name:String;
	fileUpload:FormGroup;
	constructor(private _formBuilder:FormBuilder){
		this.fileUpload=this._formBuilder.group({
			file:new FormControl() // Dodawawnie zdjęć jest opcjonalne
		});

		
	}
	ngOnInit() {
	}
	onSubmitFile(){
		files.writeFile("bonzo.txt","CHUUUUJ",function(error){
			if(error){
				console.log("NIE");
			}else{
				
				console.log("tak");
			}
		});
		// this.name=this.fileUpload.value;
		// alert(this.name);	
		console.log("ok");
	}
}
