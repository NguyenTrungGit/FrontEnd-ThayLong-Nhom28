import { Component, Input, OnInit,SimpleChange,SimpleChanges } from '@angular/core';
import { Blog } from 'src/app/model/blog.model';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-blog-content-details',
  templateUrl: './blog-content-details.component.html',
  styleUrls: ['./blog-content-details.component.css']
})

export class BlogContentDetailsComponent implements OnInit {
@Input()idInput:any;
 id:any;
 blogInfor?:Blog

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.id= this.idInput;
    this.getBlog();

  }
  ngOnChanges(changes:SimpleChange):void{
    this.id= this.idInput;
    this.getBlog();

  }
  getBlog() {
    this.productService.getBlog().subscribe((res) => {
      this.blogInfor = res.find((n) => n.id === this.id);
    });
  }



}
