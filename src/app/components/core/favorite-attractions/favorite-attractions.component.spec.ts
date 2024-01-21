import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteAttractionsComponent } from './favorite-attractions.component';

describe('FavoriteAttractionsComponent', () => {
  let component: FavoriteAttractionsComponent;
  let fixture: ComponentFixture<FavoriteAttractionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteAttractionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteAttractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
