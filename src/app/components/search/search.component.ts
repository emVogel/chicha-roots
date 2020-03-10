import { IMovie } from './../../models/Imovie-interface';
import { Component, OnInit, Host, Output, EventEmitter, OnDestroy, ViewChild } from '@angular/core';
import {SearchService} from './../../services/abstractSearchService';
import {toArray} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  movie:IMovie;
  character:Array<string>=[];
  @Output() moviefinder=new EventEmitter;
  //der service liegt im Host element vor, mit @Host sicht er auch nur im Host element nach dem provdider
  constructor(@Host() private searchservice: SearchService) { 
   
  }

  ngOnInit(): void {
    console.log('init searchComponent')
  }
 findMovie(query:string){
  
   
this.searchservice.find(query).then(movie=>{this.movie={
    title:movie.title,
    episode_id:movie.episode_id,
    director:movie.director,
    producer:movie.producer,
    release_date:movie.release_date,
    
}
const characters=movie.characters;
console.log(characters)
this.searchservice.findCharacters(characters).pipe(toArray()).subscribe(
  data=>{this.character=data;
    console.log(data, this.character)
        Object.assign(this.movie, {characters:this.character})
  });
this.moviefinder.emit(this.movie);

});

 }
 ngOnDestroy(){
console.log('SearchComponent destroyd')
 }
}
