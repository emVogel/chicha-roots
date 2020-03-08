import { RaterComponent } from './../rater/rater.component';

import { Component, OnInit, Input, AfterViewInit, AfterContentInit, ViewChild, ViewContainerRef, ComponentFactory, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-make-rater',
  templateUrl: './make-rater.component.html',
  styleUrls: ['./make-rater.component.css']
})
export class MakeRaterComponent implements AfterContentInit {

  @ViewChild('container', {read: ViewContainerRef, static:false}) container;
  rateFactory: ComponentFactory<RaterComponent>;
  rateRef:any;
@Input() count:number;
  constructor(private resolver: ComponentFactoryResolver,
    private changeDetector : ChangeDetectorRef ) {
    this.rateFactory=this.resolver.resolveComponentFactory(RaterComponent);
 }

 
  ngAfterContentInit(){
    this.changeDetector.detectChanges();
   for (let i=0; i<this.count; i++){
     this.rateRef=this.container.createComponent(this.rateFactory);
     this.rateRef.instance.color='yellow';
   }
    console.log(this.rateRef);
  
    
  }


}
