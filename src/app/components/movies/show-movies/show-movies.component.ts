import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { Movie } from '../../../types/movie';
import { MovieCardComponent } from "../../common/movie-card/movie-card.component";
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs';
import { SharedMoviesSearchDataService } from '../../../services/shared-movies-search-data.service';

@Component({
  selector: 'app-show-movies',
  standalone: true,
  imports: [MovieCardComponent, CommonModule],
  templateUrl: './show-movies.component.html',
  styleUrl: './show-movies.component.sass'
})


export class ShowMoviesComponent implements OnInit {
  moviesList: Movie[] =  []
  showSearchContent = false
  searchTerm? : string

  constructor(
    private movieService: MoviesService,
    private sharedMoviesSearchDataService: SharedMoviesSearchDataService
  ) {}

  ngOnInit(): void {
    this.sharedMoviesSearchDataService.moviesData.subscribe((moviesData) => {
      this.sharedMoviesSearchDataService.searchTerm.subscribe((term) => {

        if(this.moviesList.length === 0 && term.length === 0) {
          this.getPopularMovies()
        } else {
          this.showSearchContent = true;
          this.moviesList = moviesData;
          this.searchTerm = term
        }
      } )
    })
  }

  getPopularMovies(): void  {
    this.movieService.getPopularMovies().subscribe((movies) => {

      this.moviesList = movies.results
    })
  }



  hideButton(carouselId: string, scrollLeft: boolean): string {
    const carousel = document.querySelector(carouselId)!

    if(scrollLeft && carousel?.scrollLeft == 0) {
        return 'movies-list__button-hidden'
    }

    if(!scrollLeft && carousel?.scrollLeft >= carousel.clientWidth) {
      return 'movies-list__button-hidden'
    }

    return ''
  }

  scrollCaroulsel(carouselId: string, scrollLeft: boolean): void {
    const carousel = document.querySelector(carouselId)!

    if(scrollLeft) {
      carousel.scrollTo({
        left: carousel.scrollLeft - 500,
        behavior: 'smooth'
      })
    } else{
      carousel.scrollTo({
        left: carousel.scrollLeft + 500,
        behavior: 'smooth'
      })
    }
  }
}
