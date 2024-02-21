import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Legue } from '../../models/Legue/legue';
import { LegueResponseModel } from '../../models/Legue/legueResponseModel';
@Component({
  selector: 'app-legue',
  templateUrl: './legue.component.html',
  styleUrl: './legue.component.css'
})
export class LegueComponent {
  legues: Legue[] = [];
  apiUrl = "https://localhost:7285/api/Legue";
  constructor(private httpClient:HttpClient){}
  ngOnInit(): void {
    this.getLegue();
  }
  getLegue(){
      this.httpClient.get<LegueResponseModel>(this.apiUrl).subscribe((response) => {
        this.legues = response.result;
      });
  }
}