export class PostMan{

	id:number;
	name:String;
	lastName:String;
	email:String;
	password:String;
	avatar:String;

	constructor(id_c:number,name_c:String,lastName_c:String,password_c:String,email_c:String,avatar_c?:String){
		
		this.id=id_c;
		this.name=name_c;
		this.lastName=lastName_c;
		this.email=email_c;
		this.password=password_c;
		this.avatar=avatar_c || "perm_identity";
	}
}