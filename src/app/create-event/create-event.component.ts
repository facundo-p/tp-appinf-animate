import { Component, OnInit } from '@angular/core';

import { EventosService } from '../eventos.service';
import { Evento, tipoEvento, Ubicacion } from '../data-model';
import { defaultLocation, horasStr, minutosStr } from '../config';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
	e: Evento;
	titulo: string;
	horas = horasStr;
	minutos = minutosStr;
	tipoEvento = tipoEvento;
	radio: number = 1.0;
  	bsValue = new Date();
  	ubicacion = new Ubicacion();

	log(e) { console.log(e); }

  ngOnInit() {
  	this.e = this.getEmptyEvento();
  	this.ubicacion.lat = defaultLocation.lat;
  	this.ubicacion.lng = defaultLocation.lng;
  }

  getEmptyEvento(): Evento {
  	return {
	titulo:  '',
	fecha: '',
	horaInicio:  '',
	horaFin: '',
	tipoEvento: [],
	radio: 1.0,
	descripcion: '',

	//ubicacion: Ubicacion;
	lat: defaultLocation.lat,
	lng: defaultLocation.lng,
	direccion: ''
  	}
  }



}
