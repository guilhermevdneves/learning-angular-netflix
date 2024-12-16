import { Movie } from './../../types/movie';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedMoviesSearchDataService } from '../../services/shared-movies-search-data.service';
import { RouterModule } from '@angular/router';
import { catchError, debounceTime, of, Subject, switchMap } from 'rxjs';
import { query } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent implements OnInit {
  movieTitle: string = '';
  private titleSubject = new Subject<string>();

  constructor(
    private moviesService: MoviesService,
    private sharedMoviesSearchDataService: SharedMoviesSearchDataService
  ){}


  ngOnInit() {
    this.titleSubject.pipe(debounceTime(100), switchMap(() => {
      return this.moviesService.serachMoviesByTitle(this.movieTitle)
    })).subscribe((movies) =>
      {
        this.sharedMoviesSearchDataService.setMoviesData(movies.results)
        this.sharedMoviesSearchDataService.setSearchTerm(this.movieTitle)
      })
  }

  searchMovieTitle() {
    this.titleSubject.next(this.movieTitle)
  }
}
