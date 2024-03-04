import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-legue-add',
  templateUrl: './legue-add.component.html',
  styleUrl: './legue-add.component.css'
})
export class LegueAddComponent implements OnInit {
  legueAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private toastrService:ToastrService){}
  ngOnInit(): void {
    this.createLegueAddForm();
  }
  createLegueAddForm(){
    this.legueAddForm = this.formBuilder.group({
      legueName:["",Validators.required],
      legueCountry:["",Validators.required]
    })
  }
  add(){
    if(this.legueAddForm.valid){
      console.log(this.legueAddForm.value)
      let legueModel = Object.assign({},this.legueAddForm.value)
      // this.legueService.add(legueModel).subscribe(response=>{
      //   this.toastrService.info(response.message)
      // })
    }else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }
  }
}
