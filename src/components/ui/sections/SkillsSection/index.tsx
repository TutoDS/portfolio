import { Tab } from '@headlessui/react';
import SkillIcon from 'components/icons/SkillIcon';
import ToolIcon from 'components/icons/ToolIcon';
import { Trans, useTranslation } from 'react-i18next';
import { AiFillDatabase } from 'react-icons/ai';
import { BsHddNetworkFill } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { RiDoubleQuotesR } from 'react-icons/ri';
import { SiLinuxcontainers } from 'react-icons/si';
import { VscJson, VscTools } from 'react-icons/vsc';
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
		<section className={'container mx-auto px-4 py-6'} {...props}>
			<h2 className={'h2 mb-2 text-xl font-bold lg:text-2xl'}>
				{t('skills')}
			</h2>

			<p>
				<Trans
					i18nKey={'skillsDescription'}
					components={{ bold: <strong /> }}
				/>
			</p>

			<div
				className={
					'my-12 ml-auto flex max-w-[85%] flex-col items-end gap-2 rounded border-r-4 border-primary-500 px-4 py-2 text-right dark:border-secondary-500 md:max-w-[35%]'
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
				<h6 className={'text-sm font-bold'}>Robert Greene</h6>
			</div>

			<Tab.Group>
				<Tab.List className={`${styles['tab-list']}`}>
					<Tab className={tabStyling}>
						<CgWebsite />
						Front-end
					</Tab>
					<Tab className={tabStyling}>
						<BsHddNetworkFill />
						Back-end
					</Tab>
					<Tab className={tabStyling}>
						<SiLinuxcontainers />
						DevOps
					</Tab>
					<Tab className={tabStyling}>
						<AiFillDatabase />
						{t('databases')}
					</Tab>
					<Tab className={tabStyling}>
						<VscJson />
						{t('others')}
					</Tab>
					<Tab className={tabStyling}>
						<VscTools />
						{t('tools')}
					</Tab>
				</Tab.List>
				<Tab.Panels className={'px-4 pb-2 pt-6'}>
					<Tab.Panel>
						<ReactTooltip
							type={'dark'}
							place={'top'}
							effect={'solid'}
							className={'bg-black text-white shadow'}
						/>

						<div
							className={
								'flex flex-wrap items-center justify-center gap-8'
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
							className={'bg-black text-white shadow'}
						/>

						<div
							className={
								'flex flex-wrap items-center justify-center gap-8'
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
							className={'bg-black text-white shadow'}
						/>

						<div
							className={
								'flex flex-wrap items-center justify-center gap-8'
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
							className={'bg-black text-white shadow'}
						/>

						<div
							className={
								'flex flex-wrap items-center justify-center gap-8'
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
							className={'bg-black text-white shadow'}
						/>

						<div
							className={
								'flex flex-wrap items-center justify-center gap-8'
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
							className={'bg-black text-white shadow'}
						/>

						<div
							className={
								'flex flex-wrap items-center justify-center gap-8'
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
