import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavigationHeaderComponent } from './components/core/main-navigation-header/main-navigation-header.component';
import { AllAttractionsComponent } from './components/core/all-attractions/all-attractions.component';
import { AttractionListComponent } from './components/shared/attraction-list/attraction-list.component';
import { AddNewAttractionComponent } from './components/core/add-new-attraction/add-new-attraction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavoriteAttractionsComponent } from './components/core/favorite-attractions/favorite-attractions.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationHeaderComponent,
    AllAttractionsComponent,
    AttractionListComponent,
    AddNewAttractionComponent,
    FavoriteAttractionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
