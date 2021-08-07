import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/model/blog.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-filter1',
  templateUrl: './filter1.component.html',
  styleUrls: ['./filter1.component.css']
})
export class Filter1Component implements OnInit {
  selectedItemId1:any;
  blog: Blog[] = [];
  // blogID: BlogID[]=[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getBlog();
    // this.getBlogID();
  }
  getBlog() {
    this.productService.getBlog().subscribe((res: any) => {
      this.blog = res;

    });
  }
  ishow:boolean=false;
  toglle(){
    this.ishow=!this.ishow;
  }

}
