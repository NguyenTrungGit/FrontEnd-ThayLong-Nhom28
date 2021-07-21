// import { CdTimerModule } from 'angular-cd-timer';
import { Component, Input, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})

export class HomeComponent implements OnInit {
  slides = [
    {'image': 'https://picsum.photos/seed/picsum/1200/300'},
    {'image': 'https://picsum.photos/seed/picsum/1200/300'},
    {'image': 'https://picsum.photos/seed/picsum/1200/300'},
    {'image': 'https://picsum.photos/seed/picsum/1200/300'},
    {'image': 'https://picsum.photos/seed/picsum/1200/300'}
  ];

  constructor() {

  }

  ngOnInit(): void {

  }

}
