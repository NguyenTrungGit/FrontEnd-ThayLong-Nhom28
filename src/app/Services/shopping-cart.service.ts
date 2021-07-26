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
let productInCart:Product;
 var cart=localStorage.getItem('cart');
    if(!(cart===null)){
      const cartLocalStorage =this.getCartLocalStorage();
    productInCart=cartLocalStorage.find((item:Product) =>{ return item.id===product.id})
    if(productInCart){
      productInCart.quantity+=product.quantity;
      this.setCartLocalStorage(cartLocalStorage);

    }else{
      const newItem=[...cartLocalStorage,product];
      this.setCartLocalStorage(newItem);
      // this.cartItems.next(this.getCartLocalStorage());
    }
}else{
  this.placeholder.push(product);
  this.setCartLocalStorage(this.placeholder);

}
this.cartItems.next(this.getCartLocalStorage())
}

updateCart(quantity:number,product:Product){
  let productInCart:Product;
  var cart=localStorage.getItem('cart');
  const cartLocalStorage =this.getCartLocalStorage();
  productInCart=cartLocalStorage.find((item:Product) =>{ return item.id===product.id})
  productInCart.quantity=quantity;
  this.setCartLocalStorage(cartLocalStorage);
}

setCartLocalStorage(data:any){
  localStorage.setItem('cart',JSON.stringify(data))
}
getCartLocalStorage(){
 return JSON.parse(localStorage.getItem('cart')||'')
}
removeProduct(product: Product){
  let productInCart:Product;
 var cart=localStorage.getItem('cart');
    if(!(cart===null)){
      const cartLocalStorage =this.getCartLocalStorage();
      const index = cartLocalStorage.findIndex((item:Product) =>item.id ===product.id);
      if (index !== undefined) cartLocalStorage.splice(index, 1);
       this.setCartLocalStorage(cartLocalStorage);
    }
 this.cartItems.next(this.getCartLocalStorage())
}
getAllItems(){

}



}

