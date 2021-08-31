import { Route } from '@angular/compiler/src/core';
import {
  Component,
  Input,
  OnInit,
  SimpleChange,
  DoCheck,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/Services/product.service';
import { filter } from 'underscore';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private router: Router,
    private activeRouted: ActivatedRoute
  ) {}
  key: string = '';
  listProduct: Product[] = [];
  showport: any = [];
  SortbyParam = '';

  // paging
  total_count: any;
  activePage: any = 1;
  pager: any = {};

  ngOnInit(): void {
    this.refresh();
    this.getQueryParams();
    this.getProductsByKey();
    console.log('on it');
  }

  getProductsByKey() {
    this.productService.getlengthBySearch(this.key).subscribe((res:any)=>{
      this.total_count = res.length;
      this.pager = this.productService.getPager(this.total_count, this.activePage)
    })

    this.productService.getProductsBySearch(this.key,this.activePage).subscribe((res: any) => {
      this.listProduct = res;
      console.log(this.listProduct, 'list product filter');
    });
  }

  getQueryParams() {
    this.activeRouted.queryParams.subscribe((res: any) => {
      console.log(res.key, 'display querry');
      this.key = res.key;
    });
  }

  setPage(page: number) {
    this.scrollOnTop();
    // setPager
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    
    this.activePage = page;
    this.pager = this.productService.getPager(
      this.total_count,
      this.activePage
      );
      
    this.getProductsByKey();
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

  refresh(): void {
    let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
  }
}
