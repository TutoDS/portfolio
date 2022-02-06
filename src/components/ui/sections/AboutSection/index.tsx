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
			className={`mx-auto container px-4 py-12 ${className || ''}`}
			id={id}
			{...props}
		>
			<div className={'flex gap-12 items-center'}>
				<img
					data-aos='fade-down'
					src={profilePic}
					alt='Daniel Sousa'
					className={'rounded-lg w-[350px]'}
				/>

				<div data-aos='fade-down' className={'flex flex-col gap-4'}>
					<h2 className={'h2 lg:text-3xl font-bold mb-2'}>
						{t('aboutMe')}
					</h2>

					<div>
						<h3 className='text-lg md:text-xl mb-1'>
							<span className={'relative'}>
								<span className='h-12 pt-2 overflow-x-hidden whitespace-nowrap'>
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
														'font-bold dark:text-secondary-500 text-primary-500'
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
						<h3 className={'mb-3 text-lg md:text-xl font-bold'}>
							{t('someDetails')}
						</h3>

						<div className={'grid grid-cols-3 gap-4'}>
							<div className={`${styles['details-card']}`}>
								<span className='font-bold text-lg md:text-2xl'>
									<small>+</small> 10
								</span>
								<span>{t('freelancerProjects')}</span>
							</div>

							<div className={`${styles['details-card']}`}>
								<span className='font-bold text-lg md:text-2xl'>
									3
								</span>
								<span>{t('yearsOfExperience')}</span>
							</div>

							<div className={`${styles['details-card']}`}>
								<span className='font-bold text-lg md:text-2xl'>
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
