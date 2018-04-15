import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number = 37.330474;
  lng: number = -121.873862;
  constructor() { }

  ngOnInit() {
  }

}
