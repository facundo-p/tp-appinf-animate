export class Evento {
	id: number;
	titulo: string 		= '';
	fecha: string 		= '';
	horaInicio: string 	= '';
	horaFin: string 	= '';
	tipoEvento: string 	= '';
	radio: number 		= 1.0;
	descripcion: string = '';

	//ubicacion: Ubicacion;
	lat: number = 0.0;
	lng: number = 0.0;
	direccion: string = '';
}

export class Ubicacion {
	lat: number = 0.0;
	lng: number = 0.0;
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

export const eventos: Evento[] = [
{
	id: 1,
	titulo: 'Taller Popular',
	fecha: '26/06/2018',
	horaInicio: '14:00',
	horaFin: '18:00',
	tipoEvento: 'Educación',
	lat: -34.631761249857994,
	lng: -58.355982,
	direccion: "",
	radio: 10.0,
	descripcion: 'Taller de apoyo escolar para chicos de escuelas públicas'
},
{
	id:2,
	titulo: 'Asistente de cocina',
	fecha: '26/06/2018',
	horaInicio: '11:00',
	horaFin: '14:30',
	tipoEvento: 'Comedores',
	lat: -34.62761249857994,
	lng: -58.385982,
	direccion: "",
	radio: 15.0,
	descripcion: 'Necesitamos voluntari@s que nos ayuden a preparar los almuerzos'
},
{
	id: 3,
	titulo: 'Limpieza Plaza',
	fecha: '27/06/2018',
	horaInicio: '11:00',
	horaFin: '14:30',
	tipoEvento: 'Medio Ambiente',
	lat: -34.62761249857994,
	lng: -58.395982,
	direccion: "",
	radio: 20.0,
	descripcion: 'Juntemonos entre vecinos y recuperemos la plaza de nuestro barrio!'
},
{
	id:4,
	titulo: 'Cocinero',
	fecha: '26/06/2018',
	horaInicio: '11:00',
	horaFin: '14:30',
	tipoEvento: 'Comedores',
	lat: -34.61761249857994,
	lng: -58.395982,
	direccion: "",
	radio: 15.0,
	descripcion: 'Necesitamos voluntari@s que nos ayuden a preparar los almuerzos'
},
{
	id: 5,
	titulo: 'Taller Popular',
	fecha: '26/06/2018',
	horaInicio: '14:00',
	horaFin: '18:00',
	tipoEvento: 'Educación',
	lat: -34.60761249857994,
	lng: -58.388982,
	direccion: "",
	radio: 10.0,
	descripcion: 'Taller de apoyo escolar para chicos de escuelas públicas'
}
]
