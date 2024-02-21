import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../../models/Team/team';
import { TeamResponseModel } from '../../models/Team/teamResponseModel';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  teams: Team[] = [];
  apiUrl = "https://localhost:7285/api/Team";
  constructor(private httpClient:HttpClient){}
  ngOnInit(): void {
    this.getTeam();
  }
  getTeam(){
      this.httpClient.get<TeamResponseModel>(this.apiUrl).subscribe((response) => {
        this.teams = response.result;
      });
  }
}
