import type { AppProps } from 'next/app';
import '@styles/global.css';
import { Montserrat, Roboto_Mono } from 'next/font/google';
import { Context } from '@context/index';
import { useState } from 'react';
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
	const [sliderId, setSliderId] = useState(0);
	const initialValue = {
		sliderId,
		setSliderId,
	};
	return (
		<Context.Provider value={initialValue}>
			<main className={montserrat.className}>
				<Component {...pageProps} />
			</main>
		</Context.Provider>
	);
}
