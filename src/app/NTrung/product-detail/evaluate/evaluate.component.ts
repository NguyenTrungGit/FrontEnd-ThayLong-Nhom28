import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/model/comment.model';
import { CommentService } from 'src/app/Services/NTrung/comment.service';

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.css']
})
export class EvaluateComponent implements OnInit {
  listComment: Comment[] = [];
  @Input() comentId:any;
  constructor(
    public commentService: CommentService
  ) { }

  ngOnInit(): void {
    this.listComment = this.commentService.getComments();
  }

  changeLike(id:any){
    this.commentService.updateComment(id as string, {
      like: !this.commentService.getCommentById(id)?.like,
      unlike: false,
    });
   
  }

  changeDislike(id:any){
    this.commentService.updateComment(id as string, {
      unlike: !this.commentService.getCommentById(id)?.unlike,
      like: false,
    });
  }

}
