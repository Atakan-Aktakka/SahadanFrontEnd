import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../../models/Team/team';

import { ListResponseModel } from '../../models/ListResponseModel';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  teams: Team[] = [];
  dataLoaded = false;
  constructor(private teamService: TeamService) { }
  ngOnInit(): void {
    this.getTeam();
  }
  getTeam() {
    this.teamService.getTeam().subscribe(response => {
      this.teams = response.data;
      this.dataLoaded = true;
    })
  };
}
