import profilePic from 'assets/images/daniel-sousa.jpg';
import { Trans, useTranslation } from 'react-i18next';
import { HiOutlineMinus } from 'react-icons/hi';
import styles from './styles.module.scss';

type Props = {
	className?: string;
	id?: string;
};

const AboutSection = ({ className, id, ...props }: Props) => {
	const { t } = useTranslation();

	return (
		<section
			className={`container mx-auto px-4 py-6 ${className || ''}`}
			id={id}
			{...props}
		>
			<div
				className={
					'flex flex-col items-center gap-6 sm:flex-row sm:gap-12'
				}
			>
				<img
					data-aos='fade-down'
					src={profilePic}
					alt='Daniel Sousa'
					className={
						'h-[350px] w-full rounded-lg object-cover object-top sm:h-auto sm:w-[350px]'
					}
				/>

				<div data-aos='fade-down' className={'flex flex-col gap-4'}>
					<h2 className={'h2 mb-2 text-xl font-bold lg:text-2xl'}>
						{t('aboutMe')}
					</h2>

					<div>
						<h3 className='mb-1 text-lg md:text-xl'>
							<span className={'relative'}>
								<span className='h-12 overflow-x-hidden whitespace-nowrap pt-2'>
									<Trans
										i18nKey={'intro'}
										components={{
											bold: <strong />,
											small: <small />,
											dot: <>.</>,
											separator: (
												<HiOutlineMinus
													className={'inline'}
												/>
											),
											colored: (
												<span
													className={
														'font-bold text-primary-500 dark:text-secondary-500'
													}
												/>
											)
										}}
									/>
								</span>
								<span
									className={`${styles.cursor} ${styles['will-change']}`}
								></span>
							</span>
						</h3>
						<p>
							<Trans
								i18nKey={'shortDescription'}
								components={{
									bold: <strong />,
									small: <small />,
									dot: <>.</>,
									separator: (
										<HiOutlineMinus className={'inline'} />
									)
								}}
							/>
						</p>
					</div>

					<div className={''}>
						<h3 className={'mb-3 text-lg font-bold md:text-xl'}>
							{t('someDetails')}
						</h3>

						<div
							className={'grid grid-cols-2 gap-4 sm:grid-cols-3'}
						>
							<div className={`${styles['details-card']}`}>
								<span className='text-lg font-bold md:text-2xl'>
									<small>+</small> 10
								</span>
								<span>{t('freelancerProjects')}</span>
							</div>

							<div className={`${styles['details-card']}`}>
								<span className='text-lg font-bold md:text-2xl'>
									3
								</span>
								<span>{t('yearsOfExperience')}</span>
							</div>

							<div className={`${styles['details-card']}`}>
								<span className='text-lg font-bold md:text-2xl'>
									<small>+</small> 10
								</span>
								<span>Projetos em Freelance</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
