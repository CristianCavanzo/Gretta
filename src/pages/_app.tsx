import type { AppProps } from 'next/app';
import '@styles/global.css';
import { Montserrat, Roboto_Mono } from 'next/font/google';
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
	return (
		<main className={montserrat.className}>
			<Component {...pageProps} />
		</main>
	);
}
