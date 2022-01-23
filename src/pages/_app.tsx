import 'assets/styles/global.scss';
import Header from 'components/ui/Header';
import { ThemeModeProvider } from 'contexts/ThemeModeContext';
import 'flag-icons/css/flag-icons.min.css';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeModeProvider>
			<Header />
			<main className={'relative'}>
				{/* <ReactTooltip
					type={'dark'}
					place={'top'}
					effect={'solid'}
					className={'bg-black shadow text-white'}
				/> */}

				<Component {...pageProps} />
			</main>
		</ThemeModeProvider>
	);
};

export default MyApp;
