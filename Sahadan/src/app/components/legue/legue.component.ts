import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Legue } from '../../models/Legue/legue';
import { LegueService } from '../../services/legue.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-legue',
  templateUrl: './legue.component.html',
  styleUrl: './legue.component.css'
})
export class LegueComponent {
  legues: Legue[] = [];
  dataLoaded = false;
  currentLegue:Legue;
  filterText = "";
  constructor(private legueService:LegueService, private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
      if(params["countryId"]){
        this.getLegueByCountryId(params["countryId"])
      }else{
        this.getLegue()
      }
    })
   
      
  }
  getLegue(){
   this.legueService.getLegue().subscribe(response => {
      this.legues = response.data;
      this.dataLoaded = true;
      })
  };
  setCurrentLegue(legue:Legue){
    this.currentLegue = legue;
  }
  getLegueByCountryId(countryId:number){
    this.legueService.getlegueByCountryId(countryId).subscribe(response => {
      this.legues = response.data;
      this.dataLoaded = true;
    })
  }
}