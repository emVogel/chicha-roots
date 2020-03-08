import { StoreService } from './../../services/store.service';
import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/Imovie-interface';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
@Component({
  selector: 'app-swapi',
  templateUrl: './swapi.component.html',
  styleUrls: ['./swapi.component.css']
})
export class SwapiComponent implements OnInit {
 error:string;
  movies$:Observable<IMovie[]>;

  constructor(private storeservice: StoreService) {
   
   }

  ngOnInit(): void {
   this.movies$= this.storeservice.items$;
  
  }

  }

