import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pay-form',
  templateUrl: './pay-form.component.html',
  styleUrls: ['./pay-form.component.scss'],
})
export class PayFormComponent implements OnInit {
  billForm: FormGroup = this._fb.group({
    fristName: [null, [Validators.required, Validators.minLength(2)]],
    phoneNum: [
      null,
      [Validators.required, Validators.pattern('^((\\+84-?)|0)?[0-9]{10}$')],
    ],
    email: [
      null,
      [
        Validators.required,
        Validators.pattern(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ],
    ],
    country: [null, Validators.required],
    state: [null, Validators.required],
    district: [null, Validators.required],
    address: [null, [Validators.required, Validators.minLength(10)]],
    note: [],
    dilivery: [],
  });

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {}

  submit() {
    console.log(this.billForm.value);
  }
  
}
