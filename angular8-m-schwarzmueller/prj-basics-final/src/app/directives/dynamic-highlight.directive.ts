import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDynamicHighlight]'
})
export class DynamicHighlightDirective implements OnInit {

  @Input() defaultColor = 'transparent';
  @Input() highLightColor = '#ffe6cc';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter(_eventData: Event) {
    this.backgroundColor = this.highLightColor;

  }

  @HostListener('mouseleave') mouseLeave(_eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }


}
