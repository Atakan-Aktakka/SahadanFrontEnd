import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LegueComponent } from './components/legue/legue.component';
import { CountryComponent } from './components/country/country.component';
import { PlayerComponent } from './components/player/player.component';
import { TeamComponent } from './components/team/team.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LegueComponent,
    CountryComponent,
    PlayerComponent,
    TeamComponent,
    NaviComponent,
    VatAddedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
