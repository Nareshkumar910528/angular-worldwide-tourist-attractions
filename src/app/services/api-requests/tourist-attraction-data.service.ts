import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import NewAttractionDetailsDTOModel from 'src/models/new-attraction-details-dto.model';

@Injectable({
  providedIn: 'root'
})

export class TouristAttractionDataService {

  baseURL: string = "https://worldwide-tourist-attractions-default-rtdb.firebaseio.com/";

  constructor(private http: HttpClient) { }

  getWorldwideTouristAttractionData(): Observable<any> {
    const apiURL = this.baseURL + 'tourist-attractions.json';
    return this.http.get(apiURL);
  }

  createNewAttraction(detailsObj: NewAttractionDetailsDTOModel): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const data = JSON.stringify(detailsObj);
    return this.http.post(this.baseURL + 'tourist-attractions.json', data, { 'headers': headers });
  }
}
