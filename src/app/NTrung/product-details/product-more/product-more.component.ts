import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-more',
  templateUrl: './product-more.component.html',
  styleUrls: ['./product-more.component.css'],
})
export class ProductMoreComponent implements OnInit {
  
  @Input() productInfo?: Product;
  constructor() {}

  ngOnInit(): void {}
}
