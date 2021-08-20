import { Input, SimpleChanges, OnChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
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
  maxPrice: number = 0;
  minPrice: number = 0;
  showport: any = [];
  datas: Product[] = [];
  tuyen: string = '';
  // paging
  total_count: any;
  activePage: any = 1;
  pager: any = {};

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.categoryTemp = this.categoryName;
    this.pager = {};
    this.getProducts();
  }

  ngOnInit(): void {
    this.categoryTemp = this.categoryName;
    this.activatedRoute.queryParams.subscribe((params) => {
      this.minPrice = params['min'];
      this.maxPrice = params['max'];
      this.activePage = params['trang'];
      if (this.activePage === undefined) {
        // console.log('para trang ko có');
        this.activePage = 1;
      } else {
        // console.log('para: ' + this.activePage);
      }
    });
    this.getProducts();
  }

  getProducts() {
    if (this.minPrice === undefined && this.maxPrice === undefined) {
      this.getProductWithoutParaPrice();
    } else {
      this.getProductWithParaPrice();
    }
  }

  // get product with category (no price)
  getProductWithoutParaPrice() {
    if (this.categoryName === 'tatca') {
      // get length of list product all
      this.productService.getProducts().subscribe((res: any) => {
        this.total_count = res.length;
        this.pager = this.productService.getPager(
          this.total_count,
          this.activePage
        );
      });

      this.productService
        .getProductsNomal(this.activePage)
        .subscribe((res: any) => {
          this.datas = res;
        });
    } else {
      // get length of list product (category)
      this.productService
        .getProductsByCategory(this.categoryTemp)
        .subscribe((res: any) => {
          this.total_count = res.length;
          this.pager = this.productService.getPager(
            this.total_count,
            this.activePage
          );
        });

      this.productService
        .getProductsByCategoryNomal(this.categoryTemp, this.activePage)
        .subscribe((res: any) => {
          this.datas = res;
        });
    }
  }

  // get product with category and price
  getProductWithParaPrice() {
    if (this.categoryName === 'tatca') {
      // console.log('all+ có price' + this.maxPrice);
      this.productService
        .getLengthByPrice(this.minPrice || 0, this.maxPrice || 0)
        .subscribe((res: any) => {
          this.total_count = res.length;
          this.pager = this.productService.getPager(
            this.total_count,
            this.activePage
          );
        });
      this.productService
        .getProductsByPrice(
          this.minPrice || 0,
          this.maxPrice || 0,
          this.activePage
        )
        .subscribe((res: any) => {
          this.datas = res;
        });
      //  this.router.navigate([], {  queryParams: {  min:this.minPrice,max:this.maxPrice} });
    } else {
      this.productService
        .getLengthByPriceAndCategory(
          this.minPrice || 0,
          this.maxPrice || 0,
          this.categoryTemp
        )
        .subscribe((res: any) => {
          this.total_count = res.length;
          // console.log(this.activePage)
          this.pager = this.productService.getPager(
            this.total_count,
            this.activePage
          );
        });
      this.productService
        .getProductsByPriceAndCategory(
          this.minPrice || 0,
          this.maxPrice || 0,
          this.categoryTemp,
          this.activePage
        )
        .subscribe((res: any) => {
          this.datas = res;
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

  scrollOnTop() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
  }

  setPage(page: number) {
    this.scrollOnTop();
    // send param to url
    if (this.maxPrice !== 99999999 && this.minPrice !== 0) {
      this.router.navigate([], {
        queryParams: { min: this.minPrice, max: this.maxPrice, trang: page },
      });
    } else {
      this.router.navigate([], { queryParams: { trang: page } });
    }

    // setPager
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
