import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TouristAttractionDataService } from 'src/app/services/api-requests/tourist-attraction-data.service';
import { timer } from 'rxjs/internal/observable/timer';

@Component({
  selector: 'app-add-new-attraction',
  templateUrl: './add-new-attraction.component.html',
  styleUrls: ['./add-new-attraction.component.css']
})

export class AddNewAttractionComponent implements OnInit {
  public addNewAttractionForm: FormGroup;
  attractionName: FormControl;
  attractionImage: FormControl;
  attractionLocation: FormControl;
  attractionContinent: FormControl;

  constructor(
    private formBuilder: FormBuilder, 
    private touristAttractionDataService: TouristAttractionDataService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute) {
    this.attractionName = new FormControl('', Validators.compose([Validators.required]));
    this.attractionImage = new FormControl('', Validators.compose([Validators.required]));
    this.attractionLocation = new FormControl('', Validators.compose([Validators.required]));
    this.attractionContinent = new FormControl('', Validators.compose([Validators.required]));

    this.addNewAttractionForm = formBuilder.group({
      attractionName: this.attractionName,
      attractionImage: this.attractionImage,
      attractionLocation: this.attractionLocation,
      attractionContinent: this.attractionContinent
    })
  }

  ngOnInit(): void {
  }

  addNewAttractionData(event) {
    // event.preventDefault();
    let newAttractionDetails = {
      place: this.attractionName,
      imageURL: this.attractionImage,
      location: this.attractionLocation,
      continent: this.attractionContinent
    }
    this.touristAttractionDataService.createNewAttraction(newAttractionDetails).subscribe((data) => {
      window.alert('New attraction has been created');
      this.router.navigate(['/all-attractions'], { relativeTo: this.activatedRoute });
    }, error => {
      console.log('err => ', error);
      window.alert('Error while creating a new attraction');
    })
  }

  onInputAttractionName($event: any) {
    this.attractionName = $event.target.value;
  }

  onInputAttractionImage($event: any) {
    this.attractionImage = $event.target.value;
  }

  onInputAttractionLocation($event: any) {
    this.attractionLocation = $event.target.value;
  }

  onInputAttractionContinent($event: any) {
    this.attractionContinent = $event.target.value;
  }

}
