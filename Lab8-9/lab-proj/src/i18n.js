import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-fs-backend";
import common_en from "./locales/en-US/common";
import common_fr from "./locales/fr-CA/common";
import LanguageDetector from "i18next-browser-languagedetector";
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
	// load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
	// learn more: https://github.com/i18next/i18next-http-backend
	.use(Backend)
	// detect user language
	// learn more: https://github.com/i18next/i18next-browser-languageDetector
	.use(LanguageDetector)
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		lng: "en",
		fallbackLng: "en",
		defaultNS: "common",
		resources: {
			en: { common: common_en },
			fr: { common: common_fr },
		},
		react: {
			useSuspense: false,
		},
		debug: true,
	});

export default i18n;
