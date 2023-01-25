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
  upcoming!: Results[];
  Popular!: Results[];
  topRated!: Results[];

  ngOnInit(): void {
    this.slider.getMovies('movie/upcoming' , 12).subscribe((data) => {
      this.upcoming = data;
    });

    this.slider.getMovies('movie/popular' , 12).subscribe((data) => {
      this.Popular = data;
    });

    this.slider.getMovies('movie/top_rated' , 12).subscribe((data) => {
      this.topRated = data;
    });


  }
}
