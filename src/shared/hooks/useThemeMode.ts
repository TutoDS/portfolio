import { ThemeModeContext } from 'contexts/ThemeModeContext';
import { useContext } from 'react';

const useThemeMode = () => {
	return useContext(ThemeModeContext);
};

export { useThemeMode };
