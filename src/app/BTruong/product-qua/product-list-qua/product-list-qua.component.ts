import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-list-qua',
  templateUrl: './product-list-qua.component.html',
  styleUrls: ['./product-list-qua.component.css']
})
export class ProductListQuaComponent implements OnInit {
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
      this.datas= this.datas.filter(p=>p.category=='Quả')
    });
  }
}
