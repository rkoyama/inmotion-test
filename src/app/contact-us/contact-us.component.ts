import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: "AIzaSyDCpZbp-lITBAXN6FsBtrdFvCxV_aN_oOc",
  version: "weekly"
})

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit, AfterViewInit {
  map: any;
  @ViewChild('mapElement') mapElement: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    loader.load().then(() => {
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        center: { lat: 36.560046, lng: -105.102654 },
        zoom: 12,
        mapId: "21d6a46c52ad6946"
      });
    });
  }
}
