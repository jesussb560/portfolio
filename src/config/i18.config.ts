import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { esTranslation } from "../locales/es";
import { enTranslation } from "../locales/en";

i18n
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
        returnObjects: true,
        debug: true,
        resources: {
            es: {
                translation: { ...esTranslation }
            },
            en: {
                translation: { ...enTranslation }
            }
        }
    });
export default i18n;