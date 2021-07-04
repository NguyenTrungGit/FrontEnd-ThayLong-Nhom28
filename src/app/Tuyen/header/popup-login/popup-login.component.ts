import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-login',
  templateUrl: './popup-login.component.html',
  styleUrls: ['./popup-login.component.css']
})
export class PopupLoginComponent implements OnInit {
  sectionLogin:any;
  sectionSignin:any;
  sectionForgot:any;
  constructor(@Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
    this.sectionLogin = (document.querySelector('.section-login') as HTMLElement);
    this.sectionSignin = (document.querySelector('.section-signin') as HTMLElement);
    this.sectionForgot = (document.querySelector('.section-forgot') as HTMLElement);

  }
  displaySignin(){
    this.sectionSignin.style.display='block';
   this.sectionLogin.style.display='none';
  this.sectionForgot.style.display='none'
  }
  displayLogin(){
    this.sectionLogin.style.display='block';
    this.sectionSignin.style.display='none';
    this.sectionForgot.style.display='none'
   }
   displayForgot(){
    this.sectionForgot.style.display='block'
    this.sectionLogin.style.display='none';
    this.sectionSignin.style.display='none';
   }
}
