import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SaleProductPopupComponent } from '../../sale-product-popup/sale-product-popup.component';

@Component({
  selector: 'app-sale-product-item',
  templateUrl: './sale-product-item.component.html',
  styleUrls: ['./sale-product-item.component.css']
})
export class SaleProductItemComponent implements OnInit {

  constructor(public dialog: MatDialog){}
  openPopup(){
    this.dialog.open(SaleProductPopupComponent);
  }
  ngOnInit(): void {
  }

}
