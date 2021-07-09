import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, AfterContentInit, Inject, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
i:any=-1;
  constructor(@Inject(DOCUMENT) private document: any) {}

  ngOnInit(){

  }
  displaySearch(){
    var dropdownSearch = (document.querySelector('.dropdown-search') as HTMLElement);
    this.i=this.i*(-1);
    if(this.i===1){
    dropdownSearch.style.display='block'}else{
      dropdownSearch.style.display='none'
    }
  }
  hideSearch(){
    var dropdownSearch = (document.querySelector('.dropdown-search') as HTMLElement);
    dropdownSearch.style.display='none'
    this.i=-1;
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    var header = (document.querySelector('.header') as HTMLElement);
    var navbar = (document.querySelector('.navbar') as HTMLElement);
    var topintro =(document.querySelector('.top-intro') as HTMLElement);
    var logo =(document.querySelector('.logo') as HTMLElement);
    if(document.documentElement.scrollTop<1){
      topintro.style.display='block'
     logo.style.width='170px'
     navbar.classList.remove('p-0')
     logo.style.paddingTop='0px';
     logo.style.paddingBottom='0px';
    }if(document.documentElement.scrollTop>200){
      navbar.classList.add('transition-navbar')

      header.classList.add("fixed-top")
      topintro.style.display='none'
     navbar.classList.add('shadow')
     logo.style.width='160px'
     logo.style.paddingTop='8px';
     logo.style.paddingBottom='8px';
navbar.classList.add('p-0')
    }

  }

}
