import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/model/comment.model';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css'],
})
export class CommentItemComponent implements OnInit {
  @Input() comment?: Comment;

  checkActiveLike: boolean = false;
  checkActiveDislike: boolean = false;

  countLike = 1;
  countDislike = 1;
  constructor() {}

  ngOnInit(): void {}

  changeLike() {
    this.checkActiveLike = true;
    this.checkActiveDislike = false;
    this.countDislike = 1;
    this.countLike++;
    if (this.countLike % 2 == 0) {
      this.checkActiveLike = true;
    } else {
      this.checkActiveLike = false;
    }
  }

  changeDislike() {
    this.checkActiveLike = false;
    this.checkActiveDislike = true;
    this.countLike = 1;
    this.countDislike++;
    if (this.countDislike % 2 == 0) {
      this.checkActiveDislike = true;
    } else {
      this.checkActiveDislike = false;
    }
    // this.unChange(this.countDislike, this.checkActiveDislike)
  }

  // not use
  unChange(count: any, condition: boolean) {
    if (count % 2 == 0) {
      condition = true;
    }
    condition = false;
  }
}
