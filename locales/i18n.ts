import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translations
import en from './en/translation.json';
import bn from './du/translation.json';

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        lng: 'en', // default language
        resources: {
            en: { translation: en },
            bn: { translation: bn },
        },
        interpolation: {
            escapeValue: false, // react already protects against XSS
        },
    });

export default i18n;
