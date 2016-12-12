export class User{

	id:number;
	name:String;
	lastName:String;
	password:String;
	avatar:String;

	constructor(id_c:number,name_c:String,lastName_c:String,password_c:String,avatar_c:String){
		
		this.id=id_c;
		this.name=name_c;
		this.lastName=lastName_c;
		this.password=password_c;
		this.avatar=avatar_c;
	}
}