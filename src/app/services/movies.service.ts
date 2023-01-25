import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {GetMovies} from '../interface/get-movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private http = inject(HttpClient);
  private endpoint = environment;
  getMovies(){
    return this.http.get<GetMovies>(this.endpoint.getBaseUrl('movie/upcoming'));
  }
}
