import { useEffect, useState } from 'react';
import LanguageSwitcher from './partials/LanguageSwitcher';
import Logo from './partials/Logo';
import ModeSwitcher from './partials/ModeSwitcher';
import styles from './styles.module.scss';

const Header = () => {
	const [additionalClass, setAdditionalClass] = useState<string>();

	// Detect scroll and add class to header and logo
	const listenScrollEvent = (event: Event) => {
		if (window.scrollY < 73) {
			return setAdditionalClass('');
		} else if (window.scrollY > 70) {
			return setAdditionalClass(`bg-primary-900 shadow`);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', listenScrollEvent);

		return () => window.removeEventListener('scroll', listenScrollEvent);
	}, []);

	return (
		<header className={`${styles['header']} ${additionalClass}`}>
			<div
				className={
					'container mx-auto flex gap-4 justify-between items-center'
				}
			>
				<Logo className={`w-[150px]`} />

				<ul className={'list-none flex gap-2 items-center'}>
					<li>Home</li>
					<li>
						<LanguageSwitcher />
					</li>
					<li>
						<ModeSwitcher />
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
