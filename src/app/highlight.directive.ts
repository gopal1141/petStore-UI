import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive ({selector : '[appHighlight]'})
export class HighlightDirective {

  @Input() highlightColor : String;

  constructor (public elementRef : ElementRef) {
    this.highlightColor = "";
  }

  @HostListener('mouseover') onMouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor="Cornsilk";
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor="";
  }

}
