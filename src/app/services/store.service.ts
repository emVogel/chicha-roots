import { IMovie } from 'src/app/models/Imovie-interface';
import { Injectable } from '@angular/core';
import {BehaviorSubject, of} from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  movies:IMovie[];
  items$ = new BehaviorSubject<IMovie[]> ([]);
  errors$= new BehaviorSubject<any>('');
  constructor() { 
    this.movies=[];
  }

  save(movie){
   let find= this.movies.find(mov=>
     mov.episode_id===movie.episode_id
   );
   if (!find){
     this.movies=[...this.movies, movie]
   }
   else {
     this.errors$.error('You cannot save the same movie twice')
   }
    this.items$.next(this.movies);
  }

 delete(id){
  this.movies=this.movies.filter(movie=>{
    return movie.episode_id!==id;
     
   })
   console.log(this.movies);
   this.items$.next(this.movies);
 }

 edit(movie){
   this.movies=this.movies.filter(mov=>{
     return mov.episode_id!==movie.episode_id;
   })
   this.movies.push(movie);
 }
}
