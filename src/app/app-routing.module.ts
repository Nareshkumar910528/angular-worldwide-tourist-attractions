import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAttractionsComponent } from './components/core/all-attractions/all-attractions.component';
import { TouristAttractionDataResolver } from './services/resolvers/tourist-attraction-data.resolver';
import { AddNewAttractionComponent } from './components/core/add-new-attraction/add-new-attraction.component';
import { FavoriteAttractionsComponent } from './components/core/favorite-attractions/favorite-attractions.component';

const routes: Routes = [
  { path: '', 
    redirectTo: 'all-attractions', 
    pathMatch: 'full' 
  },
  { path: 'all-attractions', 
    component: AllAttractionsComponent,
    resolve: { touristAttractionData: TouristAttractionDataResolver } 
  },
  { path: 'add-new-attraction', 
    component: AddNewAttractionComponent, 
    pathMatch: 'full' 
  },
  { path: 'favorite-attractions', 
    component: FavoriteAttractionsComponent, 
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
