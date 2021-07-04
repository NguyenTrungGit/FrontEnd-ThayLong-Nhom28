import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommentDialogComponent } from '../comment-dialog/comment-dialog.component';

@Component({
  selector: 'app-comment-show',
  templateUrl: './comment-show.component.html',
  styleUrls: ['./comment-show.component.scss']
})
export class CommentShowComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openCommentDialog() {
    this.dialog.open(CommentDialogComponent);
  }
}
