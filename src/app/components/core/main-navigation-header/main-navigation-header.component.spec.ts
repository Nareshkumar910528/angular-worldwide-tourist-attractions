import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavigationHeaderComponent } from './main-navigation-header.component';

describe('MainNavigationHeaderComponent', () => {
  let component: MainNavigationHeaderComponent;
  let fixture: ComponentFixture<MainNavigationHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNavigationHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavigationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
