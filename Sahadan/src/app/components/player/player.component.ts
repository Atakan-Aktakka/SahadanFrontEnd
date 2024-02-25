import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../../models/Player/player';
import { ListResponseModel } from '../../models/ListResponseModel';
import { PlayerService } from '../../services/player.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
  players: Player[] = [];
  dataLoaded = false;
  constructor(private playerService:PlayerService,private activateRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      if(params["teamId"]){
        this.getPlayerByTeamId(params["teamId"])
      }else{
        this.getPlayer()
      }
    })
  }
  getPlayer(){
      
    this.playerService.getPlayer().subscribe(response => {
      this.players = response.data;
      this.dataLoaded = true;
      })
  };
  getPlayerByTeamId(teamId:number){
    this.playerService.getPlayerByTeamId(teamId).subscribe(response => {
      this.players = response.data;
      this.dataLoaded = true;
    })
  }

}
