import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { VoucherService } from 'src/app/Services/NTrung/voucher.service';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  voucherGroup: FormGroup = this._fb.group({
    voucherId: [null, [Validators.required, Validators.minLength(4)]],
  });
  discount: number = 0;
  notifi: string = '';

  total: number = 0;
  items: Product[] = [];
  diliveryPrice: number = 20000;
  totalTemp: number = 0;

  constructor(
    private shoppingcartService: ShoppingCartService,
    private voucherService: VoucherService,
    private _fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.scrollOnTop();
    this.shoppingcartService.cartItems.subscribe((data) => {
      this.items = data;
      console.log(this.items.length);
    });
    this.discount = this.voucherService.getLocalVoucher() || 0;
    this.total = this.getTotal();
  }
  updateQuantity(element: any, product: Product) {
    var quantity = element.value;
    if (!Number(quantity) || Number(quantity) < 0) {
      quantity = '1';
    }
    product.quantity = quantity;
    this.shoppingcartService.updateCart(Number(quantity), product);
    this.total = this.getTotal();
  }

  up(element: any, product: Product) {
    element.value++;
    this.updateQuantity(element, product);
  }

  down(element: any, product: Product) {
    if (Number(element.value) >= 2) element.value--;
    this.updateQuantity(element, product);
  }

  getTotal(): number {
    var total = 0;
    for (let index = 0; index < this.items.length; index++) {
      total += this.items[index].price * this.items[index].quantity;
    }
    return total;
    ``;
  }

  removeProduct(product: Product) {
    this.shoppingcartService.removeProduct(product);
  }

  applyVoucher() {
    let id = this.voucherGroup.controls.voucherId.value;
    this.voucherService.getVoucherById(id).subscribe((res: any) => {
      if (res.find((n: any) => n.id === id)) {
        this.voucherService.setLocalVoucher(
          res.find((n: any) => n.id === id).discount
        );
        this.discount = this.voucherService.getLocalVoucher();
        this.notifi = '';
      } else {
        this.notifi = 'Nhập sai';
        this.discount = 0;
      }
    });
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
