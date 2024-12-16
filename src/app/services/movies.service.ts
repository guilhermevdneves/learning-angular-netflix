import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Movie } from '../types/movie';
import { PaginatedMoviesResponse } from '../types/moviesResponse';

function generateParams() {
  return new HttpParams().set('api_key', environment.apiKey);
}

@Injectable({
  providedIn: 'root'
})


export class MoviesService {
  private  API = ' https://api.themoviedb.org/3'

  constructor(private httpClient: HttpClient) {}

  getPopularMovies(page: number): Observable<PaginatedMoviesResponse> {
    const endpont = `${this.API}/movie/popular`
    const params = generateParams().append('page', page)

    return this.httpClient.get<PaginatedMoviesResponse>(endpont, { params })
  }

  getUpcomingMovies(page: number): Observable<PaginatedMoviesResponse> {
    const endpont = `${this.API}/movie/upcoming`
    const params = generateParams().append('page', page)

    return this.httpClient.get<PaginatedMoviesResponse>(endpont, { params })
  }

  getTopRatedMovies(page: number): Observable<PaginatedMoviesResponse> {
    const endpont = `${this.API}/movie/top_rated`
    const params = generateParams().append('page', page)

    return this.httpClient.get<PaginatedMoviesResponse>(endpont, { params })
  }


  serachMoviesByTitle(movieTitle: string): Observable<PaginatedMoviesResponse> {
    const endpont = `${this.API}/search/movie`
    const params = generateParams().append('page', 1).append('query', movieTitle)

    return this.httpClient.get<PaginatedMoviesResponse>(endpont, { params })
  }
}
