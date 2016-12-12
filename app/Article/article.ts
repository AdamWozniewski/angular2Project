export class Article{
	title:string;
	desc:string;
	link:string;
	image:string;
	votes:number;

	constructor(title_c:string,desc_c:string,link_c:string,image_c:string,votes_c?:number){
		this.title=title_c;
		this.desc=desc_c;
		this.link=link_c;
		this.image=image_c;
		this.votes=votes_c || 0;

	}
}