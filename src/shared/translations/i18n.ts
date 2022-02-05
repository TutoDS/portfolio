import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import TRANSLATIONS_EN from './locales/en';
import TRANSLATIONS_PT from './locales/pt';

i18n.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		// lng: 'pt',
		fallbackLng: 'pt',

		supportedLngs: ['en', 'pt'],

		resources: {
			en: {
				translation: TRANSLATIONS_EN
			},
			pt: {
				translation: TRANSLATIONS_PT
			}
		},

		keySeparator: false,

		interpolation: {
			escapeValue: false
		},

		// defaultNS: 'common',
		// ns: ['skills', 'experience', 'common'],

		detection: {
			order: [
				'localStorage',
				'cookie',
				'querystring',
				'navigator',
				'htmlTag'
			],
			lookupLocalStorage: 'language'
		},

		react: {
			useSuspense: false
		}
	});
