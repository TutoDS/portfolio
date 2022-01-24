import { Icon } from '@iconify/react';
import { useTranslation } from 'next-i18next';
import React, { ReactNode } from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { ProgressType } from 'shared/@types/Progress';

type Props = {
	className?: string;
	progress: Omit<ProgressType, 'description'>;
	children?: ReactNode;
};

const ExperienceCard = ({ className, children, progress, ...props }: Props) => {
	const { t } = useTranslation('experience');

	const { title, startDate, endDate, certificate, type, local } = progress;

	return (
		<article
			{...props}
			className={`p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col ${className || ''}`}
		>
			<header>
				<Icon
					className={'dark:text-secondary-500 text-primary-500 md:text-5xl text-xl mb-3'}
					icon={type === 'education' ? 'vaadin:academy-cap' : 'clarity:briefcase-line'}
				/>

				<small className={'inline-flex gap-1 items-center'}>
					{startDate}
					{endDate && (
						<>
							<Icon icon={'fluent:line-horizontal-1-20-regular'} />
							{endDate}
						</>
					)}
				</small>
				<h3 className='h4 font-bold'>
					{t(title)}
					{/* <Trans
						i18nKey={`experience:${title}`}
						components={{
							bold: <strong />,
							small: <small />,
							dot: <>.</>,
							separator: (
								<Icon
									className={'inline'}
									icon={'fluent:line-horizontal-1-20-regular'}
								/>
							)
						}}
						fallback={title}
					/> */}
				</h3>
			</header>
			<div className='text-gray-600 dark:text-gray-400 grow my-1'>
				<div className={'text-sm dark:text-white mb-2'}>
					{t(local)}
					{/* <Trans
						i18nKey={`experience:${local.toString()}`}
						components={{ bold: <strong />, small: <small /> }}
						fallback={local}
					/> */}
				</div>

				{children && children}
			</div>

			{certificate && (
				<a
					target={'_blank'}
					className='dark:text-secondary-500 dark:hover:text-secondary-700 text-primary-500 hover:text-primary-700 inline-flex gap-2 items-center mt-4'
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
