import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Legue } from '../models/Legue/legue';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

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
  add(legue:Legue):Observable<SingleResponseModel<Legue>>{
    let newPath = this.apiUrl + "Legue/Legueadd";
    return this.httpClient.post<SingleResponseModel<Legue>>(newPath,legue);
  }
}
