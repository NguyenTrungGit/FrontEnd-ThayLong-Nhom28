import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/model/blog.model';

@Component({
  selector: 'app-list-posts-item',
  templateUrl: './list-posts-item.component.html',
  styleUrls: ['./list-posts-item.component.css']
})
export class ListPostsItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() blogItem?: Blog
}
