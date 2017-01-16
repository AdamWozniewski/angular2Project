import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import { ReactiveFormsModule } from '@angular/forms';
import {Article} from "./Article/article";
import {ArticleComponent} from "./Article/article.component";

import { FormComponent } from "./Form/form.component";
import { FormFileUploadComponent } from "./Form/formFileUpload.component";

import { User } from "./Users/User";
import { UserComponent } from "./Users/user.component";

import { Gallery } from "./Gallery/Gallery";
import { GalleryComponent } from "./Gallery/gallery.component";

@NgModule({
	imports: 		[BrowserModule,ReactiveFormsModule],
	declarations: 	[AppComponent,ArticleComponent,UserComponent,FormComponent,GalleryComponent,FormFileUploadComponent],
	bootstrap: 		[AppComponent],
})

export class AppModule{}
