import { FaElementor } from 'react-icons/fa';
import {
	SiAngular,
	SiBootstrap,
	SiChakraui,
	SiCss3,
	SiDocker,
	SiExpress,
	SiFirebase,
	SiGit,
	SiHtml5,
	SiJavascript,
	SiLaravel,
	SiLatex,
	SiLinux,
	SiMariadb,
	SiMarkdown,
	SiMaterialui,
	SiMongodb,
	SiMysql,
	SiNestjs,
	SiNextdotjs,
	SiNodedotjs,
	SiNpm,
	SiPhp,
	SiPostgresql,
	SiReact,
	SiSass,
	SiStyledcomponents,
	SiTailwindcss,
	SiTypescript,
	SiWindicss,
	SiWoo,
	SiWordpress,
	SiYarn
} from 'react-icons/si';
import { SkillType } from 'shared/@types/Skill';

type Props = {
	skill: SkillType;
	className?: string;
};

const SkillIcon = ({ skill, className, ...props }: Props) => {
	const renderIcon = () => {
		switch (skill) {
			case 'HTML':
				return <SiHtml5 className={`${className || ''}`} />;

			case 'Markdown':
				return <SiMarkdown className={`${className || ''}`} />;

			case 'CSS':
				return <SiCss3 className={`${className || ''}`} />;

			case 'Sass':
				return <SiSass className={`${className || ''}`} />;

			case 'Chakra UI':
				return <SiChakraui className={`${className || ''}`} />;

			case 'Tailwind CSS':
				return <SiTailwindcss className={`${className || ''}`} />;

			case 'WindiCSS':
				return <SiWindicss className={`${className || ''}`} />;

			case 'Material UI':
				return <SiMaterialui className={`${className || ''}`} />;

			case 'Bootstrap':
				return <SiBootstrap className={`${className || ''}`} />;

			case 'JavaScript':
				return <SiJavascript className={`${className || ''}`} />;

			case 'TypeScript':
				return <SiTypescript className={`${className || ''}`} />;

			case 'React':
				return <SiReact className={`${className || ''}`} />;

			case 'NextJS':
				return <SiNextdotjs className={`${className || ''}`} />;

			case 'Styled Components':
				return <SiStyledcomponents className={`${className || ''}`} />;

			case 'Angular':
				return <SiAngular className={`${className || ''}`} />;

			case 'NodeJS':
				return <SiNodedotjs className={`${className || ''}`} />;

			case 'Express':
				return <SiExpress className={`${className || ''}`} />;

			case 'NestJS':
				return <SiNestjs className={`${className || ''}`} />;

			case 'PHP':
				return <SiPhp className={`${className || ''}`} />;

			case 'Laravel':
				return <SiLaravel className={`${className || ''}`} />;

			case 'PostgreSQL':
				return <SiPostgresql className={`${className || ''}`} />;

			case 'MySQL':
				return <SiMysql className={`${className || ''}`} />;

			case 'MariaDB':
				return <SiMariadb className={`${className || ''}`} />;

			case 'MongoDB':
				return <SiMongodb className={`${className || ''}`} />;

			case 'Firebase':
				return <SiFirebase className={`${className || ''}`} />;

			case 'Linux':
				return <SiLinux className={`${className || ''}`} />;

			case 'Git':
				return <SiGit className={`${className || ''}`} />;

			case 'NPM':
				return <SiNpm className={`${className || ''}`} />;

			case 'Yarn':
				return <SiYarn className={`${className || ''}`} />;

			case 'Docker':
				return <SiDocker className={`${className || ''}`} />;

			case 'WordPress':
				return <SiWordpress className={`${className || ''}`} />;

			case 'Elementor':
				return <FaElementor className={`${className || ''}`} />;

			case 'WooCommerce':
				return <SiWoo className={`${className || ''}`} />;

			case 'Latex':
				return (
					<SiLatex
						className={`${className || ''} devicon-latex-plain`}
					/>
				);

			default:
				return <></>;
		}
	};

	return <div {...props}>{renderIcon()}</div>;
};

export default SkillIcon;
