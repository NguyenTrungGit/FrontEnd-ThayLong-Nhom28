import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductPopupComponent } from 'src/app/BTruong/product-popup/product-popup.component';
import { Product } from 'src/app/model/product.model';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-product-item-home',
  templateUrl: './product-item-home.component.html',
  styleUrls: ['./product-item-home.component.css']
})
export class ProductItemHomeComponent implements OnInit {
  @Input() item!: Product
  constructor(public dialog: MatDialog,private shoppingCartService:ShoppingCartService) { }
  openDialog(){
    this.dialog.open(ProductPopupComponent,{
      data:{
        id: this.item?.id,
            name: this.item?.name,
            price: this.item?.price,
            quantity:this.item?.quantity,
            category: this.item?.category,
            origin: this.item?.origin,
            img1: this.item?.img1,
            img2: this.item?.img2,
            img3: this.item?.img3,
            description: this.item?.description
      }
    });
  }
  addToCart(){
    this.item.quantity=1;
    this.shoppingCartService.addToCart(this.item);
    // window.alert('has been added to cart!')


      }
  ngOnInit(): void {

  }

}
