import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/model/blog.model';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-blog-content-details',
  templateUrl: './blog-content-details.component.html',
  styleUrls: ['./blog-content-details.component.css']
})

export class BlogContentDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  @Input() blogInfor?: Blog


}
