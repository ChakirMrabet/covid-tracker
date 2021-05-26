import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ICountry } from 'src/app/models/country.interface';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  item$: Observable<ICountry>;
  today: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _service: CountriesService
  ) {}

  ngOnInit(): void {
    const name = this._activatedRoute.snapshot.paramMap.get('name');
    this.item$ = this._service.getCountry(name);
    this.today = new Date().toLocaleDateString();
  }
}
