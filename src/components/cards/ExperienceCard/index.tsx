import { Trans, useTranslation } from 'react-i18next';
import { BiChevronRight } from 'react-icons/bi';
import { BsBriefcaseFill } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { HiOutlineMinus, HiOutlinePresentationChartBar } from 'react-icons/hi';
import { ProgressType } from 'shared/@types/Progress';
import styles from './styles.module.scss';

type Props = {
	className?: string;
	progress: ProgressType;
};

const ExperienceCard = ({ className, progress, ...props }: Props) => {
	const { t } = useTranslation();

	const { title, startDate, endDate, certificate, type, description, local } =
		progress;

	const iconStyles =
		'dark:text-secondary-500 text-primary-500 md:text-5xl text-xl mb-3';

	return (
		<article
			{...props}
			className={`flex flex-col bg-white p-6 shadow-2xl dark:bg-gray-800 ${
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

				<small className={'inline-flex items-center gap-1'}>
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
			<div className='my-1 grow text-gray-600 dark:text-gray-400'>
				<div className={'mb-2 text-sm dark:text-white'}>
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

				{description && (
					<Trans
						i18nKey={description}
						components={{
							bold: <strong />,
							small: <small />,
							dot: <>.</>,
							separator: <HiOutlineMinus className={'inline'} />
						}}
						fallback={description}
					/>
				)}
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
