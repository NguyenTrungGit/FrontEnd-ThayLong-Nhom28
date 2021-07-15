import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Comment } from 'src/app/model/comment.model';
import { CommentService } from 'src/app/Services/NTrung/comment.service';
import { CommentDialogComponent } from '../comment-dialog/comment-dialog.component';

@Component({
  selector: 'app-comment-show',
  templateUrl: './comment-show.component.html',
  styleUrls: ['./comment-show.component.scss'],
})
export class CommentShowComponent implements OnInit {
  listComment: Comment[] = [];
  data: any;
  constructor(
    public dialog: MatDialog,
    public commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.listComment = this.commentService.getComments();
  }

  openCommentDialog() {
    this.dialog
      .open(CommentDialogComponent, {
        disableClose: true })
      .afterClosed()
      .subscribe((res) => {
        this.data = res;
        console.log(this.data);
        this.commentService.addComment(
          new Comment(
            this.data[0],
            this.data[1],
            this.data[2],
            this.data[3],
            this.data[4],
            this.data[5],
            this.data[6]
          )
        );
      });
  }
}
