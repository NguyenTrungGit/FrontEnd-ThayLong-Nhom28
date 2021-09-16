import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/model/product.model';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-product-popup',
  templateUrl: './product-popup.component.html',
  styleUrls: ['./product-popup.component.css']
})
export class ProductPopupComponent implements OnInit {
product?:Product;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private shoppingCartService:ShoppingCartService) {

    this.product=data;
  }
  quantity:number=1;
  ngOnInit(): void {
  }
  getValue(element:any){
    this.quantity=element.value;
    if(this.quantity>99){
      this.quantity=99;
    }

  }
  addToCart(element: any){
    if (this.product !== undefined) {
      if(element.value == 0 || element.value == null){
        element.value = 1;
      }
      this.product.quantity = Number(element.value);
      this.shoppingCartService.addToCart(this.product);
    }
    }
}
