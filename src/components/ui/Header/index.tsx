import React, { useContext } from 'react';
import { Icon } from '@iconify/react';
import LanguageSwitcher from 'components/LanguageSwitcher';
import { ThemeModeContext } from 'contexts/ThemeModeContext';
import Link from 'next/link';

const Header = () => {
	const { theme, switchTheme } = useContext(ThemeModeContext);

	return (
		<header className={'sticky top-0 z-50 px-2 py-4 bg-gray-800 text-white w-full '}>
			<div className={'container mx-auto flex gap-4 justify-between items-center'}>
				<div className='font-bold'>Daniel Sousa</div>

				<ul className={'list-none flex gap-2 items-center'}>
					<li>
						<Link href='/'>
							<a>Home</a>
						</Link>
					</li>
					<li>
						<LanguageSwitcher />
					</li>
					<li>
						<button
							onClick={switchTheme}
							className={'rounded-full p-2 bg-gray-700 hover:bg-gray-900 text-white'}
						>
							<Icon
								icon={
									theme !== 'dark' ? 'clarity:moon-solid' : 'akar-icons:sun-fill'
								}
							/>
						</button>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
