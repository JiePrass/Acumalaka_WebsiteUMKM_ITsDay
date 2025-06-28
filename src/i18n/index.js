import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import id from './locales/id/translation.json'
import en from './locales/en/translation.json'
import zh from './locales/zh/translation.json'
import es from './locales/es/translation.json'
import ko from './locales/ko/translation.json'
import de from './locales/de/translation.json'
import fr from './locales/fr/translation.json'
import ar from './locales/ar/translation.json'
import ph from './locales/ph/translation.json'
import jp from './locales/jp/translation.json'

i18n.use(LanguageDetector).use(initReactI18next).init({
    resources: {
    en: { translation: en },
    id: { translation: id },
    zh: { translation: zh },
    es: { translation: es },
    ko: { translation: ko },
    de: { translation: de },
    fr: { translation: fr },
    ar: { translation: ar },
    ph: { translation: ph },
    jp: { translation: jp }
    },
    lng: 'id',
    fallbackLng: 'id',
    debug: false,
    interpolation: {
        escapeValue: false
    }
})

export default i18n
