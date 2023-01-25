import { Component , inject, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import { GetMovies, Results } from '../../interface/get-movies';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private slider = inject(MoviesService);
  movies!: Results[];

  ngOnInit(): void {
    this.slider.getMovies().subscribe((data) => {
      this.movies = data.results;
    });
  }
}
