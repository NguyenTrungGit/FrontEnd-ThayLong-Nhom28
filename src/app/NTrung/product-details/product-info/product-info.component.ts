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
addToCart(){
if(this.productInfo!==undefined){
  this.productInfo.quantity=this.amount;
  this.shoppingCartService.addToCart(this.productInfo)
}

}
  up() {
    this.amount += 1;
  }

  down() {
    if (this.amount > 1) {
      this.amount--;
    }
  }
}
