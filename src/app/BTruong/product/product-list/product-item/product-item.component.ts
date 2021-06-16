import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductPopupComponent } from 'src/app/BTruong/product-popup/product-popup.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  constructor(public dialog: MatDialog){}
  openDialog(){
    this.dialog.open(ProductPopupComponent);
  }
  ngOnInit(): void {
  }



}
