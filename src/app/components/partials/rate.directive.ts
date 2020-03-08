import { RaterComponent } from './rater/rater.component';

import { Directive, ElementRef, Input, QueryList, ContentChildren} from '@angular/core';


@Directive({
  selector: 'appRate, [appRate]',
  exportAs: 'rater'
})
export class RateDirective  {

  constructor(private elem: ElementRef) { }
 @Input() selected:number=0;
@ContentChildren(RaterComponent) rater:QueryList<RaterComponent>
rated:number=0;

ngAfterContentInit(){
 
  this.rater.forEach((rate, index)=>{
    rate.color='grey';
   // console.log(rate);
    rate.rating.subscribe(panel=>{
      if(rate===panel){
     this.selected=index;
     this.rated=this.selected+1;
        this.colorize();
      }
     
    })
   
  
  })

  
}
colorize(){
  return this.rater.forEach((rate, index)=>{

    rate.color=index<=this.selected ?'yellow' :'grey';
  });
}

}
