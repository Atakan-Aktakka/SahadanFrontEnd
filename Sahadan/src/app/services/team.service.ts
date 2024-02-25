import { Injectable } from '@angular/core';
import { Team } from '../models/Team/team';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  apiUrl = "https://localhost:7285/api/";
  constructor(private httpClient:HttpClient) { }
  getTeam():Observable<ListResponseModel<Team>>{
    let newPath = this.apiUrl + "Team";
    return this.httpClient.get<ListResponseModel<Team>>(newPath);
}
  getTeamByLegueId(legueId:number):Observable<ListResponseModel<Team>>{
    console.log(legueId)
    let newPath = this.apiUrl + "Team/legueId="+legueId;
    return this.httpClient.get<ListResponseModel<Team>>(newPath);
  }
}
