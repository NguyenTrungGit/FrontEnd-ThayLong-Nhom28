import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/model/comment.model';
import { CommentService } from 'src/app/Services/NTrung/comment.service';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css'],
})
export class CommentItemComponent implements OnInit {
  @Input() comment?: Comment;

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    console.log(this.comment?.like);
  }

  changeLike() {
    this.commentService.updateComment(this.comment?.id as string, {
      like: !this.comment?.like,
      unlike: false,
    });
  }

  changeDislike() {
    this.commentService.updateComment(this.comment?.id as string, {
      unlike: !this.comment?.unlike,
      like: false,
    });
  }
}
