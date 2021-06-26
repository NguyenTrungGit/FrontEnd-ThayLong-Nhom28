import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductPopupComponent } from 'src/app/BTruong/product-popup/product-popup.component';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-item-cu',
  templateUrl: './product-item-cu.component.html',
  styleUrls: ['./product-item-cu.component.css']
})
export class ProductItemCuComponent implements OnInit {

  constructor(public dialog: MatDialog){}
  openDialog(){
    this.dialog.open(ProductPopupComponent);
  }
  ngOnInit(): void {
  }
  @Input() productItem?: Product
}
