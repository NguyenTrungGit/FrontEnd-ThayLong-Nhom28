export class Blog {
  id:string;
  title:string;
  time: string;
  imageBl: string;
  imageAuthor: string;
  nameAuthor:string;
  content1:string;
  content2:string;
  story:string;


  constructor(id = '', title='',time='',imageBl='',imageAuthor='',nameAuthor='',content1='',content2='',story=''){
  this.id = id
  this.time = time
  this.title= title
  this.imageBl= imageBl
  this.imageAuthor = imageAuthor
  this.nameAuthor = nameAuthor
  this.content1 = content1
  this.content2 = content2
  this.story = story
  }
}

