import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFonTitle]'
})
export class FonTitleDirective {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'font-size','20px')
   }

}
