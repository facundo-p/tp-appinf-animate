import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { SearchFormComponent } from './search-form/search-form.component';
import { EventListComponent } from './event-list/event-list.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { GoogleAddressComponent } from './google-address/google-address.component';  // <-- #1

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    EventListComponent,
    CreateEventComponent,
    GoogleAddressComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule,
    ReactiveFormsModule,
    FormsModule,
    //FontAwesomeModule,
    BsDatepickerModule.forRoot(),
    ButtonsModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCp6QDUxjmXA3Xf171o3KZHPt54Cqgc4E0',
      libraries: ["places"]
    }),
    RouterModule.forRoot([
      {path: 'busqueda', component: SearchFormComponent},
      {path: 'crear', component: CreateEventComponent},
      {path: 'address', component: GoogleAddressComponent}
    ])
  ],
  providers: [ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
