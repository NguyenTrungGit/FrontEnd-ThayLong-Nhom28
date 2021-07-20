import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, SimpleChange,OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Blog } from 'src/app/model/blog.model';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/Services/product.service';


@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent implements OnInit {
  blog: Blog[] = [];

  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute,
     private router: Router) { }
id:any;
blogInfor?:Blog;
  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
     this.getBlog();
     this.getIdFromUrl();
  }


  getBlog() {
    this.productService.getBlog().subscribe((res: any) => {
      this.blog = res;
      this.blogInfor = this.blog.find((n) => n.id === this.id);
    });
  }
  getIdFromUrl() {
    this.activatedRoute.paramMap.subscribe((params: any) => {
      this.id = params.get('id');

    });
  }


}
