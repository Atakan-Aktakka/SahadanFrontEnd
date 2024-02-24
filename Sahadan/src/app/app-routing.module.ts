import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegueComponent } from './components/legue/legue.component';
import { TeamComponent } from './components/team/team.component';
import { PlayerComponent } from './components/player/player.component';
import { count } from 'rxjs';
import { CountryComponent } from './components/country/country.component';

const routes: Routes = [
  { path: "",pathMatch:"full", component: LegueComponent },
  {path: "countries/country/:countryId", component: LegueComponent},
  { path: "team", component: TeamComponent },
  { path: "player", component: PlayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
