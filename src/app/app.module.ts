import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './NTrung/product-details/product-details.component';
import { HeaderComponent } from './Tuyen/header/header.component';
import { FooterComponent } from './Tuyen/footer/footer.component';
import { ProductComponent } from './BTruong/product/product.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductPopupComponent } from './BTruong/product-popup/product-popup.component';
import { ProductListComponent } from './BTruong/product/product-list/product-list.component';
import { PagingComponent } from './BTruong/product/paging/paging.component';
import { FiltersComponent } from './BTruong/product/filters/filters.component';
import { TitleComponent } from './BTruong/product/title/title.component';
import { ProductItemComponent } from './BTruong/product/product-list/product-item/product-item.component';
import { Filter1Component } from './BTruong/blog/filter1/filter1.component';
import { ListPostsComponent } from './BTruong/blog/list-posts/list-posts.component';
import { ListPostsItemComponent } from './BTruong/blog/list-posts/list-posts-item/list-posts-item.component';
import { Title3Component } from './BTruong/blog/title3/title3.component';
import { BlogComponent } from './BTruong/blog/blog.component';
import { ContactComponent } from './BTruong/contact/contact.component';
import { MainComponent } from './BTruong/contact/main/main.component';
import { Title4Component } from './BTruong/contact/title4/title4.component';
import { SaleComponent } from './BTruong/sale/sale.component';
import { SaleFiltersComponent } from './BTruong/sale/sale-filters/sale-filters.component';
import { SalePagingComponent } from './BTruong/sale/sale-paging/sale-paging.component';
import { SaleProductListComponent } from './BTruong/sale/sale-product-list/sale-product-list.component';
import { SaleTitleComponent } from './BTruong/sale/sale-title/sale-title.component';
import { SaleProductItemComponent } from './BTruong/sale/sale-product-list/sale-product-item/sale-product-item.component';
import { SaleProductPopupComponent } from './BTruong/sale/sale-product-popup/sale-product-popup.component';





@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ProductListComponent,
    PagingComponent,
    FiltersComponent,
    TitleComponent,
    ProductItemComponent,
    ProductPopupComponent,
    Filter1Component,
    ListPostsComponent,
    ListPostsItemComponent,
    Title3Component,
    BlogComponent,
    ContactComponent,
    MainComponent,
   Title4Component,
   SaleComponent,
   SaleFiltersComponent,
   SalePagingComponent,
   SaleProductListComponent,
   SaleTitleComponent,
   SaleProductItemComponent,
   SaleProductPopupComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
