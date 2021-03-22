import { Injectable } from '@angular/core';
import { ApiService } from '../api-service/api.service';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  constructor(public api: ApiService) { }

  getAllAdverts(callback: any){
    this.api.serverCall("GET", "/api/adverts", null, (data: any)=>{
      callback(data);
    });
  }
}
