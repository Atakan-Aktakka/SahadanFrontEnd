import { Injectable } from '@angular/core';
import { Team } from '../models/Team/team';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  apiUrl = "https://localhost:7285/api/Team";
  constructor(private httpClient:HttpClient) { }
  getTeam():Observable<ListResponseModel<Team>>{
    return this.httpClient.get<ListResponseModel<Team>>(this.apiUrl);
}
}
