import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-popup',
  templateUrl: './product-popup.component.html',
  styleUrls: ['./product-popup.component.css']
})
export class ProductPopupComponent implements OnInit {
product?:Product;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
    console.log('xxx',data)
    this.product=data;
  }

  ngOnInit(): void {
  }

}
