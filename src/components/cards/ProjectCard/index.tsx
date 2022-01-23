import SkillIcon from 'components/icons/SkillIcon';
import ToolIcon from 'components/icons/ToolIcon';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { ProjectType } from 'shared/@types/Project';
import SkeletonProjectCard from '../SkeletonProjectCard';

type Props = {
	project: ProjectType;
};

const ProjectCard = ({ project, ...props }: Props) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [loadingClass, setLoadingClass] = useState<string>('hidden');

	const onImageLoad = () => {
		setIsLoading(false);
		setLoadingClass('');
	};
	const { t } = useTranslation();

	return (
		<div {...props}>
			{isLoading && <SkeletonProjectCard {...props} />}

			<Link href={`/projects/${project.path}`}>
				<a>
					<Image
						src={project.image}
						alt={project.title}
						width={1920}
						height={1080}
						onLoad={onImageLoad}
						className={`${loadingClass} object-cover object-center rounded-lg shadow-md`}
					/>
				</a>
			</Link>

			<div className={`${loadingClass} relative px-4 -mt-16`}>
				<div
					className={
						'bg-white dark:bg-gray-700 dark:text-white p-6 rounded-lg shadow-lg flex flex-col gap-2'
					}
				>
					<h3 className='text-xl font-400 leading-tight truncate'>{project.title}</h3>

					<div className='flex flex-wrap items-center gap-2'>
						{project.skills.map((skill) => (
							<SkillIcon
								data-tip={skill}
								skill={skill}
								className={'text-2xl cursor-pointer'}
							/>
						))}
						{project.tools &&
							project.tools.map((tool) => (
								<ToolIcon
									data-tip={tool}
									tool={tool}
									className={'text-2xl cursor-pointer'}
								/>
							))}
					</div>

					<div className={'mt-3'}>
						<Link href={`projects/${project.path}`}>
							<a
								className={
									'text-sm bg-teal-500 text-white px-4 py-1 !inline-flex hover:bg-transparent hover:bg-teal-700 rounded-[5px]'
								}
							>
								{t('readMore')}
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
