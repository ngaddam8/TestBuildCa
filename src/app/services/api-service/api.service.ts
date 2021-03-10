import { Injectable } from '@angular/core';

import * as $ from "jquery";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string;
  constructor() { 
    this.apiUrl = "http://localhost:3000"
  }

  serverCall(method: string, endpoint: string, data, callback){
    $.ajax({
      url: this.apiUrl+endpoint,
      method: method,
      data: data,
      success: function(data: string){
        callback(JSON.parse(data));
      }
    });
  }
}
