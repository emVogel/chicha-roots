import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';

import { ShowResultsComponent } from './components/show-results/show-results.component';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { SwapiComponent } from './components/swapi/swapi.component';
import { RaterComponent } from './components/partials/rater/rater.component';
import { MakeRaterComponent } from './components/partials/make-rater/make-rater.component';
import { RateDirective } from './components/partials/rate.directive';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ShowResultsComponent,
    SwapiComponent,
    RaterComponent,
    MakeRaterComponent,
    RateDirective,
    MovieListComponent,
    SpinnerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
