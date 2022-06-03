import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

enum Languages {
	IT = 'it',
	EN = 'en',
}

const fallbackLng = [Languages.IT];

const optionsLan = {
	order: [
		'navigator',
		'querystring',
		'cookie',
		'localStorage',
		'sessionStorage',
		'htmlTag',
		'path',
		'subdomain',
	],
	lookupQuerystring: 'lng',
	lookupCookie: 'i18n',
	lookupLocalStorage: 'i18n',
	lookupFromPathIndex: 0,
	lookupFromSubdomainIndex: 0,

	caches: ['localStorage', 'cookie'],
	excludeCacheFor: ['cimode'],

	htmlTag: document.documentElement,

	cookieMinutes: 10,
	cookieOptions: { path: '/' },
};

if (!i18n.isInitialized) {
	i18n.use(Backend)
		.use(initReactI18next)
		.init({
			detection: optionsLan,
			lng: 'it',
			fallbackLng,
			debug: process.env.NODE_ENV === 'development',
			interpolation: {
				escapeValue: false,
			},
			ns: ['commons'],
			backend: {
				loadPath: process.env.PUBLIC_URL + `/locales/{{lng}}/{{ns}}.json`,
				requestOptions: {
					cache: 'no-store',
				},
			},
		});
}

export default i18n;
