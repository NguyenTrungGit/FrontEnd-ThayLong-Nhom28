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
  quantity:string='x';
  ngOnInit(): void {
  }
  getValue(val:string){
  }
  addToCart(){
      this.product!.quantity=1;
      this.shoppingCartService.addToCart(this.product!)

    }
}
