import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsChevronDown } from 'react-icons/bs';
import styles from './styles.module.scss';

const LanguageSwitcher = () => {
	const router = useRouter();
	const { locale, defaultLocale } = router;

	return (
		<Menu as='div' className='relative inline-block text-left'>
			<div>
				<Menu.Button
					className={
						'focus:ring-transparent inline-flex items-center justify-center w-full px-4 py-1 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-0'
					}
				>
					{locale === 'pt' ? (
						<i className={'fi fi-pt'}></i>
					) : (
						<i className={'fi fi-us'}></i>
					)}
					<BsChevronDown className={'-mr-1 ml-2 h-4 w-4'} aria-hidden='true' />
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
					<div className={'py-1 px-4 flex flex-col gap-3 items-start text-black'}>
						<Menu.Item>
							<Link href={router.asPath} locale={'pt'}>
								<a
									className={`${styles['language-btn']} ${
										locale === 'pt' && styles['disabled']
									}`}
								>
									<i className={'fi fi-pt'}></i>
									Português
								</a>
							</Link>
						</Menu.Item>
						<Menu.Item>
							<Link href={router.asPath} locale={'en'}>
								<a
									className={`${styles['language-btn']} ${
										locale === 'en' && styles['disabled']
									}`}
								>
									<i className={'fi fi-us'}></i>
									English
								</a>
							</Link>
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default LanguageSwitcher;
