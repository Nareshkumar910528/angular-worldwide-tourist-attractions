import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-navigation-header',
  templateUrl: './main-navigation-header.component.html',
  styleUrls: ['./main-navigation-header.component.css'],
})

export class MainNavigationHeaderComponent implements OnInit {
  title = 'Worldwide Tourist Attractions';
  headerTitle: string;
  totalAttractionCounts: number;

  constructor() { }

  ngOnInit(): void {
    this.headerTitle = this.title.toUpperCase();
  }

}
