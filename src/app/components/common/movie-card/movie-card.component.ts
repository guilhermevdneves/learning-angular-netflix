import { Component, Input } from '@angular/core';
import { Movie } from '../../../types/movie';
import { Router, RouterModule } from '@angular/router';
import { RouteNames } from '../../../app.routes';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.sass'
})
export class MovieCardComponent {
  @Input({ required: true }) movie!: Movie;

  constructor(private router: Router){}

  navigateToMovieDetails() {
    this.router.navigateByUrl(RouteNames.movieDetails, {state: this.movie})
  }
}
