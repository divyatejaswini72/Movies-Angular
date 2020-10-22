import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Movies } from '../models/movies';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  apiKey: '6555c83772dd44d8d1be05c09c8ed47e';
  apiUrl: 'https://api.themoviedb.org/3/movie/';

  getTopRatedMoviesList(): Observable<Movies> {
    return this.http.get<Movies>(this.apiUrl + 'top_rated?' + 'api_key=' + this.apiKey + '&language=en-US').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getUpcomingMovies(): Observable<Movies> {
    return this.http.get<Movies>(this.apiUrl + 'upcoming?' + 'api_key=' + this.apiKey + '&language=en-US').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
