import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: ['/']
      },
      {
        label: 'Movies',
        routerLink: ['./movies']
      },
      {
        label: 'Tv Shows',
        routerLink: ['./tvshows']
      },
      {
        label: 'Genres',
        routerLink: ['./genres']
      }
    ];
  }
}
