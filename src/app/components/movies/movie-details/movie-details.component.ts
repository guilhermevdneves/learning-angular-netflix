import { Movie } from './../../../types/movie';
import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.sass'
})
export class MovieDetailsComponent  {
  movieDetails?: Movie
  constructor(private router: Router) {

    const navigation = this.router.getCurrentNavigation()
    const movie = navigation?.extras.state as Movie

    this.movieDetails = movie
  }
}
