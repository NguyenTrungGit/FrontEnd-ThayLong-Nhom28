import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit {
  amount: any = 1;
  checking = false;
  // TODO: receive data from product details
  @Input() productInfo?: Product;

  constructor(private shoppingCartService:ShoppingCartService) {}

  ngOnInit(): void {}
    addToCart(element:any){
    if(this.productInfo!==undefined){
    this.productInfo.quantity=Number(element.value);
    this.shoppingCartService.addToCart(this.productInfo)
}

}
  up(element:any,product?:Product) {
    element.value++;
    this.updateQuantity(element)
  }

  down(element:any,product?:Product) {
    if(Number(element.value)>=2)
  element.value--;
  this.updateQuantity(element)
  }
  updateQuantity(element:any){
    var quantity=element.value;
    if(!Number(quantity) ||Number(quantity)<0){
      quantity="1";
    }
    }
}
