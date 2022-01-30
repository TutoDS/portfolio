import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { useThemeMode } from 'shared/hooks/useThemeMode';

type Props = {
	className?: string;
};

const ModeSwitcher = ({ className, ...props }: Props) => {
	const { switchTheme, theme } = useThemeMode();

	return (
		<button
			onClick={switchTheme}
			className={`${
				className || ''
			} rounded-full p-2 bg-primary-500 hover:bg-primary-600 text-white transition-all ease-in-out`}
		>
			{theme === 'dark' ? <BsFillMoonFill /> : <BsFillSunFill />}
		</button>
	);
};

export default ModeSwitcher;
