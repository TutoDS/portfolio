import { Menu, Transition } from '@headlessui/react';
import i18n from 'i18next';
import { Fragment, useEffect, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import styles from './styles.module.scss';

const LanguageSwitcher = () => {
	const [language, setLanguage] = useState<string>();

	useEffect(() => {
		const savedLanguage = localStorage.getItem('language');

		if (savedLanguage) {
			setLanguage(savedLanguage);
			i18n.changeLanguage(savedLanguage);
		} else {
			setLanguage('pt');
		}
	}, []);

	const handleLanguageChange = (event: any) => {
		event.preventDefault();

		setLanguage(event.target.value);
		i18n.changeLanguage(event.target.value);
	};

	useEffect(() => {
		localStorage.setItem('language', language ? language : 'pt');
	}, [language]);

	return (
		<Menu as='div' className='relative inline-block text-left'>
			<div>
				<Menu.Button
					className={
						'focus:ring-transparent inline-flex items-center justify-center w-full px-4 py-1 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-0'
					}
				>
					{language === 'pt' ? (
						<i className={'fi fi-pt'}></i>
					) : (
						<i className={'fi fi-us'}></i>
					)}
					<BsChevronDown
						className={'-mr-1 ml-2 h-4 w-4'}
						aria-hidden='true'
					/>
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter='transition ease-out duration-100'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transform opacity-100 scale-100'
				leave='transition ease-in duration-75'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'
			>
				<Menu.Items className={styles['items']}>
					<div
						className={
							'py-1 px-4 flex flex-col gap-3 items-start text-black'
						}
					>
						<Menu.Item>
							<button
								onClick={handleLanguageChange}
								className={`${styles['language-btn']} ${
									language === 'pt' && styles['disabled']
								}`}
								value={'pt'}
							>
								<i className={'fi fi-pt'}></i>
								Português
							</button>
						</Menu.Item>
						<Menu.Item>
							<button
								onClick={handleLanguageChange}
								className={`${styles['language-btn']} ${
									language === 'en' && styles['disabled']
								}`}
								value={'en'}
							>
								<i className={'fi fi-us'}></i>
								English
							</button>
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default LanguageSwitcher;
