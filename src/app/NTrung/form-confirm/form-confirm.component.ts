import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressGroupService } from '../../Services/NTrung/address-group.service';

@Component({
  selector: 'app-form-confirm',
  templateUrl: './form-confirm.component.html',
  styleUrls: ['./form-confirm.component.css']
})
export class FormConfirmComponent implements OnInit {
  // validate form
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

  // address auto complete select
  countries: any;
  states: any;
  districts: any;
  selectedCountry: any = {
    id: 0,
    name: '',
  };
  selectedState: any = {
    id: 0,
    name: '',
  };
  selectedDistrict: any = {
    id: 0,
    name: '',
  };
  constructor(
    private _fb: FormBuilder,
    private addressgroup: AddressGroupService
  ) {}

  ngOnInit(): void {
    this.showAll();
    this.onSelectCountry(this.selectedCountry.id);
  }

  submit() {
    console.log(this.billForm.value);
  }

  showAll() {
    this.addressgroup.getAll().subscribe((data: any) => {
      (this.countries = data), console.log(this.countries);
    });
  }

  onSelectCountry(country_id: any) {
    this.addressgroup.getAll().subscribe((res: any) => {
      (this.states = res['states'].filter(
        (res: any) => res.country_id == country_id!.value
      )),
        console.log(this.states);
    });
  }

  onSelectDistrict(state_id: any) {
    this.addressgroup.getAll().subscribe((res: any) => {
      (this.districts = res['districts'].filter(
        (res: any) => res.state_id == state_id!.value
      )),
        console.log(this.districts);
    });
  }
}
