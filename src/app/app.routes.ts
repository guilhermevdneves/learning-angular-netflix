import { Routes } from '@angular/router';
import { ShowMoviesComponent } from './components/movies/show-movies/show-movies.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';

export const RouteNames = {
  home: '',
  movieDetails: 'movie-details'
}


export const routes: Routes = [
  {
    path: RouteNames.home,
    component: ShowMoviesComponent
   },
   {
    path: RouteNames.movieDetails,
    component: MovieDetailsComponent
   },
];
