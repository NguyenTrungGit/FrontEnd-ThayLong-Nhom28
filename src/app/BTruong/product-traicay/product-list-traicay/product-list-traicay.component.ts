import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-list-traicay',
  templateUrl: './product-list-traicay.component.html',
  styleUrls: ['./product-list-traicay.component.css'],
})
export class ProductListTraicayComponent implements OnInit {
  totalLenght:any;
  page:number =1;
  showport:any =[];
  public datas: Product[] = [];

 
category:any;


  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.getProducts();
   
  
    
    
  }
      getProducts() {
        this.productService.getProducts().subscribe((res: any) => {
       this.datas = res;
       this.datas= this.datas.filter(p=>p.category=='FR')
        });
      }



}
