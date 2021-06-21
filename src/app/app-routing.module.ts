import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './BTruong/blog/blog.component';
import { ContactComponent } from './BTruong/contact/contact.component';
import { ProductComponent } from './BTruong/product/product.component';
import { CartComponent } from './NTrung/cart/cart.component';
import { HomeComponent } from './Tuyen/home/home.component';
import { IntroduceComponent } from './Tuyen/introduce/introduce.component';

const routes: Routes = [

  {path:'trangchu',component: HomeComponent},
  {path:'cuahang',component: ProductComponent},
  {path:'gioithieu',component: IntroduceComponent},
  {path:'lienhe',component: ContactComponent},
  {path:'chiase',component: BlogComponent},
  {path:'giohang',component: CartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
