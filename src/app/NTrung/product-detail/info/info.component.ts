import { Component, OnInit,ViewEncapsulation,Input, SimpleChanges } from '@angular/core';
import SwiperCore, { Navigation, Thumbs } from "swiper/core";
// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/Services/product.service';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class InfoComponent implements OnInit {
  thumbsSwiper: any;
  amount: any = 1;

  // TODO: receive data from product details
  // @Input() productInfo?: Product;
  @Input() idInput:any
  productInfo!:Product
  id:any;


  
    addToCart(element:any){
    if(this.productInfo!==undefined){
    this.productInfo.quantity=Number(element.value);
    this.shoppingCartService.addToCart(this.productInfo)
}

}
  up(element:any,product?:Product) {
    element.value++;
    this.updateQuantity(element)
  }
  constructor(private shoppingCartService: ShoppingCartService, private productService: ProductService,) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.id = this.idInput
    this.getProductById();
  }
  ngOnInit(): void {
    this.id = this.idInput
    this.getProductById();
  }



  down(element:any,product?:Product) {
    if(Number(element.value)>=2)
  element.value--;
  this.updateQuantity(element)
  }

  updateQuantity(element:any){
    var quantity=element.value;
    if(!Number(quantity) ||Number(quantity)<0){
      quantity="1";
    }
    }

  getProductById() {
    // TODO: return a array, in array have 1 product has this.id and find product by id (Optimized)
    this.productService.getProductsById(this.id).subscribe((res: any) => {
      this.productInfo = res.find((n: any) => n.id === this.id);
    });
  }

}
