import { DOCUMENT } from '@angular/common';

import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  AfterContentInit,
  Inject,
  HostListener,
  Input,
  ChangeDetectionStrategy,
  SimpleChange,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/Services/product.service';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  i: any = -1;
  datas: Product[] = [];
  search: Product[] = [];
  itemsCart: Product[] = [];
  title = 'filter';

  numberItemInCart: number = 0;



  // scroll
  items = Array.from({ length: 210 }).map((_, i) => `Item #${i}`);
  constructor(
    @Inject(DOCUMENT) private document: any,
    private productService: ProductService,
    private cartService: ShoppingCartService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
  }

  searchText: any;
  searchValue = '';
  value = '';
  isShown?: boolean = false;
  hiden?: boolean = true;
  filterMetadata = { count: 0 };
  filtre = '';
  ishow: boolean = false;
  ishiden: boolean = false;
  visibleState?: any;
  onEnter(value: string) {
    this.value = value;
  }
  toggleShow() {
    this.isShown = true;
    console.log('N');
    if (this.filterMetadata.count < 4) {
      this.ishow = false;
        console.log(",-4");
    }else{
    this.ishow = true;
    }
  }
  displayValue!: '';
  goToSearch(key:string){

        this.router.navigate(['/search'],{queryParams:{'key':key}});
        this.productService.setKeySearch(key);

  }

  ngOnInit(): void {
    this.cartService.cartItems.subscribe((data) => {
      this.itemsCart = data;
    });
    this.cartService.cartItems.subscribe((data) => {
      this.numberItemInCart = data.length;
    });
    this.getProducts();
    this.getSearch();


  }clearListSearch(){
    this.search=[];
  }
  getProducts() {
    this.productService.getProducts().subscribe((res: any) => {
      this.datas = res;
    });
  }
  getSearch() {
    this.productService.getProducts().subscribe((res: any) => {
      this.search = res;

    });
  }

  displaySearch() {
console.log(this.search)
    var dropdownSearch = document.querySelector(
      '.dropdown-search'
    ) as HTMLElement;
    this.i = this.i * -1;
    if (this.i === 1) {
this.getSearch();
      dropdownSearch.style.display = 'block';
    } else {
      this.clearListSearch();

      dropdownSearch.style.display = 'none';
    }
  }
  hideSearch() {
    var dropdownSearch = document.querySelector(
      '.dropdown-search'
    ) as HTMLElement;
    dropdownSearch.style.display = 'none';
    this.i = -1;
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    var container = document.querySelector('.container') as HTMLElement;
    var header = document.querySelector('.header') as HTMLElement;
    var navbar = document.querySelector('.navbar') as HTMLElement;
    var topintro = document.querySelector('.top-intro') as HTMLElement;
    var logo = document.querySelector('.logo') as HTMLElement;
    navbar.style.padding = '0';
    if (document.documentElement.scrollTop < 1) {
      navbar.style.paddingTop = '4px';
      navbar.style.paddingBottom = '4px';
      topintro.style.display = 'block';
      logo.style.width = '170px';
      navbar.classList.remove('p-0');
    }
    if (document.documentElement.scrollTop > 200) {
      navbar.classList.add('transition-navbar');
      container.style.height = '100px';
      header.classList.add('fixed-top');
      topintro.style.display = 'none';
      navbar.classList.add('shadow');
      logo.style.width = '160px';
      logo.style.paddingTop = '2px';
      logo.style.paddingBottom = '2px';
    }
  }

}
