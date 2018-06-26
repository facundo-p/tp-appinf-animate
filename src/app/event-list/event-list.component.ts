import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { AgmCoreModule } from '@agm/core';

import { EventosService } from '../eventos.service';
import { Evento, tipoEvento } from '../data-model';
import { defaultLocation } from '../config';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  zoom: number = 12;
  // initial center position for the map
  lat: number = defaultLocation.lat;
  lng: number = defaultLocation.lng;
  animalIconUrl: string = "http://maps.google.com/mapfiles/ms/micons/blue.png";

  @Input() eventosEncontrados: Evento[];

  constructor(private eventService: EventosService) { }

  ngOnInit() {
  }

  clickedMap($event) {
   if ($event.infoWindow) {
      $event.infoWindow.close();
   }
}

  /*setIcon(e: Evento) : string {
  	var iconUrl : string = "../../recursos/icons/";
  	if (e.tipoEvento == tipoEvento.medioAmbiente)
  		iconUrl = iconUrl + "green-pin.png";
	if (e.tipoEvento == tipoEvento.educacion)
		iconUrl =  iconUrl + "grey-pin.png";
	if (e.tipoEvento == tipoEvento.salud)
		iconUrl =  iconUrl + "black-pin.png";
	if (e.tipoEvento == tipoEvento.comedores)
		iconUrl =  iconUrl + "yellow-pin.png";
	if (e.tipoEvento == tipoEvento.animales)
		iconUrl =  iconUrl + "blue-pin.png";  
  	return iconUrl;
  }*/

}
