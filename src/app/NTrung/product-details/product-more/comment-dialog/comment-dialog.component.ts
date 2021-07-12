import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comment-dialog',
  templateUrl: './comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.css'],
})
export class CommentDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<CommentDialogComponent>) {}

  ngOnInit(): void {}

  send() {}
  cancel() {
    this.dialogRef.close('Closed from dialog clicked');
  }
}
