import { Injectable } from '@angular/core';
import { LoginModel } from '../models/Auth/loginModel';
import { HttpClient } from '@angular/common/http';
import { TokenModel } from '../models/Auth/tokenModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrL = "https://localhost:7285/api/Auth/";
  constructor(private httpClient:HttpClient) { }
  login(loginModel:LoginModel){
   return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrL+"login",loginModel);
  }
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }
}
