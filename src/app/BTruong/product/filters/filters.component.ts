import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/model/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit{
  @Output() messageEvent  = new EventEmitter<{min: string, max: string}>();
  minPrice!:number;
  maxPrice!:number;
  check:boolean=false;
  // @Input() categoryName:any;
  categorys: Product[] = [];
  minValue: number = 0;
  maxValue: number = 0;
  options: Options = {
    floor: 2000,
    ceil: 715000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
        this.minPrice=value;
          return '<b>  </b> ' + value + '₫' ;
        case LabelType.High:
          this.maxPrice=value;
          return '<b></b> ' + value + '₫';
        default:
          return   value +'d';
      }

    }
  };
  selectedItemId:any;

  constructor(private productService: ProductService,private actRoute: ActivatedRoute,private router:Router) {
  }


  sendParent(){

    this.messageEvent.emit({min: this.minPrice+'',max:this.maxPrice+''});
    this.router.navigate([], {  queryParams: {  min:this.minPrice,max:this.maxPrice,trang:1} });
    console.log("vao filter child")
    // this.messageEvent.emit(this.maxPrice);

  }
  getCategorys() {
    this.productService.getCategorys().subscribe((res: any) => {
      this.categorys = res;

    });
  }
  update(){
    if(this.selectedItemId== true){
      this.selectedItemId== this.categorys;
    }
  }
  ngOnInit(): void {
    this.getParamsFromURL();
    this.getCategorys();
  }
  // getProducts(){
  //   if(this.categoryName==="tatca"){
  //     this.productService.getProducts().subscribe((res: any) => {
  //       this.datas = res;
  //     });
  //   }else{
  //     console.log(this.categoryName+"tuyen")
  //     this.productService.getProductsByCategory(this.categoryName).subscribe((res: any) => {
  //       this.datas = res;
  //       console.log(this.datas)
  //     });
  //   }
  // }

  getParamsFromURL(){
    this.actRoute.queryParams.subscribe((params:any)=>{
      let max = params['max'];
      let min = params['min'];
      let page = params['trang'];
      console.log("page",page)

      if(max == undefined || min == undefined){
        this.maxValue = 715000;
        this.minValue = 2000;
      }else{
        this.maxValue = max;
        this.minValue = min;
      }
    })
  }
}
