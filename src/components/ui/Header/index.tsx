import LanguageSwitcher from './partials/LanguageSwitcher';
import ModeSwitcher from './partials/ModeSwitcher';

const Header = () => {
	return (
		<header
			className={
				'sticky top-0 z-50 px-2 py-4 bg-gray-800 text-white w-full '
			}
		>
			<div
				className={
					'container mx-auto flex gap-4 justify-between items-center'
				}
			>
				<div className='font-bold'>Daniel Sousa</div>

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
