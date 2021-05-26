import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICountry } from '../models/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  apiUrl = 'https://covid-api.mmediagroup.fr/v1/cases';

  constructor(private _http: HttpClient) {}

  getCountries(): Observable<ICountry[]> {
    return this._http.get<ICountry[]>(this.apiUrl).pipe(
      map((data: any) =>
        Object.keys(data).map((key) => ({
          ...data[key].All,
        }))
      ),
      map((items: ICountry[]) =>
        items.sort((a, b) => (b.confirmed > a.confirmed ? 1 : -1))
      )
    );
  }

  getCountry(name: string): Observable<ICountry> {
    return this._http
      .get<any>(this.apiUrl, { params: { country: name } })
      .pipe(map((data) => data.All));
  }
}
