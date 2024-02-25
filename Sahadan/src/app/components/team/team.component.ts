import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../../models/Team/team';

import { ListResponseModel } from '../../models/ListResponseModel';
import { TeamService } from '../../services/team.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  teams: Team[] = [];
  dataLoaded = false;
  constructor(private teamService: TeamService,private activateRoute:ActivatedRoute) { }
  ngOnInit(): void {
   this.activateRoute.params.subscribe(params => {
      if(params["legueId"]){
        this.getTeamByLegueId(params["legueId"])
      }else{
        this.getTeam()
      }
    })
  }
  getTeam() {
    this.teamService.getTeam().subscribe(response => {
      this.teams = response.data;
      this.dataLoaded = true;
    })
  };
  getTeamByLegueId(legueId: number) {
    this.teamService.getTeamByLegueId(legueId).subscribe(response => {
      console.log(response)
      console.log(legueId)
      this.teams = response.data;
      this.dataLoaded = true;
     
    })
  }
}
