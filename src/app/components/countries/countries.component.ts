import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountry } from 'src/app/models/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  items$: Observable<ICountry[]>;
  today: string;

  constructor(private _service: CountriesService) {}

  ngOnInit() {
    this.items$ = this._service.getCountries();
    this.today = new Date().toLocaleDateString();
  }
}
