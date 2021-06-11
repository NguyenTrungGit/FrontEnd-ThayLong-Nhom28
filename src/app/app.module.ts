import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './NTrung/product-details/product-details.component';
import { HeaderComponent } from './Tuyen/header/header.component';
import { FooterComponent } from './Tuyen/footer/footer.component';

import { ProductComponent } from './BTruong/product/product.component';
import { ProductListComponent } from './BTruong/product/product-list/product-list.component';
import { PagingComponent } from './BTruong/product/paging/paging.component';
import { FiltersComponent } from './BTruong/product/filters/filters.component';
import { ProductItemComponent } from './BTruong/product/product-list/product-item/product-item.component';

import { ProductNewsComponent } from './NTrung/product-details/product-news/product-news.component';
import { ProductRelatedComponent } from './NTrung/product-details/product-related/product-related.component';
import { CartComponent } from './NTrung/cart/cart.component';
import { CartInfoComponent } from './NTrung/cart/cart-info/cart-info.component';
import { CartBillComponent } from './NTrung/cart/cart-bill/cart-bill.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';


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
    HeaderComponent,
    ProductItemComponent,
    ProductNewsComponent,
    ProductRelatedComponent,
    CartComponent,
    CartInfoComponent,
    CartBillComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
