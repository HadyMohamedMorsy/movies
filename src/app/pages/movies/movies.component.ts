import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { GetMovies, Results } from '../../interface/get-movies';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) {}
  
  private slider = inject(MoviesService);
  Popular!: Results[];
  
  ngOnInit(): void {
    this.slider.getMovies('movie/popular', 12).subscribe((data) => {
      this.Popular = data;
    });
    
    this.primengConfig.ripple = true;
  }
}
