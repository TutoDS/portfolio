import { ProgressHistoryType } from 'shared/@types/Progress';

const educationHistory: ProgressHistoryType = [
	{
		title: 'Licenciatura em Engenharia Informática',
		local: 'ESTG - P-Porto',
		startDate: '2018',
		endDate: '2021',
		type: 'education'
	},
	{
		title: 'Curso de PHP & MySQL',
		local: 'FormaBase',
		startDate: '2018',
		type: 'education'
	},
	{
		title: 'CTeSP em Informática de Gestão <small>(Nivel V QNQ)</small>',
		startDate: '2016',
		endDate: '2018',
		type: 'education',
		local: 'ESTG - P.Porto'
	},
	{
		title: 'Curso Profissional Técnico de Gestão de Equip. Informáticos <small>(Nivel IV QNQ)</small>',
		startDate: '2010',
		endDate: '2013',
		type: 'education',
		local: 'Escola Sec. de Marco de Canaveses'
	},
	{
		title: 'Terminal Linux',
		startDate: '2022',
		type: 'education',
		local: 'Udemy',
		certificate: '/certificates/terminal-linux.pdf'
	},
	{
		title: 'Write quicker HTML5 and CSS 3; productivity hacks with emmet',
		startDate: '2021',
		type: 'education',
		local: 'Udemy',
		certificate: '/certificates/write-quicker-html-css.pdf'
	},
	{
		title: 'Beginner VS Code',
		startDate: '2021',
		type: 'education',
		local: 'Udemy',
		certificate: '/certificates/beginner-vs-code.pdf'
	},
	{
		title: 'Git & GitHub Crash Course: Create a Repository From Scratch!',
		startDate: '2021',
		type: 'education',
		local: 'Udemy',
		certificate: '/certificates/git-github-crash-course.pdf'
	},
	{
		title: 'Mac Keyboard Shortcuts (OSX) for Beginners & PC Users',
		startDate: '2021',
		type: 'education',
		local: 'Udemy',
		certificate: '/certificates/mac-shortcuts.pdf'
	},
	{
		title: "Beginner's guide to the Mac OS X Command Line (Terminal)",
		startDate: '2021',
		type: 'education',
		local: 'Udemy',
		certificate: '/certificates/mac-terminal-beginner.pdf'
	},
	{
		title: 'Master Your Apple Mac - 10 Top Essential Tips and Tricks',
		startDate: '2021',
		type: 'education',
		local: 'Udemy',
		certificate: '/certificates/mac-tips-tricks.pdf'
	},
	{
		title: 'Learn Git: Everything You Need To Know',
		startDate: '2021',
		type: 'education',
		local: 'Udemy',
		certificate: '/certificates/learn-git.pdf'
	},
	{
		title: 'JSON For Beginners: A Very Basic Introduction',
		startDate: '2021',
		type: 'education',
		local: 'Udemy',
		certificate: '/certificates/json-beginner.pdf'
	},
	{
		title: 'Easy Markdown with VS Code',
		startDate: '2021',
		type: 'education',
		local: 'Udemy',
		certificate: '/certificates/markdown-vscode.pdf'
	},
	{
		title: 'Git Beginner in VS Code',
		startDate: '2021',
		type: 'education',
		local: 'Udemy',
		certificate: '/certificates/git-vscode.pdf'
	},
	{
		title: 'API Restful Javascript com Node.JS, Typescript, TypeORM etc',
		startDate: '2021',
		type: 'education',
		local: 'Udemy',
		certificate: '/certificates/api-restful.pdf'
	},
	{
		title: 'Git from Basics to Advanced: Practical Guide for Developers',
		startDate: '2021',
		type: 'education',
		local: 'Udemy',
		certificate: '/certificates/git-basics-to-advanced.pdf'
	},
	{
		title: 'Setup OS X development environments',
		startDate: '2020',
		type: 'education',
		local: 'Udemy',
		certificate: '/certificates/osx-dev-env.pdf'
	},
	{
		title: 'Aprende a publicar tus páginas web',
		startDate: '2018',
		type: 'education',
		local: 'Udemy',
		certificate: '/certificates/public-web-pages.pdf'
	},
	{
		title: 'Build CRUD Application - PHP & Mysql',
		startDate: '2018',
		type: 'education',
		local: 'Udemy',
		certificate: '/certificates/php-crud.pdf'
	},
	{
		title: 'Meu Primeiro Mac',
		startDate: '2020',
		type: 'education',
		local: 'Udemy',
		certificate: '/certificates/my-first-mac.pdf'
	}
];

const professionalExperienceHistory: ProgressHistoryType = [
	{
		type: 'work',
		startDate: '2021',
		endDate: 'Atualidade',
		title: 'Junior Front-end Developer',
		local: 'Everis',
		description: `Front-end developer, com manutenção de componentes de front-end através da framework <bold>.NET</bold>.`
	},
	{
		type: 'work',
		startDate: '2021',
		title: 'Front-end Developer <separator /> Estágio Curricular',
		local: 'Jimmy Boys',
		description: `Estágio realizado no âmbito da Licenciatura em Engenharia Informática, atuando na área de front-end, recorrendo à biblioteca <bold>React</bold>.`
	},
	{
		type: 'work',
		startDate: '2019',
		endDate: '2020',
		title: 'Front-end Developer <small>(Bolseiro de Iniciação Científica)</small>',
		local: 'Petapilot / ESTG',
		description: `Bolseiro de iniciação científica, envolvendo a criação de protótipos funcionais e exploração de novas abordagens de UI/UX para sistema de auditoria fiscal. Desenvolvimento com a biblioteca <bold>React</bold>.`
	},
	{
		type: 'work',
		startDate: '2018',
		title: 'Full-stack Developer <separator /> Estágio Curricular',
		local: 'JPS Technology Solutions',
		description: `Estágio realizado no âmbito do curso <bold>CTeSP em Informática de Gestão</bold>, com a realização de uma sistema de Tickets, recorrendo às tecnologias: <bold>PHP</bold>, <bold>MySQL</bold>, <bold>HTML</bold> e <bold>CSS</bold> com <bold>Bootstrap</bold>.`
	}
];

const workshopsHistory: ProgressHistoryType = [
	{
		type: 'workshop',
		title: 'Scrum Day Brazil <small>(2021)</small>',
		startDate: '2021',
		local: 'Scrum Day Brazil',
		certificate: '/certificates/scrum-day-brazil.pdf'
	},
	{
		type: 'workshop',
		title: 'Social Media Day',
		local: 'Swonkie',
		startDate: '2021',
		certificate: '/certificates/social-media-day.pdf'
	},
	{
		type: 'workshop',
		title: 'JSNation Live 2021',
		local: 'JSNation',
		startDate: '2021',
		certificate: '/certificates/jsnation.pdf'
	},
	{
		type: 'workshop',
		title: 'Workshop <separator /> Processamento Distribuído e Integração (Node / Java / Apache Camel)',
		startDate: '2019',
		local: 'ESTG <separator /> P.Porto',
		certificate: '/certificates/estg-processamento-distribuido.pdf'
	},
	{
		type: 'workshop',
		title: 'Workshop <separator /> Introdução a Machine Learning com Knime',
		startDate: '2019',
		local: 'ESTG <separator /> P.Porto',
		certificate: '/certificates/estg-machine-learning-knime.pdf'
	},
	{
		type: 'workshop',
		title: 'Workshop <separator /> Front End Development Using React (With Rest/GraphQL APIs)',
		startDate: '2019',
		local: 'ESTG <separator /> P.Porto',
		certificate: '/certificates/estg-front-end-react.pdf'
	},
	{
		type: 'workshop',
		title: 'Semana da Publicidade Online',
		startDate: '2021',
		local: 'Robert Cortez',
		certificate: '/certificates/semana-da-publicidade.pdf'
	}
];

export const historyRecords: ProgressHistoryType = [
	...professionalExperienceHistory,
	...educationHistory,
	...workshopsHistory
];
