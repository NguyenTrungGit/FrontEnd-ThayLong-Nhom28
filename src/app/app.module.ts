import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './NTrung/product-details/product-details.component';
import { ProductNewsComponent } from './NTrung/product-news/product-news.component';
import { ProductRelatedComponent } from './NTrung/product-related/product-related.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
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
