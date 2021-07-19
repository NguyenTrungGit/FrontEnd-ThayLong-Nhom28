import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/model/blog.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
  blog: Blog[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getBlog();
  }
  getBlog() {
    this.productService.getBlog().subscribe((res: any) => {
      this.blog = res;

    });
  }

}
