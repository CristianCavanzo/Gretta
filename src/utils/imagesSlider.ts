import House from '@img/house.png';
import Minimalista from '@img/Minimalista.jpg';
import Campo from '@img/campo.png';
import Moderno from '@img/moderno.png';
import { IContainerSlider } from 'types';

export const carouselImages: IContainerSlider[] = [
	{
		id: 1,
		image: { src: House.src, alt: 'Imagen de prueba' },
		name: 'Casa en el campo',
		selected: true,
	},
	{
		id: 2,
		image: { src: Minimalista.src, alt: 'Imagen de prueba' },
		name: 'Casa ',
		selected: false,
	},
	{
		id: 3,
		image: { src: Campo.src, alt: 'Imagen de prueba' },
		name: 'Casa 2',
		selected: false,
	},
	{
		id: 4,
		image: { src: Moderno.src, alt: 'Imagen de prueba' },
		name: 'Casa 3',
		selected: false,
	},
];
