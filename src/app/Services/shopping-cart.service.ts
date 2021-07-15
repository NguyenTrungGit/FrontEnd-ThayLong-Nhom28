import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../model/product.model';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
cartItems= new BehaviorSubject([]);
placeholder:Product[]=[];

constructor(){
    var cart=localStorage.getItem('cart');
    if(!(cart===null)){
      console.log("khoi tao ko trống")
      const cartLocalStorage =JSON.parse(cart);
      this.cartItems.next(cartLocalStorage)
}
}
addToCart(product: Product) {

let exist:Product;
 var cart=localStorage.getItem('cart');
    if(!(cart===null)){
      console.log("Add: cart da có")
      const cartLocalStorage =JSON.parse(cart);
    exist=cartLocalStorage.find((item:Product) =>{ return item.id===product.id})
    if(exist){
      exist.quantity++;
      this.setCartLocalStorage(cartLocalStorage);
    }else{
      product.quantity=1;
      const newItem=[...cartLocalStorage,product];
      this.setCartLocalStorage(newItem);
      this.cartItems.next(cartLocalStorage);
    }
}else{
  console.log("Add: cart chua có")
  product.quantity=1;
  this.placeholder.push(product);
  this.setCartLocalStorage(this.placeholder);
  this.cartItems.next(JSON.parse(cart+""))
}


}
setCartLocalStorage(data:any){
  localStorage.setItem('cart',JSON.stringify(data))
}

getAllItems(){

}



}

