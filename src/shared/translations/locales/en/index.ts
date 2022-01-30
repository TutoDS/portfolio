import commonTranslations from './common.json';
import experienceTranslations from './experience.json';
import skillsTranslations from './skills.json';

const TRANSLATIONS_EN = {
	...skillsTranslations,
	...experienceTranslations,
	...commonTranslations
};

export default TRANSLATIONS_EN;
