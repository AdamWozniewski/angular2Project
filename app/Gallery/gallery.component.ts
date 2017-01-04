import {Component} from "@angular/core";
import {Gallery} from "./Gallery";


@Component({
	selector:'gallery',
	inputs:['gallery_inputs'],
	host:{
		['class']: 'col s12 m4 l3'
	},
	templateUrl:'app/Gallery/template/gallery.component.template.html'

})

export class GalleryComponent{

}
