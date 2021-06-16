import { CdTimerModule } from 'angular-cd-timer';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})

export class HomeComponent implements OnInit {
days:number=0;
hours:number=0;
minutes:number=0;
seconds:number=0;
time:number= 86400;
  constructor() {
setInterval(()=>{this.countdown();},1000)
  }

  ngOnInit(): void {

  }
public countdown(){


    this.days = Math.floor(this.time / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((this.time % (1000 * 60)) / 1000);
    this.time--;
console.log(this.days)
}
}
