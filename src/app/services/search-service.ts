
import { IMovieResponse, IMovie } from './../models/Imovie-interface';

import { Observable, Observer, from, merge} from 'rxjs';
import {map, tap, switchMap,mergeMap, toArray,combineAll} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SearchService} from './abstractSearchService';



const swapi_url='https://swapi.co/api/films/';

@Injectable()

export class MovieSearchService implements SearchService{
    
    movie:IMovie;
    constructor(private http: HttpClient){
    
    }
    //die Funktion gibt Promise zurück=>resolve löst die Suche anch den dazugehörigen Charcters aus
    find(query:string):Promise<IMovie>{
        const searchparams= new HttpParams().append('search', query);

        const promise=this.getMovies(searchparams);
        
   
        return promise;
    }
    async getMovies(searchparams:HttpParams): Promise<IMovie>{
        const movies_obj=await this.http.get<Promise <IMovieResponse>>(swapi_url, {params: searchparams}).toPromise();
            const movie=movies_obj.results[0];
            console.log(movie);
            return movie;
         }

    //mergeMap anstatt switchMap, da mergeMap einen Datenstrom aus mehreren Observables zusammenführt, switchMap bei nur einem innen Observable
    findCharacters(characters:Array<string>):Observable<Array<string>>{
       return  from(characters).pipe(mergeMap(num=>this.getCharacters(num)))
    
    }
    //hilfsfunktion zum auslesen der einzelnen Charactere
    getCharacters(data:string){
        return this.http.get<any>(`${data}`).pipe(map(data=>data.name),tap(tab=>console.log(tab)));
    }
}
