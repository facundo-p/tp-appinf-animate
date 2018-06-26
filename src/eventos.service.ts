import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Evento, FiltroEvento, eventos} from './data-model';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  delayMs = 500;

  // Fake server get; assume nothing can go wrong
  getEventos(busqueda: FiltroEvento): Evento[] {
  	//if (busqueda == null)
  	//	e => busqueda.tipoEvento.includes(e.tipoEvento)
    const eventsFound = eventos.filter(e => this.checkEvento(e, busqueda));
    return eventsFound; 
  }

  private checkEvento(e: Evento, f: FiltroEvento){
    var  match: boolean = false;
    match = f.tipoEvento.includes(e.tipoEvento);
    // Check: evento dentro del radio de búsqueda
    match = match && this.distance(f.lat, f.lng, e.lat, e.lng) < f.radio;
    // Check: sujeto que realiza la búsqueda dentro del radio de alcance que seteó quién creó el evento
    match = match && this.distance(f.lat, f.lng, e.lat, e.lng) < e.radio;
    // Check: fecha evento comprendida dentro de la búsqueda
    var c = e.fecha.split("/");
    var check = new Date(parseInt(c[2]), parseInt(c[1])-1, parseInt(c[0]));
    match = match && check.getTime() >= f.rangoFechas[0].getTime() && check.getTime() < f.rangoFechas[1].getTime(); 

    return match;
  }

  private distance(lat1, lon1, lat2, lon2) {
  var p = 0.017453292519943295;    // Math.PI / 180
  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p)/2 + 
          c(lat1 * p) * c(lat2 * p) * 
          (1 - c((lon2 - lon1) * p))/2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

  /*getEventos() : Evento[] {
  	return eventos;
  }*/

  /*getEventos() : Observable<Evento[]> {
  	return of(eventos).pipe(delay(this.delayMs));
  }*/
}
