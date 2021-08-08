import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Search } from '@syncfusion/ej2-angular-dropdowns';
import { BlogContentComponent } from './BTruong/blog-content/blog-content.component';
import { BlogComponent } from './BTruong/blog/blog.component';
import { ContactComponent } from './BTruong/contact/contact.component';
import { ProductComponent } from './BTruong/product/product.component';
import { BillConfirmComponent } from './NTrung/bill-confirm/bill-confirm.component';
import { CartComponent } from './NTrung/cart/cart.component';
import { FormConfirmComponent } from './NTrung/form-confirm/form-confirm.component';
import { ProductDetailComponent } from './NTrung/product-detail/product-detail.component';
import { HeaderComponent } from './Tuyen/header/header.component';
import { SearchComponent } from './Tuyen/header/search/search.component';
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
  { path: 'giohang', component:CartComponent },
  { path: 'cuahang/:cate/chitiet/:id', component: ProductDetailComponent },
  { path: "thongtinnhanhang", component:FormConfirmComponent},
  { path: "hoadon", component:BillConfirmComponent},
  { path: '', component: HomeComponent },
  { path: 'chiase/chiasechitiet/:id', component: BlogContentComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
