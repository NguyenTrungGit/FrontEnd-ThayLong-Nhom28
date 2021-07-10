import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CommentDialogComponent } from '../comment-dialog/comment-dialog.component';

@Component({
  selector: 'app-comment-show',
  templateUrl: './comment-show.component.html',
  styleUrls: ['./comment-show.component.scss'],
})
export class CommentShowComponent implements OnInit {
  constructor(public dialog: MatDialog, public dialogConfig: MatDialogConfig) {}

  ngOnInit(): void {}

  openCommentDialog() {
    this.dialogConfig.disableClose =true;
    this.dialogConfig.autoFocus = true;
    let dialogRef = this.dialog.open(CommentDialogComponent, {});
  }
}
