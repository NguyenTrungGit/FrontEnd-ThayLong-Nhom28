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
    ProductRelatedComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
