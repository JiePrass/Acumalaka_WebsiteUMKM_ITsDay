import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'
import Flag from 'react-world-flags'

const languages = [
    { code: 'id', label: 'Bahasa Indonesia', iso: 'ID' },
    { code: 'en', label: 'English', iso: 'US' }
]

export default function LanguageSelector() {
    const { i18n } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => setIsOpen(!isOpen)
    const selectLanguage = (code) => {
        i18n.changeLanguage(code)
        setIsOpen(false)
    }

    const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0]

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="flex items-center gap-2.5 text-sm hover:text-black"
            >
                <Flag code={currentLang.iso} style={{ width: '20px', height: '15px', borderRadius: '2px' }} />
                {currentLang.label}
                <ChevronDown className="w-4 h-4" />
            </button>

            {isOpen && (
                <ul className="absolute mt-2 -left-4 bg-white rounded-b shadow text-gray-700 w-48 z-50">
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
                </ul>
            )}
        </div>
    )
}
