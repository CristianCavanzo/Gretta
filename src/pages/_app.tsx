import type { AppProps } from 'next/app';
import '@styles/global.css';
import { montserrat, roboto } from '@fonts';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<main className={`${montserrat.className} ${roboto.className}`}>
			<Component {...pageProps} />
		</main>
	);
}
