import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LegueComponent } from './components/legue/legue.component';
import { CountryComponent } from './components/country/country.component';
import { PlayerComponent } from './components/player/player.component';
import { TeamComponent } from './components/team/team.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { LegueAddComponent } from './components/legue-add/legue-add.component';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { FilterteamPipe } from './pipes/filterteam.pipe';
import { FilterplayerPipe } from './pipes/filterplayer.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LegueComponent,
    CountryComponent,
    PlayerComponent,
    TeamComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    LegueAddComponent,
    LoginComponent,
    FilterteamPipe,
    FilterplayerPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
