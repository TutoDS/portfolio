import aboutTranslations from './about.json';
import commonTranslations from './common.json';
import experienceTranslations from './experience.json';
import skillsTranslations from './skills.json';

const TRANSLATIONS_PT = {
	...skillsTranslations,
	...experienceTranslations,
	...commonTranslations,
	...aboutTranslations
};

export default TRANSLATIONS_PT;
