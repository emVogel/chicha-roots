import { BehaviorSubject } from 'rxjs';
import {IMovie} from '../models/Imovie-interface';
export class MockStoreService{

    public $items=new BehaviorSubject<any>({});
errors$=new BehaviorSubject<any>({});
    delete(id){
        return new BehaviorSubject<any>({});
    }
    edit(){}
    save(){

    }
}