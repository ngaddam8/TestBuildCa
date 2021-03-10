import { Injectable } from '@angular/core';
import { ApiService } from '../api-service/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api: ApiService;
  constructor(api: ApiService) { 
    this.api = api;
  }

  loggedIn(callback){
    this.api.serverCall("GET", "/api/isLoggedIn", null, (data)=>{
      callback(data);
    });
  }

  getLoggedInUser(callback){
    this.api.serverCall("GET", "/api/loggedInUser", null, (data)=>{
      callback(data);
    });
  }

  logOut(callback){
    this.api.serverCall("GET", "/api/logout", null, (data)=>{
      callback(data);
    });
  }

  login(email, password, callback){
    this.api.serverCall("POST", "/api/login", {email: email, password: password}, (data)=>{
      callback(data)
    });
  }
}
