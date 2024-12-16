import { Component, NgZone, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { Movie } from '../../../types/movie';
import { MovieCardComponent } from "../../common/movie-card/movie-card.component";
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs';
import { SharedMoviesSearchDataService } from '../../../services/shared-movies-search-data.service';
import { CarouselComponent } from "../../common/carousel/carousel.component";

@Component({
  selector: 'app-show-movies',
  standalone: true,
  imports: [MovieCardComponent, CommonModule, CarouselComponent],
  templateUrl: './show-movies.component.html',
  styleUrl: './show-movies.component.sass'
})


export class ShowMoviesComponent implements OnInit {
  popularMoviesList: Movie[] =  []
  upcomingMoviesList: Movie[] =  []
  topRatedMoviesList: Movie[] =  []
  searchedMoviesList: Movie[] =  []

  showSearchContent = false
  searchTerm? : string

  constructor(
    private moviesService: MoviesService,
    private sharedMoviesSearchDataService: SharedMoviesSearchDataService,
    private nz: NgZone
  ) {}

  ngOnInit(): void {
    this.sharedMoviesSearchDataService.moviesData.subscribe((moviesData) => {
      this.sharedMoviesSearchDataService.searchTerm.subscribe((term) => {

        if(term.length === 0) {
          this.getPopularMovies(1)
          this.getTopRatedMovies(1)
          this.getUpcomingMovies(1)
          this.showSearchContent = false;
        } else {
          this.showSearchContent = true;
          this.searchedMoviesList = moviesData;
          this.searchTerm = term
        }
      } )
    })
  }

  getPopularMovies(pageCount: number): void  {
    this.moviesService.getPopularMovies(pageCount).subscribe((movies) => {
      if(pageCount === 1) this.popularMoviesList = movies.results

      else  this.popularMoviesList = [...this.popularMoviesList, ...movies.results]
    })
  }

  getTopRatedMovies(pageCount: number): void  {
    this.moviesService.getTopRatedMovies(pageCount).subscribe((movies) => {
      if(pageCount === 1) this.topRatedMoviesList = movies.results

      else  this.topRatedMoviesList = [...this.topRatedMoviesList, ...movies.results]
    })
  }

  getUpcomingMovies(pageCount: number): void  {
    this.moviesService.getUpcomingMovies(pageCount).subscribe((movies) => {
      if(pageCount === 1) this.upcomingMoviesList = movies.results

      else  this.upcomingMoviesList = [...this.upcomingMoviesList, ...movies.results]
    })
  }

}
