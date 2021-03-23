import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { SpecificCarDetailComponent } from './components/specific-car-detail/specific-car-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarDetailComponent },
  { path: 'cars', component: CarDetailComponent },
  { path: 'cars/brands/:brandId', component: CarDetailComponent },
  { path: 'cars/colours/:colourId', component: CarDetailComponent },
  { path: 'cars/cardetail/:carId', component: SpecificCarDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
