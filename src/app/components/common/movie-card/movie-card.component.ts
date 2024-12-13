import { Component, Input } from '@angular/core';
import { Movie } from '../../../types/movie';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.sass'
})
export class MovieCardComponent {
  @Input({ required: true }) movie!: Movie;


//  https://image.tmdb.org/t/p/w500/
}
