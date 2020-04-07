import { IMovie } from '../models/Imovie-interface';
import { BehaviorSubject } from 'rxjs';

export class MockMovieService {

    find(query: string) {
        return new Promise((resolve, reject) => {
            resolve({
               //fake-object

            })
        });
    }
}