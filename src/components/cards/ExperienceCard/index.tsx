import { ReactNode } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { BiChevronRight } from 'react-icons/bi';
import { BsBriefcaseFill } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { HiOutlineMinus, HiOutlinePresentationChartBar } from 'react-icons/hi';
import { ProgressType } from 'shared/@types/Progress';
import styles from './styles.module.scss';

type Props = {
	className?: string;
	progress: Omit<ProgressType, 'description'>;
	children?: ReactNode;
};

const ExperienceCard = ({ className, children, progress, ...props }: Props) => {
	const { t } = useTranslation();

	const { title, startDate, endDate, certificate, type, local } = progress;

	const iconStyles =
		'dark:text-secondary-500 text-primary-500 md:text-5xl text-xl mb-3';

	return (
		<article
			{...props}
			className={`p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col ${
				className || ''
			}`}
		>
			<header>
				{type === 'education' ? (
					<FaGraduationCap className={iconStyles} />
				) : type === 'workshop' ? (
					<HiOutlinePresentationChartBar className={iconStyles} />
				) : (
					<BsBriefcaseFill className={iconStyles} />
				)}

				<small className={'inline-flex gap-1 items-center'}>
					{startDate}
					{endDate && (
						<>
							<HiOutlineMinus className={'inline'} />
							{endDate === 'Atualidade' ? t(endDate) : endDate}
						</>
					)}
				</small>
				<h3 className='h4 font-bold'>
					<Trans
						i18nKey={title}
						components={{
							bold: <strong />,
							small: <small />,
							dot: <>.</>,
							separator: <HiOutlineMinus className={'inline'} />
						}}
						fallback={title}
					/>
				</h3>
			</header>
			<div className='text-gray-600 dark:text-gray-400 grow my-1'>
				<div className={'text-sm dark:text-white mb-2'}>
					<Trans
						i18nKey={local}
						components={{
							bold: <strong />,
							small: <small />,
							dot: <>.</>,
							separator: <HiOutlineMinus className={'inline'} />
						}}
						fallback={local}
					/>
				</div>

				{children && children}
			</div>

			{certificate && (
				<a
					target={'_blank'}
					className={`${styles['certificate-btn']}`}
					href={certificate}
					rel='noreferrer'
				>
					<span>{t('certificate')}</span>
					<BiChevronRight />
				</a>
			)}
		</article>
	);
};

export default ExperienceCard;
