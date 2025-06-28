import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown, ChevronUp, ChevronRight } from 'lucide-react'
import Flag from 'react-world-flags'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'

const languages = [
    { code: 'id', label: 'Bahasa Indonesia', iso: 'ID' },
    { code: 'en', label: 'English', iso: 'US' },
    { code: 'zh', label: '中文 (Chinese)', iso: 'CN' },
    { code: 'es', label: 'Español (Spanish)', iso: 'ES' },
    { code: 'ko', label: '한국어 (Korean)', iso: 'KR' },
    { code: 'de', label: 'Deutsch (German)', iso: 'DE' },
    { code: 'fr', label: 'Français (French)', iso: 'FR' },
    { code: 'ar', label: 'العربية (Arabic)', iso: 'SA' },
    { code: 'ph', label: 'Tagalog (Filipino)', iso: 'PH' },
    { code: 'jp', label: '日本語 (Japanese)', iso: 'JP' }
];


export default function LanguageSelector() {
    const { i18n } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const { t } = useTranslation();

    const toggleDropdown = () => setIsOpen(!isOpen)
    const selectLanguage = (code) => {
        i18n.changeLanguage(code)
        setIsOpen(false)
    }

    const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0]

    return (
        <div className="relative">
            {/* Desktop */}
            <div className="hidden md:block">
                <button
                    onClick={toggleDropdown}
                    className="flex items-center gap-2.5 text-sm hover:text-black"
                >
                    <Flag code={currentLang.iso} style={{ width: '20px', height: '15px', borderRadius: '2px' }} />
                    {currentLang.label}
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="absolute mt-2 -left-4 bg-white rounded-b shadow text-gray-700 w-48 z-50"
                        >
                            {languages.map((lang) => (
                                <li
                                    key={lang.code}
                                    onClick={() => selectLanguage(lang.code)}
                                    className={`px-4 py-2 cursor-pointer flex items-center gap-2 hover:bg-gray-100 ${i18n.language === lang.code ? 'bg-blue-100 font-semibold' : ''
                                        }`}
                                >
                                    <Flag code={lang.iso} style={{ width: '20px', height: '15px', borderRadius: '2px' }} />
                                    {lang.label}
                                </li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>

            {/* Mobile */}
            <div className="block md:hidden">
                <button
                    onClick={toggleDropdown}
                    className="w-full flex items-center justify-between text-left transition hover:text-primary"
                >
                    <span className="flex items-center gap-2">
                        {t("nav.selectLanguage")}
                    </span>
                    {isOpen ? (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                    ) : (
                        <ChevronRight className="w-6 h-6 text-gray-400" />
                    )}
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="mt-2 max-h-48 overflow-y-auto rounded bg-neutral-800 border border-neutral-700 shadow z-50"
                        >
                            <ul className="text-sm text-white divide-y divide-neutral-700">
                                {languages.map((lang) => (
                                    <li
                                        key={lang.code}
                                        onClick={() => selectLanguage(lang.code)}
                                        className={`px-4 py-2 cursor-pointer flex items-center gap-2 hover:bg-neutral-700 ${i18n.language === lang.code ? 'bg-primary text-white font-semibold' : ''
                                            }`}
                                    >
                                        <Flag code={lang.iso} style={{ width: '20px', height: '15px', borderRadius: '2px' }} />
                                        {lang.label}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
