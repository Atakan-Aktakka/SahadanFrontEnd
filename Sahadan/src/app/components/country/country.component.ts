import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../../models/Country/country';
import { CountryResponseModel } from '../../models/Country/countryResponseModel';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent implements OnInit{
  countries: Country[] = []; 
  dataLoaded = false;

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
      this.countries = response.result;
      this.dataLoaded = true;
      console.log(response.errors);
    })
    console.log("Test");
  };
 
}