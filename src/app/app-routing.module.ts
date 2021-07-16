import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './BTruong/blog/blog.component';
import { ContactComponent } from './BTruong/contact/contact.component';
import { ProductComponent } from './BTruong/product/product.component';
import { CartComponent } from './NTrung/cart/cart.component';
import { PayComponent } from './NTrung/pay/pay.component';
import { ProductDetailsComponent } from './NTrung/product-details/product-details.component';
import { HeaderComponent } from './Tuyen/header/header.component';
import { HomeComponent } from './Tuyen/home/home.component';
import { IntroduceComponent } from './Tuyen/introduce/introduce.component';

const routes: Routes = [
  { path: 'trangchu', component: HomeComponent },
  { path: 'trangchu', component: HeaderComponent },
  { path: 'cuahang/:cate', component: ProductComponent },
  { path: 'cuahang', component: ProductComponent },
  { path: 'gioithieu', component: IntroduceComponent },
  { path: 'lienhe', component: ContactComponent },
  { path: 'chiase', component: BlogComponent },
  { path: 'giohang', component: CartComponent },
  { path: 'cuahang/:cate/chitiet/:id', component: ProductDetailsComponent },
  { path: 'pay', component: PayComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
