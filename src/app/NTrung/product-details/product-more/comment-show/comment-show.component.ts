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
  constructor(
    public dialog: MatDialog,
    public commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.listComment = this.commentService.getComments();
  }

  openCommentDialog() {
    let dialogRef = this.dialog.open(CommentDialogComponent, {});
  }
}
