import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { Voucher } from 'src/app/model/voucher.model';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  discount?: Voucher;
total:number=0;
  listVoucher: Voucher[] = [
    new Voucher('vc20000', '20000'),
    new Voucher('vc30000', '30000'),
    new Voucher('vc40000', '40000'),
    new Voucher('vc50000', '50000'),
  ];
  constructor(private shoppingcartService: ShoppingCartService) {}
  items:Product[] =[];

  ngOnInit(): void {
    this.shoppingcartService.cartItems.subscribe(data=>{
      this.items=data;
    })
    this.total=this.getTotal();
  }
updateQuantity(element:any,product:Product){
var quantity=element.value;
if(!Number(quantity) ||Number(quantity)<0){
  quantity="1";
}
product.quantity=quantity
this.shoppingcartService.updateCart(Number(quantity),product);
this.total=this.getTotal();
}

  up(element:any,product:Product) {
    element.value++;
    this.updateQuantity(element, product)
  }

  down(element:any,product:Product) {
  if(Number(element.value)>=2)
  element.value--;
  this.updateQuantity(element, product)
  }

  enterVoucher(event: any) {
    this.discount = this.listVoucher.find((n) => n.id === event.value);
  }
  getTotal():number{
    var total=0;
    for (let index = 0; index < this.items.length; index++) {
      total+=this.items[index].price*this.items[index].quantity
    }
    return total;
  }
  removeProduct(product:Product){
    this.shoppingcartService.removeProduct(product)
  }
}
