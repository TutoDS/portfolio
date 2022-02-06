import commonTranslations from './common.json';
import experienceTranslations from './experience.json';
import skillsTranslations from './skills.json';
import aboutTranslations from './about.json';

const TRANSLATIONS_EN = {
	...skillsTranslations,
	...experienceTranslations,
	...commonTranslations,
	...aboutTranslations
};

export default TRANSLATIONS_EN;
