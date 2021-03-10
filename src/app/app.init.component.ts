import { Injectable } from '@angular/core';
import { UserService } from "./services/user-service/user.service";

@Injectable({
  providedIn: 'root'
})
export class AppProvider {
  user: any = null;

  constructor(private userService: UserService) {}

  getUser(){
    return this.user;
  }

  load() {
    let that = this;
    return new Promise((resolve, reject) => {
      this.userService.loggedIn((response)=>{
        if('Logged In'){
            
        } else {
          that.user = null;
        }
        resolve(true);
      });
    });
  }
}