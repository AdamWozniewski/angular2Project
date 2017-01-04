import {Injectable} from "@angular/core";
import {GALLERIES} from "./../dataBase/DataBase";

export class GalleryService{
	getGallery(){
		return Promise.resolve(GALLERIES);
		// return GALLERIES // zwrot synchroniczny 
	}
}