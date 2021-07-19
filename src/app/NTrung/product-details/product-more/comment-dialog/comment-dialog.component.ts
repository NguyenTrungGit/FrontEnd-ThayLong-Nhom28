import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Comment } from 'src/app/model/comment.model';

@Component({
  selector: 'app-comment-dialog',
  templateUrl: './comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.css'],
})
export class CommentDialogComponent implements OnInit {
  commentGroup: FormGroup = this.fb.group({
    surname: [null, [Validators.required, Validators.minLength(2)]],
    name: [null, [Validators.required, Validators.minLength(2)]],
    phone: [
      null,
      [Validators.required, Validators.pattern('^((\\+84-?)|0)?[0-9]{10}$')],
    ],
    sex: [null, [Validators.required]],
    email: [
      null,
      [
        Validators.required,
        Validators.pattern(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ],
    ],
    content: [null, [Validators.required, Validators.minLength(20)]],
  });
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<CommentDialogComponent>,
    private fb: FormBuilder
  ) {}
  surname: string = '';
  name: string = '';
  email: string = '';
  phone: string = '';
  sex: string = '';
  rate: string = '';
  content: string = '';
  ngOnInit(): void {}

  cancel() {
    this.dialogRef.close();
  }

  onFormSubmit() {}
}
