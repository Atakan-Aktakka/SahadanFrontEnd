import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegueComponent } from './components/legue/legue.component';
import { TeamComponent } from './components/team/team.component';
import { PlayerComponent } from './components/player/player.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: "",pathMatch:"full", component: LegueComponent },
  {path: "countries/legues/:countryId", component: LegueComponent},
  { path: "legues/teams/:legueId", component: TeamComponent },
  { path: "teams/players/:teamId", component: PlayerComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
