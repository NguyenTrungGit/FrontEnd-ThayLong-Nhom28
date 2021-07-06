import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-popup-login',
  templateUrl: './popup-login.component.html',
  styleUrls: ['./popup-login.component.css']
})
export class PopupLoginComponent implements OnInit {

 loginForm= new FormGroup({
   email:new FormControl('',[Validators.required,Validators.pattern(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )]),
   password:new FormControl('',[Validators.required,Validators.pattern('')])
 })

  sectionLogin:any;
  sectionSignin:any;
  sectionForgot:any;
  constructor(@Inject(DOCUMENT) private document: any) { }
get email(){
  return this.loginForm.get('email');
}
  ngOnInit(): void {

    this.sectionLogin = (document.querySelector('.section-login') as HTMLElement);
    this.sectionSignin = (document.querySelector('.section-signin') as HTMLElement);
    this.sectionForgot = (document.querySelector('.section-forgot') as HTMLElement);

  }
  onLogin(){}
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
