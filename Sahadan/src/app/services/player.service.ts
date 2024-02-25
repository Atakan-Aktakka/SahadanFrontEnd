import { Injectable } from '@angular/core';
import { Player } from '../models/Player/player';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  apiUrl = "https://localhost:7285/api/";
  constructor(private httpClient:HttpClient) { }
  getPlayer():Observable<ListResponseModel<Player>>{
    var newPath = this.apiUrl + "Player";
    return this.httpClient.get<ListResponseModel<Player>>(newPath);
  }
  getPlayerByTeamId(teamId:number):Observable<ListResponseModel<Player>>{
    var newPath = this.apiUrl + "Player/teamId=" + teamId;
    return this.httpClient.get<ListResponseModel<Player>>(newPath);
  }
}
