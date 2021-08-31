import { Category } from './../../model/category.model';
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
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  vSearch:number=-1;
  vCart: any = -1;
  totalCart:number=0;
  datas: Product[] = [];
   itemsCart: Product[] = [];
   search: Product[] = [];
  numberItemInCart:number=0;
  categorys: Category[]=[];


  constructor(@Inject(DOCUMENT) private document: any,
  private productService: ProductService ,
  private cartService:ShoppingCartService,
  private router: Router) {}
  searchText: any;
  searchValue = '';
  value = '';
  isShown?: boolean = false;
  hiden?: boolean = true;
  filterMetadata = { count: 0 };
  filtre = '';
  show: boolean = false;

  ishiden: boolean = false;
  visibleState?: any;
  block:any;
  onEnter(value: string) {
    this.value = value;
  }

  displayValue!: '';

  goToSearch(key:string){
    setTimeout(() => {
        this.router.navigate(['/search'],{queryParams:{'key':key}});
      }, 1000);
  }

  refresh(): void {
    let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
  }

  ngOnInit(): void {
     this.scrollOnTop();
     this.cartService.cartItems.subscribe(data=>{
      this.itemsCart=data;
      this.numberItemInCart=this.countQuantityCart(this.itemsCart)
      this.totalCart=this.getTotal();
    })
    this.getCategorys()

    this.getSearch();




  }

  clearListSearch(){
    this.search=[];
  }
  getSearch() {
    this.productService.getProducts().subscribe((res: any) => {
      this.search = res;

    });
  }
  countQuantityCart(itemsCart: Product[]):number{
    let count=0;
    for(let i = 0; i < itemsCart.length; i++){
    count+=itemsCart[i].quantity;
    }
return count;
  }
  getCategorys() {
    this.productService.getCategorys().subscribe((res: any) => {
      this.categorys = res;
    });
  }

  removeProduct(product:Product){

this.cartService.removeProduct(product);

  }

  displaySearch() {
this.hideCart();
    var dropdownSearch = document.querySelector(
      '.dropdown-search'
    ) as HTMLElement;
    this.vSearch = this.vSearch * -1;
    if (this.vSearch === 1) {
      dropdownSearch.style.display = 'block';
    } else {
     // this.clearListSearch();
      dropdownSearch.style.display = 'none';
    }
  }
  hideSearch() {
    var dropdownSearch = document.querySelector(
      '.dropdown-search'
    ) as HTMLElement;
    dropdownSearch.style.display = 'none';
    this.vSearch = -1;
  }
  hideCart() {
    var cart = document.querySelector(
      '.block-minicart'
    ) as HTMLElement;
    cart.style.display = 'none';
    this.vCart = -1;
  }
  showcart(){
    this.hideSearch();
    var cart = document.querySelector(
        '.block-minicart'
      ) as HTMLElement;
      this.vCart = this.vCart * -1;
      if (this.vCart === 1) {
        cart.style.display = 'block';
      } else {
        cart.style.display = 'none';
      }
  }
closeAll(){
  this.hideSearch();
  this.hideCart();
  var navmobile = document.querySelector(
    '.nav-input'
  ) as HTMLElement;
  this.onSaveUsernameChanged(false);
}
public saveUsername:any;

public onSaveUsernameChanged(value:boolean){
    this.saveUsername = value;
}
  @HostListener('window:scroll', [])
  onWindowScroll() {

    var header = document.querySelector('.header') as HTMLElement;
    var navbar = document.querySelector('.navbar') as HTMLElement;
    var topintro = document.querySelector('.top-intro') as HTMLElement;
    var logo = document.querySelector('.logo') as HTMLElement;
    navbar.style.paddingTop="0"
    navbar.style.paddingBottom="0"
    if (document.documentElement.scrollTop < 1) {
      header.classList.remove('fixed-top');
      navbar.style.paddingTop="4px"
      navbar.style.paddingBottom="4px"
      navbar.style.paddingLeft="8px"
      navbar.style.paddingRight="8px"
      topintro.style.display = 'block';
      logo.style.width = '170px';
      navbar.classList.remove('p-0');
    }
    if (document.documentElement.scrollTop > 200) {
      navbar.classList.add('transition-navbar');

      header.classList.add('fixed-top');
      topintro.style.display = 'none';
      navbar.classList.add('shadow');
      logo.style.width = '160px';
      logo.style.paddingTop = '2px';
      logo.style.paddingBottom = '2px';

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

  //filter
  getTotal():number{
    var total=0;
    for (let index = 0; index < this.itemsCart.length; index++) {
      total+=this.itemsCart[index].price*this.itemsCart[index].quantity
    }
    return total;
  }
}
