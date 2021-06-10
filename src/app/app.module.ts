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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
