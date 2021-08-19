import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductPopupComponent } from 'src/app/BTruong/product-popup/product-popup.component';
import { Product } from 'src/app/model/product.model';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any,public dialog: MatDialog,private shoppingCartService:ShoppingCartService){}
  openDialog(){
    this.dialog.open(ProductPopupComponent,{
      data:{
        id: this.productItem?.id,
            name: this.productItem?.name,
            price: this.productItem?.price,
            quantity:this.productItem?.quantity,
            category: this.productItem?.category,
            origin: this.productItem?.origin,
            img1: this.productItem?.img1,
            img2: this.productItem?.img2,
            img3: this.productItem?.img3,
            description: this.productItem?.description
      }
    });
  }
  addToCart(){
    this.productItem.quantity=1;
    this.shoppingCartService.addToCart(this.productItem);
    // window.alert('has been added to cart!')
    this.scrollOnTop();

      }
  ngOnInit(): void {
  }

  scrollOnTop() {

       window.scrollTo(0, document.documentElement.scrollTop-0.0001);

  }
  @Input() productItem!: Product
}
