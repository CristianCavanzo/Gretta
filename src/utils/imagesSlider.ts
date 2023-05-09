import House from '@img/house.png';
import Minimalista from '@img/Minimalista.jpg';
import Campo from '@img/campo.png';
import Moderno from '@img/moderno.png';
import { IContainerSlider } from 'types';

export const carouselImages: IContainerSlider[] = [
	{
		id: 1,
		image: { src: House.src, alt: 'Imagen de un cuarto minimalista' },
		name: 'Casa en el campo',
		selected: true,
	},
	{
		id: 2,
		image: { src: Minimalista.src, alt: 'Imagen de unna sala' },
		name: 'Chico norte',
		selected: false,
	},
	{
		id: 3,
		image: { src: Campo.src, alt: 'Casa por fuera minimalista' },
		name: 'Casa minimalista',
		selected: false,
	},
	{
		id: 4,
		image: { src: Moderno.src, alt: 'Imagen habitacion entorno de trabajo' },
		name: 'Madelena',
		selected: false,
	},
];
