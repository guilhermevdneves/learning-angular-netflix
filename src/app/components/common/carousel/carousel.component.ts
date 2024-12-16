import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Movie } from '../../../types/movie';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.sass'
})
export class CarouselComponent {
  @Input({ required: true }) moviesList!: Movie[];
  @Input({ required: true }) carouselTitle!: string;
  @Input({ required: true }) carouselId!: string;
  @Input({ required: true }) getRequest!: (pageCount: number) => void;
  @Input({ required: true }) noContentMessage!: string;

  pageCount: number = 1;


  hideButton(scrollLeft: boolean): string {
    const carousel = document.querySelector(`#${this.carouselId}`)!

    if(scrollLeft && carousel?.scrollLeft == 0) {
        return 'movies-list__button-hidden'
    }

    if(!scrollLeft && carousel?.scrollLeft >= carousel.clientWidth) {
      return 'movies-list__button-hidden'
    }

    return ''
  }

  scrollCaroulsel(scrollLeft: boolean): void {
    const carousel = document.querySelector(`#${this.carouselId}`)!

    if(scrollLeft) {
      carousel.scrollTo({
        left: carousel.scrollLeft - 500,
        behavior: 'smooth'
      })
    } else{
      if(carousel.scrollLeft >= carousel.clientWidth) {
        this.getRequest(this.pageCount)
        this.pageCount += 1
      }

      carousel.scrollTo({
        left: carousel.scrollLeft + 500,
        behavior: 'smooth'
      })
    }
  }
}
