import profilePic from 'assets/images/daniel-sousa.jpg';
import { useTranslation } from 'react-i18next';
import { BsChevronDown } from 'react-icons/bs';
import styles from './styles.module.scss';

type Props = {
	className?: string;
};

const HeroSection = ({ className, ...props }: Props) => {
	const { t } = useTranslation();

	return (
		<>
			<section className='relative h-[50vh] mb-32' {...props}>
				{/* Background image */}

				<div className='absolute inset-0 h-[50vh] pt-16 box-content -z-1'>
					<img
						className='absolute inset-0 w-full h-full object-cover opacity-25 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_250px),_0_100%)]'
						src={'/images/code.jpg'}
						width='1440'
						height='577'
						alt='About'
					/>

					<div
						className='absolute inset-0 bg-gradient-to-t to-gray-900/95 dark:from-gray-900 from-gray-900/75 dark:to-[unset] [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_250px),_0_100%)]'
						aria-hidden='true'
					></div>
				</div>

				<div className='relative max-w-6xl mx-auto px-4 sm:px-6 h-full'>
					<div className='pt-32 pb-12 md:pt-40 md:pb-20'>
						<div className='text-center'>
							<div className='relative flex justify-center items-center'>
								<div
									className='relative inline-flex items-start'
									data-aos='fade-up'
								>
									<img
										className='shadow-lg rounded-lg shadow-black dark:shadow-gray-900'
										src={'/images/code.jpg'}
										width='768'
										height='432'
										alt='About hero'
									/>
									<div
										className='absolute inset-0 bg-gradient-to-t from-gray-900 bg-opacity-95'
										aria-hidden='true'
									></div>
								</div>
								<div
									className='absolute text-white flex flex-col justify-center items-center'
									data-aos='fade-down'
								>
									<img
										className={`${styles['profile-pic']}`}
										src={profilePic}
									/>

									<h1 className='h1 lg:text-4xl font-bold'>
										Daniel &nbsp;
										<span className='text-secondary-500'>
											Sousa
										</span>
									</h1>
									<h2 className={'text-md font-[300]'}>
										Front-end Developer
									</h2>

									<a
										href='#'
										className={
											'mt-12 inline-flex items-center gap-2 justify-center hover:text-secondary-500 transition-all ease-in-out text-lg'
										}
									>
										<BsChevronDown
											className={'animate-bounce'}
										/>
										{t('aboutMe')}
									</a>
								</div>
								{/* <div
									className='absolute bottom-0 -mb-8 w-0.5 h-16 bg-gray-300 dark:bg-gray-700'
									aria-hidden='true'
								></div> */}
							</div>

							{/* <div className='max-w-6xl mx-auto px-4 sm:px-6 absolute -bottom-32'>
								<div className=''>
									<div className='max-w-xs mx-auto md:max-w-[75%] grid sm:grid-cols-2 gap-4 lg:gap-6 lg:grid-cols-3'>
										<div
											className='flex flex-col items-center justify-center p-5 group text-white bg-gradient-to-tr from-primary-500 to-primary-600 shadow-lg dark:shadow-gray-800 '
											data-aos='fade-down'
										>
											<CgWebsite
												className={'text-4xl mb-4'}
											/>
											<div className='text-xl font-[600] tracking-tighter mb-1'>
												{t('webDevelopment')}
											</div>
											<div className='opacity-80'>
												Lorem ipsum dolor amet sit
												consect adipiscing.
											</div>
										</div>

										<div
											className='flex flex-col items-center justify-center p-5 group text-white bg-gradient-to-tr from-primary-500 to-primary-600 shadow-lg dark:shadow-gray-800 '
											data-aos='fade-down'
										>
											<CgWebsite
												className={'text-4xl mb-4'}
											/>
											<div className='text-xl font-[600] tracking-tighter mb-1'>
												{t('webDevelopment')}
											</div>
											<div className='opacity-80'>
												Lorem ipsum dolor amet sit
												consect adipiscing.
											</div>
										</div>

										<div
											className='flex flex-col items-center justify-center p-5 group text-white bg-gradient-to-tr from-primary-500 to-primary-600 shadow-lg dark:shadow-gray-800 '
											data-aos='fade-down'
										>
											<CgWebsite
												className={'text-4xl mb-4'}
											/>
											<div className='text-xl font-[600] tracking-tighter mb-1'>
												{t('webDevelopment')}
											</div>
											<div className='opacity-80'>
												Lorem ipsum dolor amet sit
												consect adipiscing.
											</div>
										</div>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</section>

			{/* <section className={'-mt-20 z-50'}>

			</section> */}
		</>
	);
};

export default HeroSection;
