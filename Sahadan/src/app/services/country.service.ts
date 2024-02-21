import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryResponseModel } from '../models/Country/countryResponseModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  
  apiUrl = "https://localhost:7285/api/Country";
  constructor(private httpClient:HttpClient) { }
  getCountry():Observable<CountryResponseModel>{
    return this.httpClient.get<CountryResponseModel>(this.apiUrl);
}
}
