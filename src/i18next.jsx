import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import Uz from "../public/Language/Uz/uz.json"
import Ru from "../public/Language/Ru/ru.json"
import Eng from "../public/Language/Eng/eng.json"



i18n
 .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng:i18n.language,
    debug: true,
    resources:{
        uz:{translation:Uz},
        ru:{translation:Ru},
        eng:{translation:Eng}
    },

    interpolation: {
      escapeValue: false, 
    }
  });


export default i18n;