import { Movie } from './../../types/movie';
import { MoviesService } from './../../services/movies.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedMoviesSearchDataService } from '../../services/shared-movies-search-data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  movieTitle: string = '';

  constructor(
    private movieService: MoviesService,
    private sharedMoviesSearchDataService: SharedMoviesSearchDataService
  ){}

  searchMovieTitle() {
    this.movieService.serachMoviesByTitle(this.movieTitle).subscribe((movies) =>
      {
        this.sharedMoviesSearchDataService.setMoviesData(movies.results)
        this.sharedMoviesSearchDataService.setSearchTerm(this.movieTitle)
      })
  }
}
