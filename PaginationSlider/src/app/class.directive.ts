import { Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,Input }from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  @Input('appClass') set backColor(colors:string){
    this.element.nativeElement.style.backgroundColor=colors;
  };

  // @HostBinding("style.backgroundColor") backgroundColor:string="orange";

  constructor(private element:ElementRef,private render:Renderer2){
    this.element.nativeElement.style.backgroundColor="green";
    this.render.setStyle(this.element.nativeElement,"color","white");
  }

  @HostListener('mouseenter') onMouseOver(){
    this.render.setStyle(this.element.nativeElement,"background-color","red");
  }

  @HostListener('mouseleave') onMouseOut(){
    this.render.setStyle(this.element.nativeElement,"background-color","blue");
  }

}
