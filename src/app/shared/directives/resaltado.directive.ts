import { style } from '@angular/animations';
import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective implements OnChanges {

  @Input()
  color = 'yellow';

  constructor(private elemento: ElementRef<HTMLElement>) { 
    this.aplicarEstilos();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['color']){
      this.aplicarEstilos();
    }
  }


  aplicarEstilos(): void{
    this.elemento.nativeElement.style.backgroundColor = this.color;
  }
}
