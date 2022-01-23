import React, { useEffect, useState } from 'react';
import ExperienceCard from 'components/cards/ExperienceCard';
import styles from 'components/ui/sections/Timeline/styles.module.scss';
import useTranslation from 'next-translate/useTranslation';
import { ProgressType } from 'shared/@types/Progress';
import { educationHistory } from 'shared/data/progress';
import slugify from 'shared/functions/slugify';

const EducationTimeline = () => {
	const now = new Date().getUTCFullYear();
	const years = Array(now - (now - 2010))
		.fill('')
		.map((v, idx) => (now - idx).toString());

	const { t } = useTranslation('experience');

	const [year, setYear] = useState('2022');

	useEffect(() => {
		if (
			educationHistory.filter(
				(progress) => progress.startDate === year || progress.endDate === year
			).length === 0
		) {
			setYear((prevState) => (parseInt(prevState) - 1).toString());
		}
		// eslint-disable-next-line
	}, []);

	const yearHistory = (yearProp: string) => {
		const data = educationHistory;

		return data
			.sort((a, b) => (a.title > b.title ? 1 : -1))
			.filter(
				(progress) =>
					(progress.type === 'education' && progress.startDate === yearProp) ||
					progress.endDate === yearProp
			);
	};

	return (
		<div className='flex gap'>
			<div>
				<div className='relative mr-4 sm:mr-12'>
					<div
						className='absolute inset-0 ml-16 pointer-events-none -z-1'
						aria-hidden='true'
					>
						<div className='absolute rounded-lg inset-0 w-0.5 h-full bg-gray-300 dark:bg-gray-600'></div>
					</div>

					{years.map((loopYear) => {
						return (
							educationHistory.filter(
								(progress) =>
									progress.startDate === loopYear || progress.endDate === loopYear
							).length > 0 && (
								<button
									key={loopYear}
									className={`${styles['year-btn']} ${
										year === loopYear && styles['current']
									}`}
									onClick={() => setYear(loopYear)}
								>
									<span className='block w-12 truncate'>{loopYear}</span>
									<span className={`${styles['circle']}`}></span>
								</button>
							)
						);
					})}
				</div>
			</div>

			{years.map((loopYear) => {
				return (
					<div
						className={`grow ${year !== loopYear && 'hidden'}`}
						key={`${loopYear}-data`}
					>
						<div className='grid grid-cols-3 gap-6'>
							{yearHistory(loopYear).map((progress: ProgressType) => {
								return (
									<ExperienceCard
										key={slugify(progress.title)}
										progress={progress}
									>
										{progress.description}
									</ExperienceCard>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default EducationTimeline;
