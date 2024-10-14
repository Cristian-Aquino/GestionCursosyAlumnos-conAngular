import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepetir]'
})
export class RepetirDirective implements OnChanges{

  @Input()
  appRepetir: number = 1

  constructor(private viewContainer: ViewContainerRef, private template: TemplateRef<HTMLElement>) {
    this.repetir();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['appRepetir']){
      this.repetir();
    }
    
  }

  repetir(): void{
    this.viewContainer.clear();
    for(let i = 0; i < this.appRepetir; i++){
      this.viewContainer.createEmbeddedView(this.template);
    }
  }
}
