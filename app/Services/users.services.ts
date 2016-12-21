import {USERS} from './../dataBase/DataBase';
import {Injectable} from '@angular/core';


@Injectable()


export class UserServices{
	getUsers(){
		return Promise.resolve(USERS); // Asynchroniczne zwócenie użytkowników
		// return USERS; // Synchroniczne zwrócenie użytkowników
	}
}