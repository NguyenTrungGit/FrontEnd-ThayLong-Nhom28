import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductPopupComponent } from 'src/app/BTruong/product-popup/product-popup.component';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-item-traicay',
  templateUrl: './product-item-traicay.component.html',
  styleUrls: ['./product-item-traicay.component.css']
})
export class ProductItemTraicayComponent implements OnInit {
  constructor(public dialog: MatDialog){}
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
  ngOnInit(): void {
  }
  @Input() productItem?: Product
}
