import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[cc]'
})
export class HeaderDirectDirective implements OnChanges {

  constructor(
    private renderer: Renderer2,
    private elmRef: ElementRef,@Inject(DOCUMENT) private document: any
 ) { }
 ngOnInit() {
  const p = this.renderer.createElement('p');
  const text = this.renderer.createText('I am dynamically created');
  this.renderer.appendChild(p, text);
  this.renderer.appendChild(this.elmRef.nativeElement, p);


}
ngOnChanges(changes: SimpleChanges){
  if(changes.input){
    console.log('input changed');
  }
}




}
