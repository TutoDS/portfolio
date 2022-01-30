import { Tab } from '@headlessui/react';
import { Icon } from '@iconify/react';
import SkillIcon from 'components/icons/SkillIcon';
import ToolIcon from 'components/icons/ToolIcon';
import { Trans, useTranslation } from 'react-i18next';
import { RiDoubleQuotesR } from 'react-icons/ri';
import ReactTooltip from 'react-tooltip';
import tools from 'shared/data/tools';
import slugify from 'shared/functions/slugify';
import useSkills from 'shared/hooks/useSkills';
import styles from './styles.module.scss';

const SkillsSection = ({ ...props }) => {
	const { t } = useTranslation();

	const tabStyling = ({ selected }: { selected: boolean }) =>
		`${styles['tabs']} ${selected && styles['selected']}`;

	return (
		<section className={'mx-auto container px-4 py-12'} {...props}>
			<h2 className={'mb-2 text-4xl'}>{t('skills')}</h2>

			<p>
				<Trans
					i18nKey={'skillsDescription'}
					components={{ bold: <strong /> }}
				/>
			</p>

			<div
				className={
					'my-12 border-r-4 rounded px-4 py-2 border-primary-500 dark:border-secondary-500 text-right flex flex-col max-w-[35%] items-end gap-2 ml-auto'
				}
			>
				<RiDoubleQuotesR
					className={
						'text-6xl text-primary-500 dark:text-secondary-500'
					}
				/>
				<p className={'text-xl italic'}>
					The future belongs to those who learn more skills and
					combine them in creative ways.
				</p>
				<h6 className={'font-bold text-sm'}>Robert Greene</h6>
			</div>

			<Tab.Group>
				<Tab.List className={`${styles['tab-list']}`}>
					<Tab className={tabStyling}>
						<Icon icon={'carbon:application-web'} />
						Front-end
					</Tab>
					<Tab className={tabStyling}>
						<Icon icon={'uil:server-network'} />
						Back-end
					</Tab>
					<Tab className={tabStyling}>
						<Icon icon={'carbon:container-registry'} />
						DevOps
					</Tab>
					<Tab className={tabStyling}>
						<Icon icon={'healthicons:database-outline'} />
						{t('databases')}
					</Tab>
					<Tab className={tabStyling}>
						<Icon icon={'mdi:code-json'} />
						{t('others')}
					</Tab>
					<Tab className={tabStyling}>
						<Icon icon={'fluent:window-dev-tools-20-regular'} />
						{t('tools')}
					</Tab>
				</Tab.List>
				<Tab.Panels className={'pb-2 pt-6 px-4'}>
					<Tab.Panel>
						<ReactTooltip
							type={'dark'}
							place={'top'}
							effect={'solid'}
							className={'bg-black shadow text-white'}
						/>

						<div
							className={
								'flex flex-wrap gap-8 items-center justify-center'
							}
						>
							{useSkills('Front-end').map((skill) => {
								const skillClass = slugify(skill.name);

								return (
									<div
										data-tip={skill.name}
										key={slugify(skill.name)}
										className={`${styles['skill-container']} ${styles[skillClass]}`}
									>
										<SkillIcon skill={skill.name} />
									</div>
								);
							})}
						</div>
					</Tab.Panel>
					<Tab.Panel>
						<ReactTooltip
							type={'dark'}
							place={'top'}
							effect={'solid'}
							className={'bg-black shadow text-white'}
						/>

						<div
							className={
								'flex flex-wrap gap-8 items-center justify-center'
							}
						>
							{useSkills('Back-end').map((skill) => {
								const skillClass = slugify(skill.name);

								return (
									<div
										data-tip={skill.name}
										key={slugify(skill.name)}
										className={`${styles['skill-container']} ${styles[skillClass]} dark:bg-gray-700 hover:dark:bg-gray-800`}
									>
										<SkillIcon skill={skill.name} />
									</div>
								);
							})}
						</div>
					</Tab.Panel>
					<Tab.Panel>
						<ReactTooltip
							type={'dark'}
							place={'top'}
							effect={'solid'}
							className={'bg-black shadow text-white'}
						/>

						<div
							className={
								'flex flex-wrap gap-8 items-center justify-center'
							}
						>
							{useSkills('DevOps').map((skill) => {
								const skillClass = slugify(skill.name);

								return (
									<div
										data-tip={skill.name}
										key={slugify(skill.name)}
										className={`${styles['skill-container']} ${styles[skillClass]} dark:bg-gray-700 hover:dark:bg-gray-800`}
									>
										<SkillIcon skill={skill.name} />
									</div>
								);
							})}
						</div>
					</Tab.Panel>
					<Tab.Panel>
						<ReactTooltip
							type={'dark'}
							place={'top'}
							effect={'solid'}
							className={'bg-black shadow text-white'}
						/>

						<div
							className={
								'flex flex-wrap gap-8 items-center justify-center'
							}
						>
							{useSkills('Databases').map((skill) => {
								const skillClass = slugify(skill.name);

								return (
									<div
										data-tip={skill.name}
										key={slugify(skill.name)}
										className={`${styles['skill-container']} ${styles[skillClass]} dark:bg-gray-700 hover:dark:bg-gray-800`}
									>
										<SkillIcon skill={skill.name} />
									</div>
								);
							})}
						</div>
					</Tab.Panel>
					<Tab.Panel>
						<ReactTooltip
							type={'dark'}
							place={'top'}
							effect={'solid'}
							className={'bg-black shadow text-white'}
						/>

						<div
							className={
								'flex flex-wrap gap-8 items-center justify-center'
							}
						>
							{useSkills('Others').map((skill) => {
								const skillClass = slugify(skill.name);

								return (
									<div
										data-tip={skill.name}
										key={slugify(skill.name)}
										className={`${styles['skill-container']} ${styles[skillClass]} dark:bg-gray-700 hover:dark:bg-gray-800`}
									>
										<SkillIcon skill={skill.name} />
									</div>
								);
							})}
						</div>
					</Tab.Panel>
					<Tab.Panel>
						<ReactTooltip
							type={'dark'}
							place={'top'}
							effect={'solid'}
							className={'bg-black shadow text-white'}
						/>

						<div
							className={
								'flex flex-wrap gap-8 items-center justify-center'
							}
						>
							{tools.map((tool) => {
								const toolClass = slugify(tool);

								return (
									<div
										data-tip={tool}
										key={slugify(tool)}
										className={`${styles['tool-container']} ${styles[toolClass]}`}
									>
										<ToolIcon tool={tool} />
									</div>
								);
							})}
						</div>
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</section>
	);
};

export default SkillsSection;
