import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Country } from '../models/Country/country';
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  
  apiUrl = "https://localhost:7285/api/Country";
  constructor(private httpClient:HttpClient) { }
  getCountry():Observable<ListResponseModel<Country>>{
    return this.httpClient.get<ListResponseModel<Country>>(this.apiUrl);
}
}
