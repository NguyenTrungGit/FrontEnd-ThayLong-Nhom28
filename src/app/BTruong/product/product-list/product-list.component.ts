import { Input, SimpleChanges, OnChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() rangePrice: any;
  @Input() categoryName: any;
  categoryTemp: any;
  maxPrice?: number ;
  minPrice?: number;
  showport: any = [];
  datas: Product[] = [];
tuyen:string='';
  // paging
  total_count: any;
  activePage: any;
  pager: any = {};
  constructor(private productService: ProductService,private activatedRoute: ActivatedRoute,private router:Router) {}
  ngOnChanges(changes: SimpleChanges): void {

    this.categoryTemp = this.categoryName;
    this.pager ={}
    this.getProducts();
  }

  ngOnInit(): void {
    this.categoryTemp = this.categoryName;
    this.activatedRoute.queryParams.subscribe(params => {
     this.minPrice=params['min']
      this.maxPrice=params['max']
      this.activePage=params['trang']
if(this.activePage===undefined){
  console.log("para trang ko có")
this.activePage=1
}else{
  console.log("para: "+this.activePage)
}

  });

    this.getProducts();


  }
  getProducts(){
    console.log(this.minPrice+"_"+this.maxPrice)
    if(this.minPrice===undefined&&this.maxPrice===undefined){
      this.getProductWithoutParaPrice();
    }else{
      this.getProductWithParaPrice();
    }
    console.log(this.datas)

  }
//   getProducts() {
//     console.log("trang"+this.activePage);
//     console.log("giá truyền vào"+Number(Object.values(this.rangePrice)[0])+"++"+Number(Object.values(this.rangePrice)[1]))


//     let min;
//     let max;


//    console.log("para: "+min+","+max)
//    if((min===undefined&&max===undefined)||min===0&&max===0){
//      console.log("para empty")
//      this.getProductWithoutParaPrice()
//      if(this.minPrice!==0&&this.maxPrice!==0){this.router.navigate([], {  queryParams: {  min:this.minPrice,max:this.maxPrice} });}

//    }else{
//     console.log("para có giá trị")
//     this.maxPrice=Number(max);
// this.minPrice=Number(min);
// this.getProductWithParaPrice()
//    }
//    console.log("giá hien tai"+this.minPrice+","+this.maxPrice)
//    console.log("giá truyền vào"+Number(Object.values(this.rangePrice)[0])+"++"+Number(Object.values(this.rangePrice)[1]))
//    if(this.minPrice!==Number(Object.values(this.rangePrice)[0])||this.maxPrice!==Number(Object.values(this.rangePrice)[1])){
//     console.log("giá đổi")
//     this.maxPrice = Number(Object.values(this.rangePrice)[1]);
//      this.minPrice = Number(Object.values(this.rangePrice)[0]);
//      console.log(this.minPrice+","+this.maxPrice)
//      this.getProductWithParaPrice()
//    }else{
//     console.log("giá ko đổi")
//    }

// console.log(this.datas)
//   }
  getProductWithoutParaPrice(){
    if (this.categoryName === 'tatca') {
      this.productService.getProducts().subscribe((res: any) => {
          this.total_count = res.length;
        });
      this.productService.getProductsNomal(this.activePage).subscribe((res: any) => {
            this.datas = res;
            this.pager = this.productService.getPager(
            this.total_count,
            this.activePage
          );
        });
    } else {
      this.productService
        .getProductsByCategory(
          this.categoryTemp
        )
        .subscribe((res: any) => {
          this.total_count = res.length;
        });
      this.productService
        .getProductsByCategoryNomal(
          this.categoryTemp,
          this.activePage
        )
        .subscribe((res: any) => {
          this.datas = res;
          this.pager = this.productService.getPager(
            this.total_count,
            this.activePage
          );
        });

    }
  }
  getProductWithParaPrice(){
    if (this.categoryName ==='tatca') {
      console.log("all+ có price"+this.maxPrice)
      this.productService
        .getLengthByPrice(this.minPrice||0, this.maxPrice||0)
        .subscribe((res: any) => {
          this.total_count = res.length;
        });
      this.productService
        .getProductsByPrice(this.minPrice||0, this.maxPrice||0, this.activePage)
        .subscribe((res: any) => {
          this.datas = res;
          this.pager = this.productService.getPager(
            this.total_count,
            this.activePage
          );
        });
      //  this.router.navigate([], {  queryParams: {  min:this.minPrice,max:this.maxPrice} });
    } else {
      this.productService
        .getLengthByPriceAndCategory(
          this.minPrice||0,
          this.maxPrice||0,
          this.categoryTemp
        )
        .subscribe((res: any) => {
          this.total_count = res.length;
        });
      this.productService
        .getProductsByPriceAndCategory(
          this.minPrice||0,
          this.maxPrice||0,
          this.categoryTemp,
          this.activePage
        )
        .subscribe((res: any) => {
          this.datas = res;
          this.pager = this.productService.getPager(
            this.total_count,
            this.activePage
          );
        });


       // this.router.navigate([], {  queryParams: {  min:this.minPrice,max:this.maxPrice} });
    }
  }
  sort(event: any) {
    switch (event.target.value) {
      case '': {
        this.datas;
        break;
      }
      case 'Low': {
        this.datas = this.datas.sort((low, high) => low.price - high.price);
        break;
      }

      case 'High': {
        this.datas = this.datas.sort((low, high) => high.price - low.price);
        break;
      }

      case 'Name-a': {
        this.datas = this.datas.sort(function (low, high) {
          if (low.name < high.name) {
            return -1;
          } else if (low.name > high.name) {
            return 1;
          } else {
            return 0;
          }
        });
        break;
      }
      case 'N': {
        this.datas = this.datas.sort(function (low, high) {
          if (low.name < high.name) {
            return 1;
          } else if (low.name > high.name) {
            return -1;
          } else {
            return 0;
          }
        });

        break;
      }

      default: {
        this.datas = this.datas.sort((low, high) => low.price - high.price);

        break;
      }
    }
    return this.datas;
  }

  setPage(page: number) {
console.log("set Page: "+page)
if(this.minPrice===undefined&&this.maxPrice===undefined){
  this.router.navigate([], {  queryParams: { trang:page } });
}else{
  this.router.navigate([], {  queryParams: {min:this.minPrice,max:this.maxPrice, trang:page } });
}

    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.activePage = page;
    this.pager = this.productService.getPager(
      this.total_count,
      this.activePage
    );
    this.getProducts();
  }
}
