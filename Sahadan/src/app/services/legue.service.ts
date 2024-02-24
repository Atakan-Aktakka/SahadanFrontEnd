import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Legue } from '../models/Legue/legue';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class LegueService {

  apiUrl = "https://localhost:7285/api/";
  constructor(private httpClient:HttpClient) { }
  getLegue():Observable<ListResponseModel<Legue>>{
    let newPath = this.apiUrl + "Legue";
    return this.httpClient.get<ListResponseModel<Legue>>(newPath);
  }
  getlegueByCountryId(countryId:number):Observable<ListResponseModel<Legue>>{
    let newPath = this.apiUrl + "Legue/getbycountry/countryId="+countryId;
    return this.httpClient.get<ListResponseModel<Legue>>(newPath);
  }
}
