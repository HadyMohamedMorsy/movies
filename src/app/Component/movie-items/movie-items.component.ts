import { Component, Input } from '@angular/core';
import { Results } from '../../interface/get-movies';

@Component({
  selector: 'app-movie-items',
  templateUrl: './movie-items.component.html',
  styleUrls: ['./movie-items.component.scss']
})
export class MovieItemsComponent {
  @Input() items!: Results[];
}
