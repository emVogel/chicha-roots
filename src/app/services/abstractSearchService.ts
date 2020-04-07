import {Observable} from 'rxjs';

export abstract class SearchService{
    abstract find(query:string):Observable<any>;

    abstract findCharacters(query:Array<string>):Observable<any>
}