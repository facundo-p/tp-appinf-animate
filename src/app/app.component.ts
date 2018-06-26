import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

import { EventosService } from './eventos.service'
import { Evento } from './data-model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  faCoffee;

 /* clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }*/

  constructor(private eventService: EventosService) { }

  ngOnInit() { 
  }

  /*getEventos() {
    //his.isLoading = true;
  	this.eventos = this.eventService.getEventos();
                      //.pipe(finalize(() => this.isLoading = false));
  }*/
  
}
