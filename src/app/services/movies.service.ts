import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of, shareReplay } from 'rxjs';
import { environment } from '../../environments/environment';
import { GetMovies } from '../interface/get-movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private http = inject(HttpClient);
  private endpoint = environment;
  cachedMovies$!: Observable<any>;

  getMovies(endpoint: string , number : number) {
    if (!this.cachedMovies$) {
      this.cachedMovies$ = this.http.get(this.endpoint.getBaseUrl(endpoint)).pipe(shareReplay<any>(1),
        map((res)=>{
            return res.results.slice(0, number);
        })
      );
    }
    return this.cachedMovies$;
  }
}
