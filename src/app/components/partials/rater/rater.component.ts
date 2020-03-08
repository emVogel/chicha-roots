
import { Component, OnInit,Output,OnDestroy, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rater',
  templateUrl: './rater.component.html',
  styleUrls: ['./rater.component.css'],
  
})
export class RaterComponent implements OnInit, OnDestroy {

@Output() rating=new  EventEmitter
color:string='grey';
  constructor() { 
    
  }

  ngOnInit(): void {
    console.log('init rater')
  }
  getRated(){
    this.rating.emit(this)
      
  }
  ngOnDestroy(){
    console.log('destroyed')
  }
}
