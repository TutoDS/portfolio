export type SkillType =
	| 'HTML'
	| 'Markdown'
	| 'CSS'
	| 'Sass'
	| 'Chakra UI'
	| 'Tailwind CSS'
	| 'WindiCSS'
	| 'Material UI'
	| 'Bootstrap'
	| 'JavaScript'
	| 'TypeScript'
	| 'React'
	| 'NextJS'
	| 'Styled Components'
	| 'Angular'
	| 'NodeJS'
	| 'NestJS'
	| 'Express'
	| 'PHP'
	| 'Laravel'
	| 'PostgreSQL'
	| 'MySQL'
	| 'MariaDB'
	| 'MongoDB'
	| 'Firebase'
	| 'Linux'
	| 'Git'
	| 'NPM'
	| 'Yarn'
	| 'Docker'
	| 'WordPress'
	| 'Elementor'
	| 'WooCommerce'
	| 'Latex';

export type SkillAreaType = 'Back-end' | 'Front-end' | 'DevOps' | 'Databases' | 'Others';

export type SkillsType = {
	name: SkillType;
	area: SkillAreaType
}[];