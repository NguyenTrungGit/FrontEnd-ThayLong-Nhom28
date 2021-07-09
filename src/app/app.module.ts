import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './NTrung/product-details/product-details.component';
import { HeaderComponent } from './Tuyen/header/header.component';
import { FooterComponent } from './Tuyen/footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductComponent } from './BTruong/product/product.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductPopupComponent } from './BTruong/product-popup/product-popup.component';
import { ProductListComponent } from './BTruong/product/product-list/product-list.component';
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
import { ProductRelatedComponent } from './NTrung/product-details/product-related/product-related.component';
import { HomeComponent } from './Tuyen/home/home.component';
import { ProductItemHomeComponent } from './Tuyen/home/product-item-home/product-item-home.component';
import { CartComponent } from './NTrung/cart/cart.component';
import { MaterialModule } from './material/material.module';
import { IntroduceComponent } from './Tuyen/introduce/introduce.component';
import { PayComponent } from './NTrung/pay/pay.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PayFormComponent } from './NTrung/pay/pay-form/pay-form.component';
import { PayBillComponent } from './NTrung/pay/pay-bill/pay-bill.component';
import { HttpClientModule } from '@angular/common/http';
import { ContainerComponent } from './Tuyen/container/container.component';
import { TestdataComponent } from './Tuyen/testdata/testdata.component';

import { ProductRauComponent } from './BTruong/product-rau/product-rau.component';
import { TitleRauComponent } from './BTruong/product-rau/title-rau/title-rau.component';
import { ProductListRauComponent } from './BTruong/product-rau/product-list-rau/product-list-rau.component';
import { ProductItemRauComponent } from './BTruong/product-rau/product-list-rau/product-item-rau/product-item-rau.component';
import { ProductTraicayComponent } from './BTruong/product-traicay/product-traicay.component';
import { TitleTraicayComponent } from './BTruong/product-traicay/title-traicay/title-traicay.component';
import { ProductListTraicayComponent } from './BTruong/product-traicay/product-list-traicay/product-list-traicay.component';
import { ProductItemTraicayComponent } from './BTruong/product-traicay/product-list-traicay/product-item-traicay/product-item-traicay.component';
import { ProductCuComponent } from './BTruong/product-cu/product-cu.component';
import { TitleCuComponent } from './BTruong/product-cu/title-cu/title-cu.component';
import { ProductListCuComponent } from './BTruong/product-cu/product-list-cu/product-list-cu.component';
import { ProductItemCuComponent } from './BTruong/product-cu/product-list-cu/product-item-cu/product-item-cu.component';
import { ProductQuaComponent } from './BTruong/product-qua/product-qua.component';
import { TitleQuaComponent } from './BTruong/product-qua/title-qua/title-qua.component';
import { ProductListQuaComponent } from './BTruong/product-qua/product-list-qua/product-list-qua.component';
import { ProductItemQuaComponent } from './BTruong/product-qua/product-list-qua/product-item-qua/product-item-qua.component';
import { ProductNamComponent } from './BTruong/product-nam/product-nam.component';
import { TitleNamComponent } from './BTruong/product-nam/title-nam/title-nam.component';
import { ProductListNamComponent } from './BTruong/product-nam/product-list-nam/product-list-nam.component';
import { ProductItemNamComponent } from './BTruong/product-nam/product-list-nam/product-item-nam/product-item-nam.component';
import { ThanksPageComponent } from './NTrung/thanks-page/thanks-page.component';
import { PopupLoginComponent } from './Tuyen/header/popup-login/popup-login.component';

import { HeaderDirectDirective } from './Tuyen/header/header-direct.directive';
import { CommentDialogComponent } from './NTrung/product-details/product-more/comment-dialog/comment-dialog.component';
import { ProductInfoComponent } from './NTrung/product-details/product-info/product-info.component';
import { ProductMoreComponent } from './NTrung/product-details/product-more/product-more.component';
import { CommentShowComponent } from './NTrung/product-details/product-more/comment-show/comment-show.component';
import { MoreInfoComponent } from './NTrung/product-details/product-more/more-info/more-info.component';

@NgModule({
  declarations: [
    MoreInfoComponent,
    CommentShowComponent,
    ProductInfoComponent,
    ProductMoreComponent,
    AppComponent,
    ProductDetailsComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ProductListComponent,
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
    ProductRelatedComponent,
    HomeComponent,
    ProductItemHomeComponent,
    CartComponent,
    IntroduceComponent,
    PayComponent,
    PayFormComponent,
    PayBillComponent,
    ContainerComponent,
    TestdataComponent,
    ProductRauComponent,
    TitleRauComponent,
    ProductListRauComponent,
    ProductItemRauComponent,
    ProductTraicayComponent,
    TitleTraicayComponent,
    ProductListTraicayComponent,
    ProductItemTraicayComponent,
    ProductCuComponent,
    TitleCuComponent,
    ProductListCuComponent,
    ProductItemCuComponent,
    ProductQuaComponent,
    TitleQuaComponent,
    ProductListQuaComponent,
    ProductItemQuaComponent,
    ProductNamComponent,
    TitleNamComponent,
    ProductListNamComponent,
    ProductItemNamComponent,
    ThanksPageComponent,
    PopupLoginComponent,
    HeaderDirectDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxSliderModule,
    AutocompleteLibModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CommentDialogComponent],
})
export class AppModule {}
