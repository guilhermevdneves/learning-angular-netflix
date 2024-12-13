import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Movie } from '../types/movie';
import { PaginatedMoviesResponse } from '../types/moviesResponse';

function generateParams() {
  return new HttpParams().set('api_key', environment.apiKey).set('page', 1);
}

@Injectable({
  providedIn: 'root'
})


export class MoviesService {
  private  API = ' https://api.themoviedb.org/3'

  constructor(private httpClient: HttpClient) {}

  getPopularMovies(): Observable<PaginatedMoviesResponse> {
    const endpont = `${this.API}/movie/popular`

    return this.httpClient.get<PaginatedMoviesResponse>(endpont, { params: generateParams() })
  }

  serachMoviesByTitle(movieTitle: string): Observable<PaginatedMoviesResponse> {
    const endpont = `${this.API}/search/movie`
    const params = generateParams().append('query', movieTitle)

    return this.httpClient.get<PaginatedMoviesResponse>(endpont, { params })
  }
}
