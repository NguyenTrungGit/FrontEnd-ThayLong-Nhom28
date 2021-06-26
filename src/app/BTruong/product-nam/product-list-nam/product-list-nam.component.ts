import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-list-nam',
  templateUrl: './product-list-nam.component.html',
  styleUrls: ['./product-list-nam.component.css']
})
export class ProductListNamComponent implements OnInit {



  datas: Product[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe((res: any) => {
      this.datas = res;
      this.datas= this.datas.filter(p=>p.category=='NẤM')
    });
  }
}
