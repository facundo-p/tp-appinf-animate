export class Evento {
	id?: number;
	titulo: string 		= '';
	fecha: string 		= '';
	horaInicio: string 	= '';
	horaFin: string 	= '';
	tipoEvento: string[] 	= [];
	radio: number 		= 1.0;
	descripcion: string = '';

	//ubicacion: Ubicacion;
	lat: number = 0.0;
	lng: number = 0.0;
	direccion: string = "";
}

export class Ubicacion {
	lat: number = 0.0;
	lng: number = 0.0;
	direccion: string = "";
}

export class FiltroEvento{
	rangoFechas: Date[];
	tipoEvento: string[];
	radio: number 		= 1.0;
	//ubicacion: Ubicacion;
  	lat: number = -34.61761;
  	lng: number = -58.36833;
}

export const tiposEvento = [
	'Medio Ambiente',
	'Comedores',
	'Educación',
	'Salud',
	'Animales'
]

export const tipoEvento = {
	medioAmbiente: 'Medio Ambiente',
	comedores: 'Comedores',
	educacion: 'Educación',
	salud: 'Salud',
	animales: 'Animales'
}

export const eventos: Evento[] = [
{
	id: 1,
	titulo: 'Taller Popular',
	fecha: '29/06/2018',
	horaInicio: '14:00',
	horaFin: '18:00',
	tipoEvento: [tipoEvento.educacion],
	lat: -34.631761249857994,
	lng: -58.355982,
	direccion: "Calle falsa 123, Springfield",
	radio: 10.0,
	descripcion: 'Taller de apoyo escolar para chicos de escuelas públicas'
},
{
	id:2,
	titulo: 'Asistente de cocina',
	fecha: '16/07/2018',
	horaInicio: '11:00',
	horaFin: '14:30',
	tipoEvento: [tipoEvento.comedores],
	lat: -34.62761249857994,
	lng: -58.385982,
	direccion: "Calle falsa 123, Springfield",
	radio: 15.0,
	descripcion: 'Necesitamos voluntari@s que nos ayuden a preparar los almuerzos'
},
{
	id: 3,
	titulo: 'Limpieza Plaza',
	fecha: '27/06/2018',
	horaInicio: '11:00',
	horaFin: '14:30',
	tipoEvento: [tipoEvento.medioAmbiente, tipoEvento.salud],
	lat: -34.62761249857994,
	lng: -58.395982,
	direccion: "Calle falsa 123, Springfield",
	radio: 20.0,
	descripcion: 'Juntemonos entre vecinos y recuperemos la plaza de nuestro barrio!'
},
{
	id:4,
	titulo: 'Cocinero',
	fecha: '02/07/2018',
	horaInicio: '11:00',
	horaFin: '14:30',
	tipoEvento: [tipoEvento.comedores],
	lat: -34.61761249857994,
	lng: -58.395982,
	direccion: "Calle falsa 123, Springfield",
	radio: 15.0,
	descripcion: 'Necesitamos voluntari@s que nos ayuden a preparar los almuerzos'
},
{
	id: 5,
	titulo: 'Taller Popular',
	fecha: '30/06/2018',
	horaInicio: '14:00',
	horaFin: '18:00',
	tipoEvento: [tipoEvento.educacion],
	lat: -34.60761249857994,
	lng: -58.388982,
	direccion: "Calle falsa 123, Springfield",
	radio: 10.0,
	descripcion: 'Taller de apoyo escolar para chicos de escuelas públicas'
},
{
	id: 6,
	titulo: 'Evento muy lejano',
	fecha: '29/06/2018',
	horaInicio: '14:00',
	horaFin: '18:00',
	tipoEvento: [tipoEvento.educacion],
	lat: -34.50761249857994,
	lng: -58.688982,
	direccion: "Calle falsa 123, Springfield",
	radio: 100.0,
	descripcion: 'Evento que queda en las lejanías'
},
{
	id: 7,
	titulo: 'Limpieza Plaza',
	fecha: '10/07/2018',
	horaInicio: '11:00',
	horaFin: '14:30',
	tipoEvento: [tipoEvento.medioAmbiente, tipoEvento.salud],
	lat: -34.62761249857994,
	lng: -58.395982,
	direccion: "Calle falsa 123, Springfield",
	radio: 20.0,
	descripcion: 'Juntemonos entre vecinos y recuperemos la plaza de nuestro barrio!'
},
{
	id:8,
	titulo: 'Cocinero',
	fecha: '016/07/2018',
	horaInicio: '11:00',
	horaFin: '14:30',
	tipoEvento: [tipoEvento.comedores],
	lat: -34.61761249857994,
	lng: -58.395982,
	direccion: "Calle falsa 123, Springfield",
	radio: 15.0,
	descripcion: 'Necesitamos voluntari@s que nos ayuden a preparar los almuerzos'
},
{
	id: 9,
	titulo: 'Taller Popular',
	fecha: '30/07/2018',
	horaInicio: '14:00',
	horaFin: '18:00',
	tipoEvento: [tipoEvento.educacion],
	lat: -34.60761249857994,
	lng: -58.388982,
	direccion: "Calle falsa 123, Springfield",
	radio: 10.0,
	descripcion: 'Taller de apoyo escolar para chicos de escuelas públicas'
}
]
