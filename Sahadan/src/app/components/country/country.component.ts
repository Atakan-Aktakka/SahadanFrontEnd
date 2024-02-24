import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../../models/Country/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent implements OnInit{
  countries: Country[] = []; 
  dataLoaded = false;
  currentCountry:Country;
 /* countryresponseModel: CountryResponseModel = {
    data: this.countries,
    message: "",
    success: true
  };*/
  constructor(private countryService:CountryService){}
  ngOnInit(): void {
    this.getCountry();
  }
  getCountry(){
    console.log("Test Başladı");
    this.countryService.getCountry().subscribe(response => {
      this.countries = response.data;
      this.dataLoaded = true;
      console.log(response.data);
    })
    console.log("Test");
  };
  setCurrentCountry(country:Country){
   this.currentCountry = country;
  }
  getCurrentCountryClass(country:Country){
    if(country == this.currentCountry){
      return "list-group-item active";
    }else{
      return "list-group-item";
    }
  }
  getAllCountryClass(){
    if(!this.currentCountry){
      return "list-group-item active";
    }else{
      return "list-group-item";
    }
  }
}