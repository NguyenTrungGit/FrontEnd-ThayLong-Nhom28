import { ProductListComponent } from './product-list/product-list.component';
import { Component, OnInit, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public rangePrice = { maxprice: 0, minprice: 999999999 }
cate!:string|null;
  constructor(private actRoute: ActivatedRoute) { }


  filterPrice(event: any){
    this.rangePrice=event
  }
  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(res => {
      if(res.get('cate')===null){
        this.cate="tatca"
      }else{
        this.cate=res.get('cate');
      }
      console.log(this.cate)
    });
  }

}
