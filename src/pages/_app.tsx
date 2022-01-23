import 'assets/styles/global.scss';
import Header from 'components/ui/Header';
import { ThemeModeProvider } from 'contexts/ThemeModeContext';
import 'flag-icons/css/flag-icons.min.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>Daniel Sousa</title>
			</Head>
			<ThemeModeProvider>
				<Header />
				<main className={'relative'}>
					<Component {...pageProps} />
				</main>
			</ThemeModeProvider>
		</>
	);
};

export default MyApp;
