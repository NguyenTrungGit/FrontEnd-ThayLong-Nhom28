import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  minValue: number = 200000;
  maxValue: number = 515000;
  options: Options = {
    floor: 2000,
    ceil: 715000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>  </b> ' + value + '₫' ;
        case LabelType.High:
          return '<b></b> ' + value + '₫';
        default:
          return   value +'d';
      }
    }
  };


  constructor() { }

  ngOnInit(): void {
  }

}
