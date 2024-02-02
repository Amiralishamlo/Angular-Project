import { Directive,Input,ElementRef } from '@angular/core';

@Directive({
  selector: '[appSetClass]'
})
export class SetClassDirective {

  @Input('appSetClass') set ClassNames(classObj : any){
    for(let key in classObj){
      // console.log('key : ' + key); //class = disabled
      // console.log('value :'+classObj[key]);//true | false
      if(classObj[key]){
        this.elementRef.nativeElement.classList.add(key);
      }else{
        this.elementRef.nativeElement.classList.remove(key);
      }
    }
  }

  constructor(private elementRef:ElementRef) { }

}
