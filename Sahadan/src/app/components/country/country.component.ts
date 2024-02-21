import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../../models/Country/country';
import { CountryResponseModel } from '../../models/Country/countryResponseModel';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent implements OnInit{
  countries: Country[] = []; 
  apiUrl = "https://localhost:7285/api/Country";
 /* countryresponseModel: CountryResponseModel = {
    data: this.countries,
    message: "",
    success: true
  };*/
  constructor(private httpClient:HttpClient){}
  ngOnInit(): void {
    this.getCountry();
  }
  getCountry(){
      this.httpClient.get<CountryResponseModel>(this.apiUrl).subscribe((response) => {
        this.countries = response.result;
      });
  }
}