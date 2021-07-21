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
ChangeDetectionStrategy
} from '@angular/core';
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
   itemsCart: Product[] = [];
  title = 'filter';
  keyword ="name";
  found ="không tìm thấy sản phẩm."
numberItemInCart:number=0;

  public nameFilter='bao';
  public nameFilterControl =  new Subject<string>();
// scroll
  items = Array.from({length: 210}).map((_, i) => `Item #${i}`);
  constructor(@Inject(DOCUMENT) private document: any, private productService: ProductService ,private cartService:ShoppingCartService) {}

  ngOnInit(): void {
     this.cartService.cartItems.subscribe(data=>{
      this.itemsCart=data;
    })
    this.cartService.cartItems.subscribe(data=>{
        this.numberItemInCart=data.length
    })
    this.getProducts();
    this.nameFilterControl.pipe().subscribe(value=>{ this.nameFilter = value.trim().toLowerCase();
      console.log(value);
    }
    );


  }
  getProducts() {
    this.productService.getProducts().subscribe((res: any) => {
      this.datas = res;
    });
  }
  displaySearch() {
    var dropdownSearch = document.querySelector(
      '.dropdown-search'
    ) as HTMLElement;
    this.i = this.i * -1;
    if (this.i === 1) {
      dropdownSearch.style.display = 'block';
    } else {
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
   var container  = document.querySelector('.container') as HTMLElement;
    var header = document.querySelector('.header') as HTMLElement;
    var navbar = document.querySelector('.navbar') as HTMLElement;
    var topintro = document.querySelector('.top-intro') as HTMLElement;
    var logo = document.querySelector('.logo') as HTMLElement;
    if (document.documentElement.scrollTop < 1) {
      topintro.style.display = 'block';
      logo.style.width = '170px';
      navbar.classList.remove('p-0');
    }
    if (document.documentElement.scrollTop > 200) {
      navbar.classList.add('transition-navbar');
      container.style.height='86px'
      header.classList.add('fixed-top');
      topintro.style.display = 'none';
      navbar.classList.add('shadow');
      logo.style.width = '160px';
      logo.style.paddingTop = '8px';
      logo.style.paddingBottom = '8px';
      navbar.classList.add('p-0');
    }
  }
  selectEvent(item:any) {
    // do something with selected item
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e:any) {
    // do something
  }
  //filter

}
