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
			<section className='relative h-[450px] md:h-[650px]' {...props}>
				{/* Background image */}
				<div className='-z-1 absolute inset-0 box-content h-[300px] bg-gray-900 pt-16 md:h-[570px]'>
					<img
						className='absolute inset-0 h-full w-full object-cover opacity-25'
						src={'/images/code.jpg'}
						width='1440'
						height='577'
						alt='About'
					/>

					<div
						className='absolute inset-0 bg-gradient-to-t dark:from-gray-900'
						aria-hidden='true'
					></div>
				</div>

				<div className='relative mx-auto max-w-6xl px-4 sm:px-6'>
					<div className='pt-32 md:pt-44'>
						<div className='text-center'>
							<div className='relative flex items-center justify-center'>
								<div
									className='relative inline-flex items-start'
									data-aos='fade-down'
								>
									<img
										className='rounded shadow-sm shadow-gray-900'
										src={'/images/code.jpg'}
										width='768'
										height='432'
										alt='React'
									/>
									<div
										className='absolute inset-0 rounded bg-opacity-95 bg-gradient-to-t from-gray-900'
										aria-hidden='true'
									></div>
								</div>
								<div
									className='absolute flex flex-col items-center justify-center text-white'
									data-aos='fade-down'
								>
									<img
										className={`${styles['profile-pic']}`}
										src={profilePic}
									/>

									<h1 className='h1 font-bold lg:text-4xl'>
										Daniel &nbsp;
										<span className='text-secondary-500'>
											Sousa
										</span>
									</h1>
									<h2 className={'text-md font-[300]'}>
										Front-end Developer
									</h2>

									<a
										href='#about'
										className={
											'mt-3 inline-flex items-center justify-center gap-2 text-lg transition-all ease-in-out hover:text-secondary-500 md:mt-12'
										}
									>
										<BsChevronDown
											className={'animate-bounce'}
										/>
										{t('aboutMe')}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className={'mb-12'}></div>
		</>
	);
};

export default HeroSection;
