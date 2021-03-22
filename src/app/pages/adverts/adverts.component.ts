import { Component, OnInit } from '@angular/core';
import { AdvertService } from 'src/app/services/advert-service/advert.service';
import { ApiService } from 'src/app/services/api-service/api.service';

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.scss']
})
export class AdvertsComponent implements OnInit {
  public adverts: any = [];
  constructor(public advertService: AdvertService, public api: ApiService) { 
    let that = this;
    this.advertService.getAllAdverts((data: any)=>{

      that.adverts = data;
    });
  }

  ngOnInit(): void {
  }

}
