import { Icon } from '@iconify/react';
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
			<Icon
				icon={
					theme !== 'dark'
						? 'clarity:moon-solid'
						: 'akar-icons:sun-fill'
				}
			/>
		</button>
	);
};

export default ModeSwitcher;
