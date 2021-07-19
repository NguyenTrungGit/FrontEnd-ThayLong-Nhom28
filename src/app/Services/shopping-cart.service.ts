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
      const cartLocalStorage =JSON.parse(cart);
      this.cartItems.next(cartLocalStorage)
}
}
addToCart(product: Product) {
let exist:Product;
 var cart=localStorage.getItem('cart');
    if(!(cart===null)){
      const cartLocalStorage =this.getCartLocalStorage();
    exist=cartLocalStorage.find((item:Product) =>{ return item.id===product.id})
    if(exist){
      exist.quantity+=product.quantity;
      this.setCartLocalStorage(cartLocalStorage);
    }else{
      const newItem=[...cartLocalStorage,product];
      this.setCartLocalStorage(newItem);
      this.cartItems.next(this.getCartLocalStorage());
    }
}else{
  this.placeholder.push(product);
  this.setCartLocalStorage(this.placeholder);
  this.cartItems.next(this.getCartLocalStorage())
}
}

setCartLocalStorage(data:any){
  localStorage.setItem('cart',JSON.stringify(data))
}
getCartLocalStorage(){
 return JSON.parse(localStorage.getItem('cart')||'')
}
getAllItems(){

}



}

