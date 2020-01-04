import { Directive, HostBinding, OnInit, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  @HostBinding('class.open') isOpen: boolean;

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    this.isOpen = false;
  }

  // this way the open dropdown will close if one clickes somewhere outside
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

}
