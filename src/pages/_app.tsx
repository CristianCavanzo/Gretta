import type { AppProps } from 'next/app';
import '@styles/global.css';
import { montserrat } from '@fonts';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<main className={montserrat.className}>
			<Component {...pageProps} />
		</main>
	);
}
