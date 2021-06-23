import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EvaluateDialogComponent } from './evaluate-dialog/evaluate-dialog.component';


@Component({
  selector: 'app-product-evaluate',
  templateUrl: './product-evaluate.component.html',
  styleUrls: ['./product-evaluate.component.css'],
})
export class ProductEvaluateComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openEvaluateDialogComment(){
    this.dialog.open(EvaluateDialogComponent);
  }
}
