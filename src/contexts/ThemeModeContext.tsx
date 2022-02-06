import {
	createContext,
	ReactElement,
	ReactNode,
	useEffect,
	useState
} from 'react';

export type ThemeModeContextData = {
	switchTheme: () => void;
	theme: 'light' | 'dark';
};

type ThemeModeProps = {
	children: ReactNode;
};

export const ThemeModeContext = createContext({} as ThemeModeContextData);

export const ThemeModeProvider = ({
	children
}: ThemeModeProps): ReactElement => {
	const [theme, setTheme] = useState<'dark' | 'light'>('light');

	const switchTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	useEffect(() => {
		const themeFromStorage = localStorage.theme;

		if (themeFromStorage) {
			setTheme(themeFromStorage);
		}
	}, []);

	useEffect(() => {
		localStorage.theme = theme;

		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	return (
		<ThemeModeContext.Provider value={{ switchTheme, theme }}>
			{children}
		</ThemeModeContext.Provider>
	);
};
