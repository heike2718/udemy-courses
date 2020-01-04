import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  // Alternative for using HostListener together with Renderer2
  // access the DOM property for css background-color
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  // for Renderer2 see https://angular.io/api/core/Renderer2
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

    //  this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#ffe6cc');

  }

  @HostListener('mouseenter') mouseEnter(_eventData: Event) {


    // Alternative for using HostListener together with Renderer2
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#ffe6cc');
    this.backgroundColor = '#ffe6cc';

  }

  @HostListener('mouseleave') mouseLeave(_eventData: Event) {


    // Alternative for using HostListener together with Renderer2
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }

}
