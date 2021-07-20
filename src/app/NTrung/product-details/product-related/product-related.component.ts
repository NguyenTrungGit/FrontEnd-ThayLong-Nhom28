import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-related',
  templateUrl: './product-related.component.html',
  styleUrls: ['./product-related.component.scss']
})
export class ProductRelatedComponent implements OnInit {

  @Input() lsProductsRelated?: Product[];
  constructor() { }

  ngOnInit(): void {
  }

}
