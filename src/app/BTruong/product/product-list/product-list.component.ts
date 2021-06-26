import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  totalLenght:any;
  page:number =1;
  showport:any =[];

  datas: Product[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe((res: any) => {
      this.datas = res;
    });
  }
}
