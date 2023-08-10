import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
   lng: 'en', // Default language
   fallbackLng: 'en', // Fallback language
   resources: {
      en: {
         translation: require('../locales/en.json'), // Import your translation JSON files
      },
      // Add other language translations here
   },
   interpolation: {
      escapeValue: false, // React already escapes
   },
});

export default i18n;
