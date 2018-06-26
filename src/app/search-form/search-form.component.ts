import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MouseEvent, AgmCoreModule } from '@agm/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';

import { EventosService } from '../eventos.service'
import { Evento, FiltroEvento, tipoEvento } from '../data-model'


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  busqueda: FiltroEvento;
  resultado: Evento[];
  tipoEvento = tipoEvento;
  result: boolean = true;

  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  tiposSeleccionados: any = { medioAmbiente: false, comedores: false, educacion: false, 
  								salud: false, animales: false  };

  constructor(private eventService: EventosService) { 

  }

  limpiarBusquda() {
  	this.busqueda = this.getEmptyEvento();	
  	this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 7);
  	this.tiposSeleccionados = { medioAmbiente: false, comedores: false, educacion: false, 
  								salud: false, animales: false  };
    this.bsRangeValue = [this.bsValue, this.maxDate];
	this.resultado = undefined;
	this.result = true;
  }

  ngOnInit() { 
	this.limpiarBusquda()  
  }

  getEventos() {
    this.busqueda.tipoEvento = []; 
    if (this.tiposSeleccionados.medioAmbiente == true)
    	this.busqueda.tipoEvento.push(tipoEvento.medioAmbiente);
    if (this.tiposSeleccionados.educacion == true)
    	this.busqueda.tipoEvento.push(tipoEvento.educacion);
    if (this.tiposSeleccionados.comedores == true)
    	this.busqueda.tipoEvento.push(tipoEvento.comedores);
    if (this.tiposSeleccionados.salud == true)
    	this.busqueda.tipoEvento.push(tipoEvento.salud);
    if (this.tiposSeleccionados.animales == true)
    	this.busqueda.tipoEvento.push(tipoEvento.animales);
    this.busqueda.rangoFechas = this.bsRangeValue;
    var encontrados = this.eventService.getEventos(this.busqueda);
    this.result = encontrados.length > 0; 
  	this.resultado = this.eventService.getEventos(this.busqueda);
                      //.pipe(finalize(() => this.isLoading = false));
  }

  private getEmptyEvento(): FiltroEvento {
  	return {
	rangoFechas: [],
	tipoEvento: [],
	radio: 1.0,
	//ubicacion del dispositivo (seteada por defecto);
  	lat: -34.61761,
  	lng: -58.36833
	};
  }
}
