export class Product {
  id:string;
  name:string;
  price: any;
  quantity:string;
  category:string;
  origin:string;
  img1:string;
  img2:string;
  img3:string;
  description: string;


  constructor(id = '', name='' ,quantity='',category='',origin='',img1='',img2 ='',img3='', description = '',price=''){
  this.id = id
  this.name = name
  this.description = description
  this.price=price
  this.quantity=quantity
  this.category=category
  this.origin=origin
  this.img1=img1
  this.img2=img2
  this.img3=img3

  }
}
