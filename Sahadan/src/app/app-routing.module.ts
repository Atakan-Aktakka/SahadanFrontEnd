import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegueComponent } from './components/legue/legue.component';
import { TeamComponent } from './components/team/team.component';
import { PlayerComponent } from './components/player/player.component';
import { count } from 'rxjs';
import { CountryComponent } from './components/country/country.component';

const routes: Routes = [
  { path: "",pathMatch:"full", component: LegueComponent },
  {path: "countries/legues/:countryId", component: LegueComponent},
  { path: "legues/teams/:legueId", component: TeamComponent },
  { path: "teams/players/:teamId", component: PlayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
