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
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  checkcart:number=-1;
  i: any = -1;
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


  // displaySearch() {
  //   // var dropdownSearch = document.querySelector(
  //   //   '.dropdown-search'
  //   // ) as HTMLElement;
  //   // this.i = this.i * -1;
  //   // if (this.i === 1) {
  //   //   dropdownSearch.style.display = 'block';
  //   // } else {
  //   //   dropdownSearch.style.display = 'none';
  //   // }
  // }
  // hideSearch() {
  //   // var dropdownSearch = document.querySelector(
  //   //   '.dropdown-search'
  //   // ) as HTMLElement;
  //   // dropdownSearch.style.display = 'none';
  //   // this.i = -1;
  // }
  displaySearch() {

    // var dropdownSearch = document.querySelector(
    //   '.dropdown-search'
    // ) as HTMLElement;
    // this.i = this.i * -1;
    // if (this.i === 1) {
    //   dropdownSearch.style.display = 'block';
    // } else {
    //   dropdownSearch.style.display = 'none';
    // }
  }
  hideSearch() {
    // var dropdownSearch = document.querySelector(
    //   '.dropdown-search'
    // ) as HTMLElement;
    // dropdownSearch.style.display = 'none';
    // this.i = -1;
  }
  showcart(){
    var cart = document.querySelector(
        '.block-minicart'
      ) as HTMLElement;
      this.i = this.i * -1;
      if (this.i === 1) {
        cart.style.display = 'block';
      } else {
        cart.style.display = 'none';
      }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
   var container  = document.querySelector('.container') as HTMLElement;
    var header = document.querySelector('.header') as HTMLElement;
    var navbar = document.querySelector('.navbar') as HTMLElement;
    var topintro = document.querySelector('.top-intro') as HTMLElement;
    var logo = document.querySelector('.logo') as HTMLElement;
    navbar.style.paddingTop="0"
    navbar.style.paddingBottom="0"
    if (document.documentElement.scrollTop < 1) {
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
      container.style.height='100px'
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


  //filter
  getTotal():number{
    var total=0;
    for (let index = 0; index < this.itemsCart.length; index++) {
      total+=this.itemsCart[index].price*this.itemsCart[index].quantity
    }
    return total;
  }
}
