import { Component, OnInit, Input } from '@angular/core';
import { timer } from 'rxjs/internal/observable/timer';

@Component({
  selector: 'app-attraction-list',
  templateUrl: './attraction-list.component.html',
  styleUrls: ['./attraction-list.component.css']
})

export class AttractionListComponent implements OnInit {
  placeIsFavorite: boolean = false;
  favoriteAttraction: Array<any> = [];

  @Input('tourist-attraction-list') touristAttractionList: any;
  @Input('show-add-to-fav-btn') showAddToFavBtn: boolean;

  constructor() { }

  ngOnInit(): void {
    this.touristAttractionList.forEach((data: any) => {
      data['attractionIsFavorite'] = false;
    });
    console.log('touristAttractionList--> ', this.touristAttractionList);
  }

  toggleFavoriteStatusHandler(attractionID: string) {
    let attractionIndex = this.touristAttractionList.findIndex((element: any) => element.id === attractionID);
    console.log('attractionIndex: ', attractionIndex);
    if (this.touristAttractionList[attractionIndex].attractionIsFavorite === false) {
      this.touristAttractionList[attractionIndex].attractionIsFavorite = true;
    } else {
      this.touristAttractionList[attractionIndex].attractionIsFavorite = false; 
    }
  }

  findFavoriteAttraction(listings: any) {
    let favAttractionIndex = listings.findIndex((element: any) => element.attractionIsFavorite === true);
    this.favoriteAttraction.push(this.touristAttractionList[favAttractionIndex]);
    console.log('favoriteAttraction: ', this.favoriteAttraction);
  }

}
