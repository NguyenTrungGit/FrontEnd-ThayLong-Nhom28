import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.css'],
})
export class CartInfoComponent implements OnInit {
  changeValue?: String;
  changeNum?: number =1;
  constructor() {}

  ngOnInit(): void {}

  getValue(val: String) {
    // ham nay cho phep lay gia tri khi nhan phim
    // tao mot bien la changeValue, gan bien bang gia tri ham thay doi, bindling du lieu nguoc lai se thay doi du lieu
    console.warn(val);
    this.changeValue = val;
  }
}
