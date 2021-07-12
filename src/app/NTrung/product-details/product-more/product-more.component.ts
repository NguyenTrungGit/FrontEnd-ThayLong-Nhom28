import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-more',
  templateUrl: './product-more.component.html',
  styleUrls: ['./product-more.component.css'],
})
export class ProductMoreComponent implements OnInit {
  checkActiveInfo: boolean = true;
  checkActiveComment: boolean = false;

  @Input() productInfo?: Product;
  constructor() {}

  ngOnInit(): void {}

  changeInfo() {
    this.checkActiveInfo = true;
    this.checkActiveComment = false;
  }
  changeComment() {
    this.checkActiveComment = true;
    this.checkActiveInfo = false;
  }
}
