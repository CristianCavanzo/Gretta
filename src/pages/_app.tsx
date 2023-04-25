import type { AppProps } from 'next/app';
import '@styles/global.css';
import { Montserrat, Roboto_Mono } from 'next/font/google';
import { Context } from '@context/index';
import { useState } from 'react';
import { carouselImages } from 'utils/imagesSlider';

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
	const [sliderImage, setSliderImage] = useState('');
	const [imagesSlider, setImagesSlider] = useState(carouselImages);
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
