import {Component} from "@angular/core";
import { User } from './User';

@Component({
	selector:'users',
	inputs:['user_inputs'],
	templateUrl:'app/Users/template/user.component.template.html'
})

export class UserComponent{}