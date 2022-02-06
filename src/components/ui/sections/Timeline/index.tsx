import { Tab } from '@headlessui/react';
import styles from 'components/ui/sections/SkillsSection/styles.module.scss';
import EducationTimeline from 'components/ui/sections/Timeline/partials/Education';
import ProfessionalExperienceTimeline from 'components/ui/sections/Timeline/partials/ProfessionalExperience';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsBriefcaseFill } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { HiOutlinePresentationChartBar } from 'react-icons/hi';
import WorkshopsTimeline from './partials/Workshops';

type Props = {
	className?: string;
};

const Timeline = ({ className, ...props }: Props) => {
	const { t } = useTranslation();

	const tabStyling = ({ selected }: { selected: boolean }) =>
		`${styles['tabs']} ${selected && styles['selected']}`;

	return (
		<section
			className={`${className || ''} mx-auto container px-4 py-12`}
			{...props}
		>
			<h2 className={'mb-2 text-4xl'}>{t('experience')}</h2>

			<Tab.Group>
				<Tab.List className={`${styles['tab-list']}`}>
					<Tab className={tabStyling}>
						<FaGraduationCap />
						{t('education')}
					</Tab>
					<Tab className={tabStyling}>
						<BsBriefcaseFill />
						{t('experience')}
					</Tab>
					<Tab className={tabStyling}>
						<HiOutlinePresentationChartBar />
						Workshops
					</Tab>
				</Tab.List>
				<Tab.Panels className={'pb-2 pt-6 px-4'}>
					<Tab.Panel>
						<EducationTimeline />
					</Tab.Panel>
					<Tab.Panel>
						<ProfessionalExperienceTimeline />
					</Tab.Panel>
					<Tab.Panel>
						<WorkshopsTimeline />
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</section>
	);
};

export default Timeline;
