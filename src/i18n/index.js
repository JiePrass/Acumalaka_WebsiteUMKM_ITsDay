import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Impor semua file terjemahan
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

// Inisialisasi i18next
i18n
// Deteksi bahasa dari browser
.use(LanguageDetector)
// Integrasi dengan React
.use(initReactI18next)
// Konfigurasi utama
.init({
    resources: {
        id: { translation: id },
        en: { translation: en },
        zh: { translation: zh },
        es: { translation: es },
        ko: { translation: ko },
        de: { translation: de },
        fr: { translation: fr },
        ar: { translation: ar },
        ph: { translation: ph },
        jp: { translation: jp }
    },
    lng: 'id', // Bahasa default
    fallbackLng: 'id', // Bahasa fallback jika tidak ditemukan

    interpolation: {
      escapeValue: false // React sudah aman dari XSS
    }
})

export default i18n
