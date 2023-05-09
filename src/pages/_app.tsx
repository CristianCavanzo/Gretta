import type { AppProps } from 'next/app';
import '@styles/global.css';
import { Montserrat, Roboto_Mono } from 'next/font/google';
import { Context } from '@context/index';
import { useState } from 'react';
import { carouselImages } from 'utils/imagesSlider';
import Head from 'next/head';
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
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Gretta</title>
			</Head>

			<main className={montserrat.className}>
				<Component {...pageProps} />
			</main>
		</Context.Provider>
	);
}
