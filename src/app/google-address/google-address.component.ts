import { Component, OnInit, Input, OnChanges, EventEmitter, Output  } from '@angular/core';
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';

import { Ubicacion } from '../data-model';
import { defaultLocation } from '../config';

@Component({
  selector: 'google-address',
  templateUrl: './google-address.component.html',
  styleUrls: ['./google-address.component.css']
})
export class GoogleAddressComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  @Input() ubicacion: Ubicacion;
  @Output() ubicacionChange: EventEmitter<Ubicacion> = new EventEmitter<Ubicacion>();

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

  log(x) { console.log(x); }

  ngOnInit() {

    //set google maps defaults
    this.zoom = 10;
    this.latitude = 39.8282;
    this.longitude = -98.5795;
  	this.ubicacion = new Ubicacion();
  	this.ubicacion.lat = defaultLocation.lat;
  	this.ubicacion.lng = defaultLocation.lng;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.ubicacion.lat = place.geometry.location.lat();
          this.ubicacion.lng = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });

    this.ubicacionChange.emit(this.ubicacion);
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.ubicacion.lat = position.coords.latitude;
        this.ubicacion.lng = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}

