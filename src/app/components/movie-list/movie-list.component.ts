import { StoreService } from './../../services/store.service';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IMovie } from 'src/app/models/Imovie-interface';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MovieListComponent implements OnInit {
@Input() movie:IMovie;
//@Output() delete=new EventEmitter;
//@Output() saveChanges=new EventEmitter;
switch:boolean=false
rate=[1,2,3,4,5];
  constructor(private storeservice:StoreService) { }

  ngOnInit(): void {
  }
  
  deleteMovie(id){
this.storeservice.delete(id)
   // this.delete.emit(this.movie);
    console.log(id)
  }
  
  toggle(){
    this.switch= !this.switch;
  }
  
  edit(rating){
    
    console.log(rating);
    this.movie.personal_rating=rating;
    this.storeservice.edit(this.movie);
    this.toggle();
  }
  
  cancel(){
    this.toggle();
  }
}
