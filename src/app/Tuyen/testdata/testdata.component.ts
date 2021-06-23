import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-testdata',
  templateUrl: './testdata.component.html',
  styleUrls: ['./testdata.component.css']
})
export class TestdataComponent implements OnInit {
datas:Product[]=[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
this.getProducts();
  }
getProducts(){
  this.productService.getProducts().subscribe((res: any)=>{
    this.datas=res;
  })
}
}
