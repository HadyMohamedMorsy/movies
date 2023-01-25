import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Results } from '../../../interface/get-movies';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() itemData!: Results;
  environment = environment.urlImage;
}
