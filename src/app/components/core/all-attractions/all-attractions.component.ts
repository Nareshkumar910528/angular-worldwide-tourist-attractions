import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-attractions',
  templateUrl: './all-attractions.component.html',
  styleUrls: ['./all-attractions.component.css']
})
export class AllAttractionsComponent implements OnInit {
  touristAttractionArray: Array<any> = [];
  showAddToFavBtn: boolean = true;
  totalAttractionCounts: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.retrieveTouristAttractionData();
  }

  retrieveTouristAttractionData() {
    this.activatedRoute.data.subscribe((data: any) => {
      for (const key in data.touristAttractionData) {
        const attraction = {
          id: key,
          ...data.touristAttractionData[key]
        }
        this.touristAttractionArray.push(attraction);
      }
    });
    this.touristAttractionArray.sort((a: any, b: any) => a.place.localeCompare(b.place));
    this.totalAttractionCounts = this.touristAttractionArray.length;
  }

}
