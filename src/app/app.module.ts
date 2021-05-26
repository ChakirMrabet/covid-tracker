import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryComponent } from './components/country/country.component';

import { AppRoutingModule } from './app-routing.module';
import { CountriesService } from './services/countries.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoaderComponent } from './components/loader/loader.component';
import { PrettyNumberPipe } from './pipes/pretty-number.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryComponent,
    LoaderComponent,
    PrettyNumberPipe,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
