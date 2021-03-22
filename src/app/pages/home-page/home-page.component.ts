import { Component, NgModule, OnInit } from '@angular/core';
import { AdvertsComponent } from '../adverts/adverts.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
