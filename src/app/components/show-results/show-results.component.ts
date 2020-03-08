import { Observable, Subscription} from 'rxjs';
import { StoreService } from './../../services/store.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MovieSearchService } from './../../services/search-service';
import { Component, OnInit, Output, EventEmitter, OnDestroy, ChangeDetectionStrategy, ViewChild, ViewContainerRef } from '@angular/core';
import {SearchService} from './../../services/abstractSearchService';
import { IMovie } from 'src/app/models/Imovie-interface';
import {catchError} from 'rxjs/operators';


@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.css'],
  //der viewProvider wird immer zusammen mit @Host() im Kindelement, das den Provider injected,  verwendet
  viewProviders:[{provide: SearchService, useClass: MovieSearchService}],
 
})
export class ShowResultsComponent implements OnInit, OnDestroy{

selected:any;
  rate=[1,2,3,4,5];
  color='grey';
 //@Output() saving=new EventEmitter;
movie:IMovie;
error:string;
subscriber: Subscription;
  constructor(private storeservice: StoreService){
    
  }

  ngOnInit(): void {
  }
ngOnChange(){

}
 

  find(event){
    console.log(event);
    this.movie=event;
    if (this.error){
    this.subscriber.unsubscribe();
    }
  }
 
  saveMovie(rate){
  
   
    console.log(rate)
    this.movie=Object.assign({}, this.movie, {personal_rating: rate});
    console.log(this.movie)
   this.storeservice.save(this.movie);
    //this.saving.emit(this.movie);
    this.subscriber=this.storeservice.errors$.subscribe(err=>this.error=err);
  }

  ngOnDestroy(){
    console.log('show-results destroyed')
  
  }
  
}
