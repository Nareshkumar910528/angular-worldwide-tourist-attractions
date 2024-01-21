import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { TouristAttractionDataService } from '../api-requests/tourist-attraction-data.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TouristAttractionDataResolver implements Resolve<boolean> {

  constructor(private touristAttractionDataService: TouristAttractionDataService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.touristAttractionDataService.getWorldwideTouristAttractionData().pipe(
      catchError(error => {
        console.error('resolve method return error as follow --> ', error);
        return of('No data available at the moment');
      })
    );
  }
}
