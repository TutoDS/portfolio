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
			<section className='relative h-[650px]' {...props}>
				{/* Background image */}
				<div className='absolute inset-0 h-[570px] pt-16 box-content -z-1 bg-gray-900'>
					<img
						className='absolute inset-0 w-full h-full object-cover opacity-25'
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

				<div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
					<div className='pt-32 md:pt-44'>
						<div className='text-center'>
							<div className='relative flex justify-center items-center'>
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
										className='absolute inset-0 bg-gradient-to-t from-gray-900 bg-opacity-95 rounded'
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
										href='#about'
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
