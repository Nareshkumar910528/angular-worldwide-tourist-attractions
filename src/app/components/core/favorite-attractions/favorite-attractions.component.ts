import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-attractions',
  templateUrl: './favorite-attractions.component.html',
  styleUrls: ['./favorite-attractions.component.css']
})

export class FavoriteAttractionsComponent implements OnInit {
  favoriteAttraction: any;
  showAddToFavBtn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
