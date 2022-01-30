import 'assets/styles/global.scss';
import { ThemeModeProvider } from 'contexts/ThemeModeContext';
import 'flag-icons/css/flag-icons.min.css';
import Home from 'pages/Home';
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import 'shared/translations/i18n';

ReactDOM.render(
	<HelmetProvider>
		<Helmet
			titleTemplate={'%s | Daniel Sousa'}
			defaultTitle={'Daniel Sousa'}
		/>

		<ThemeModeProvider>
			<Home />
		</ThemeModeProvider>
	</HelmetProvider>,
	document.getElementById('root')
);
