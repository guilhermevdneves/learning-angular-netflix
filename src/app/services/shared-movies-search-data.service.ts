import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../types/movie';

@Injectable({
  providedIn: 'root'
})


export class SharedMoviesSearchDataService {
  private moviesSearchData = new BehaviorSubject<Movie[]>([])
  private term  = new BehaviorSubject<string>('')

  constructor() { }

  get moviesData(): BehaviorSubject<Movie[]>  {
    return this.moviesSearchData;
  }

  get searchTerm(): BehaviorSubject<string>  {
    return this.term;
  }

  setMoviesData(newData: Movie[])  {
    return this.moviesSearchData.next(newData);
  }

  setSearchTerm(newData: string)  {
    return this.term.next(newData);
  }


}
