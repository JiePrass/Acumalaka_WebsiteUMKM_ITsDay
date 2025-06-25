import { useTranslation, Trans } from 'react-i18next'
import { Search, CircleUserRound, Heart, ShoppingCart, MapPin } from 'lucide-react'
import LanguageSelector from '../shared/LanguageSelector'

export default function Header() {
    const { t } = useTranslation()

    return (
        <header className="border-b">
            {/* Top Bar */}
            <div className="border-b">
                <div className="flex justify-between items-center text-sm py-2 container mx-auto text-gray-600 relative">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{t('nav.location')}</span>
                        <span className="mx-2">|</span>
                        <LanguageSelector />
                    </div>
                    <div>
                        <div>
                            <Trans i18nKey="promo.discountText">
                                Diskon <span className="text-primary">Rp.250.000</span> Untuk Fashion
                            </Trans>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <div className="container mx-auto py-3 flex justify-between items-center">
                <div className="text-2xl font-bold text-primary">Batikan.</div>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
                    <a href="#" className="text-primary">{t('nav.home')}</a>
                    <a href="#">{t('nav.batik')}</a>
                    <a href="#">{t('nav.store')}</a>
                    <a href="#">{t('nav.ai')}</a>
                    <a href="#">{t('nav.contact')}</a>
                </nav>

                <div className="flex items-center gap-4 text-gray-700 relative">
                    <Search className="w-5 h-5 cursor-pointer" />
                    <CircleUserRound className="w-5 h-5 cursor-pointer" />
                    <Heart className="w-5 h-5 cursor-pointer" />
                    <div className="relative">
                        <ShoppingCart className="w-5 h-5 cursor-pointer" />
                        <span className="absolute -top-1 -right-1 bg-red-600 rounded-full w-2 h-2"></span>
                    </div>
                </div>
            </div>
        </header>
    )
}
