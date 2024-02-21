import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../../models/Player/player';
import { PlayerResponseModel } from '../../models/Player/playerResponseModel';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
  players: Player[] = [];
  apiUrl = "https://localhost:7285/api/Player";
  constructor(private httpClient:HttpClient){}
  ngOnInit(): void {
    this.getPlayer();
  }
  getPlayer(){
      this.httpClient.get<PlayerResponseModel>(this.apiUrl).subscribe((response) => {
        this.players = response.result;
      });
  }

}
