import type { AppProps } from 'next/app';
import '@styles/global.css';
import { Montserrat, Roboto_Mono } from 'next/font/google';
import { Context } from '@context/index';
import { useState } from 'react';
import { IContainerSlider } from '@components/Slider/Main/Preview/Container/containerSlider';
import House from '@img/house.png';
import Minimalista from '@img/Minimalista.jpg';
import Campo from '@img/campo.png';
import Moderno from '@img/moderno.png';

export const roboto = Roboto_Mono({
	weight: 'variable',
	style: 'normal',
	subsets: ['latin'],
});
export const montserrat = Montserrat({
	weight: 'variable',
	style: 'normal',
	subsets: ['latin'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
	const images: IContainerSlider[] = [
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

	const [sliderImage, setSliderImage] = useState('');
	const [imagesSlider, setImagesSlider] = useState(images);
	const initialValue = {
		sliderImage,
		setSliderImage,
		imagesSlider,
		setImagesSlider,
	};
	return (
		<Context.Provider value={initialValue}>
			<main className={montserrat.className}>
				<Component {...pageProps} />
			</main>
		</Context.Provider>
	);
}
