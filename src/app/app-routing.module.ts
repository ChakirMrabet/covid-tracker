import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryComponent } from './components/country/country.component';

const routes: Route[] = [
  {
    path: '',
    component: CountriesComponent,
  },
  {
    path: 'country/:name',
    component: CountryComponent,
  },
  { path: '**', component: CountriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
