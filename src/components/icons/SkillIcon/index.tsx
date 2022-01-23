import { Icon } from '@iconify/react';
import { SkillType } from 'shared/@types/Skill';

type Props = {
	skill: SkillType;
	className?: string;
};

const SkillIcon = ({ skill, className, ...props }: Props) => {
	const renderIcon = () => {
		switch (skill) {
			case 'HTML':
				return <Icon className={`${className || ''}`} icon={'icomoon-free:html-five'} />;

			case 'Markdown':
				return <Icon className={`${className || ''}`} icon={'simple-icons:markdown'} />;

			case 'CSS':
				return <Icon className={`${className || ''}`} icon={'simple-icons:css3'} />;

			case 'Sass':
				return <Icon className={`${className || ''}`} icon={'simple-icons:sass'} />;

			case 'Chakra UI':
				return <Icon className={`${className || ''}`} icon={'simple-icons:chakraui'} />;

			case 'Tailwind CSS':
				return <Icon className={`${className || ''}`} icon={'simple-icons:tailwindcss'} />;

			case 'WindiCSS':
				return <Icon className={`${className || ''}`} icon={'simple-icons:windicss'} />;

			case 'Material UI':
				return <Icon className={`${className || ''}`} icon={'mdi:material-ui'} />;

			case 'Bootstrap':
				return <Icon className={`${className || ''}`} icon={'akar-icons:bootstrap-fill'} />;

			case 'JavaScript':
				return <Icon className={`${className || ''}`} icon={'simple-icons:javascript'} />;

			case 'TypeScript':
				return <Icon className={`${className || ''}`} icon={'simple-icons:typescript'} />;

			case 'React':
				return <Icon className={`${className || ''}`} icon={'simple-icons:react'} />;

			case 'NextJS':
				return <Icon className={`${className || ''}`} icon={'simple-icons:nextdotjs'} />;

			case 'Styled Components':
				return (
					<Icon className={`${className || ''}`} icon={'simple-icons:styledcomponents'} />
				);

			case 'Angular':
				return <Icon className={`${className || ''}`} icon={'simple-icons:angular'} />;

			case 'NodeJS':
				return <Icon className={`${className || ''}`} icon={'simple-icons:nodejs'} />;

			case 'Express':
				return <Icon className={`${className || ''}`} icon={'simple-icons:express'} />;

			case 'NestJS':
				return <Icon className={`${className || ''}`} icon={'simple-icons:nestjs'} />;

			case 'PHP':
				return <Icon className={`${className || ''}`} icon={'simple-icons:php'} />;

			case 'Laravel':
				return <Icon className={`${className || ''}`} icon={'simple-icons:laravel'} />;

			case 'PostgreSQL':
				return <Icon className={`${className || ''}`} icon={'simple-icons:postgresql'} />;

			case 'MySQL':
				return <Icon className={`${className || ''}`} icon={'simple-icons:mysql'} />;

			case 'MariaDB':
				return <Icon className={`${className || ''}`} icon={'simple-icons:mariadb'} />;

			case 'MongoDB':
				return <Icon className={`${className || ''}`} icon={'simple-icons:mongodb'} />;

			case 'Firebase':
				return <Icon className={`${className || ''}`} icon={'simple-icons:firebase'} />;

			case 'Linux':
				return <Icon className={`${className || ''}`} icon={'simple-icons:linux'} />;

			case 'Git':
				return <Icon className={`${className || ''}`} icon={'bi:git'} />;

			case 'NPM':
				return <Icon className={`${className || ''}`} icon={'simple-icons:npm'} />;

			case 'Yarn':
				return <Icon className={`${className || ''}`} icon={'simple-icons:yarn'} />;

			case 'Docker':
				return <Icon className={`${className || ''}`} icon={'simple-icons:docker'} />;

			case 'WordPress':
				return <Icon className={`${className || ''}`} icon={'simple-icons:wordpress'} />;

			case 'Elementor':
				return <Icon className={`${className || ''}`} icon={'fa-brands:elementor'} />;

			case 'WooCommerce':
				return <Icon className={`${className || ''}`} icon={'simple-icons:woo'} />;

			case 'Latex':
				return (
					<Icon
						className={`${className || ''} devicon-latex-plain`}
						icon={'file-icons:latex'}
					/>
				);

			default:
				return <></>;
		}
	};

	return <div {...props}>{renderIcon()}</div>;
};

export default SkillIcon;
