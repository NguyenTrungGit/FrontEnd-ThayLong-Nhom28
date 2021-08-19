// import { CdTimerModule } from 'angular-cd-timer';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';



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

  constructor(@Inject(DOCUMENT) private document: any) {

  }

  ngOnInit(): void {

  }
AfterViewInit(){
  var arrowprev  = document.querySelector('.carousel-arrow-prev[_ngcontent-igh-c149]') as HTMLElement;
    var arrownext = document.querySelector('.carousel-arrow-next[_ngcontent-igh-c149]') as HTMLElement;
    arrowprev.style.left='-45px'
    arrownext.style.right='-45px'
}
}
