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
    this.activePage = 1;
    this.pager = {};
    this.getProducts();
  }

  ngOnInit(): void {
    this.categoryTemp = this.categoryName;
    this.getProducts();
  }
  getProducts() {
    this.activatedRoute.queryParams.subscribe((params) => {
      let min = params['min'];
      let max = params['max'];
      if (min !== undefined && max !== undefined) {
        this.maxPrice = max;
        this.minPrice = min;
      } else {
        this.maxPrice = Number(Object.values(this.rangePrice)[1]);
        this.minPrice = Number(Object.values(this.rangePrice)[0]);
      }
    });
    console.log(this.maxPrice, 'c', this.minPrice);

    if (this.categoryName === 'tatca') {
      this.productService
        .getLengthByPrice(this.minPrice, this.maxPrice)
        .subscribe((res: any) => {
          this.total_count = res.length;
        });
      this.productService
        .getProductsByPrice(this.minPrice, this.maxPrice, this.activePage)
        .subscribe((res: any) => {
          this.datas = res;
          this.pager = this.productService.getPager(
            this.total_count,
            this.activePage
          );
        });
      if (this.maxPrice != 99999999)
        this.router.navigate([], {
          queryParams: { min: this.minPrice, max: this.maxPrice },
        });
    } else {
      this.productService
        .getLengthByPriceAndCategory(
          this.minPrice,
          this.maxPrice,
          this.categoryTemp
        )
        .subscribe((res: any) => {
          this.total_count = res.length;
        });
      this.productService
        .getProductsByPriceAndCategory(
          this.minPrice,
          this.maxPrice,
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

      if (this.maxPrice != 99999999)
        this.router.navigate([], {
          queryParams: { min: this.minPrice, max: this.maxPrice },
        });
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
    this.scrollOnTop();
    if (this.maxPrice !== 99999999 && this.minPrice !== 0) {
      this.router.navigate([], {
        queryParams: { min: this.minPrice, max: this.maxPrice, trang: page },
      });
    } else {
      this.router.navigate([], { queryParams: { trang: page } });
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

  scrollOnTop() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
