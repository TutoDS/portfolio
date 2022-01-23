import 'assets/styles/global.scss';
import Header from 'components/ui/Header';
import { ThemeModeProvider } from 'contexts/ThemeModeContext';
import 'flag-icons/css/flag-icons.min.css';
import { appWithTranslation } from 'next-i18next';
import type { AppContext, AppProps } from 'next/app';
import App from 'next/app';

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

MyApp.getInitialProps = async (appContext: AppContext) => ({
	...(await App.getInitialProps(appContext))
});

export default appWithTranslation(MyApp);
