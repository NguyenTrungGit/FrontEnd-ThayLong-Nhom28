// import { CdTimerModule } from 'angular-cd-timer';

import { Component, Inject, Input, OnInit } from '@angular/core';

import { Category } from 'src/app/model/category.model';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/Services/product.service';
import { FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})

export class HomeComponent implements OnInit {

listFeatured:Product[] = [];
listCategorys:Category[]=[]


  constructor(@Inject(DOCUMENT) private document: any,private _fb: FormBuilder) {

  }

  ngOnInit(): void {
this.getFeatured();
this.getCategorys();
console.log(this.listFeatured)
  }
  getFeatured() {
    this.productService.getFeatured().subscribe((res: any) => {
      this.listFeatured = res;
    });
  }
  getCategorys() {
    this.productService.getCategorys().subscribe((res: any) => {
      this.listCategorys = res;
    });
  }




  promotionalForm = this._fb.group({
    email: [
      null,
      [
        Validators.required,
        Validators.pattern(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ],
    ],
  });

}
