import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  //@Input() backgroundColor!: string ;

  constructor(private element: ElementRef) {
    //console.log('I am in directives!')
    //using setTimeout is not a good solution
    // setTimeout(() =>{
    //   this.element.nativeElement.style.backgroundColor = this.backgroundColor;
    // }, 50);

   }

   @Input('appClass') set backgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
   }

}
