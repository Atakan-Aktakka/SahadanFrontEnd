import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../../models/Player/player';
import { ListResponseModel } from '../../models/ListResponseModel';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
  players: Player[] = [];
  dataLoaded = false;
  constructor(private playerService:PlayerService){}
  ngOnInit(): void {
    this.getPlayer();
  }
  getPlayer(){
      
    this.playerService.getPlayer().subscribe(response => {
      this.players = response.data;
      this.dataLoaded = true;
      })
  }

}
