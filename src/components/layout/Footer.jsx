import { useTranslation, Trans } from 'react-i18next'
import { Facebook, Instagram, Twitter, ArrowUp } from 'lucide-react'

export default function Footer() {
    const { t } = useTranslation()
    const currentYear = new Date().getFullYear()

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-neutral-900 text-white py-8">
            {/* Navigation */}
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="text-2xl font-bold flex">Batikan.</div>
                <div className="flex gap-2 text-sm">
                    <a href="/#" className="px-4 py-1 border rounded-full">{t('nav.home')}</a>
                    <a href="/#" className="px-4 py-1 border rounded-full">{t('nav.batik')}</a>
                    <a href="/#" className="px-4 py-1 border rounded-full">{t('nav.store')}</a>
                    <a href="/#" className="px-4 py-1 border rounded-full">{t('nav.ai')}</a>
                    <a href="/#" className="px-4 py-1 border rounded-full">{t('nav.contact')}</a>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-64">
                <div className="flex flex-col gap-6">
                    <h1 className="text-4xl font-semibold leading-snug">
                        {t('footer.tagline')}
                    </h1>
                    <p className="text-xs text-gray-500">
                        &copy; {currentYear} Fourtivity. {t('footer.rights')}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-[#595A5B] font-semibold">{t('footer.location')}</h2>
                        <p>Jl. Raya Tajur, Kp. Buntar, Kel. Muara Sari, Kec. Bogor Selatan</p>
                        <h2 className="mt-4 text-[#595A5B] font-semibold">{t('footer.email')}</h2>
                        <p>batikan@gmail.com</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-[#595A5B] font-semibold">{t('footer.contact')}</h2>
                        <p>+62 838 7963 0647</p>
                        <p>+62 857 7025 3105</p>
                        <h2 className="mt-4 text-[#595A5B] font-semibold">{t('footer.social')}</h2>
                        <div className="flex gap-4 mt-1">
                            <Facebook className="w-5 h-5" />
                            <Instagram className="w-5 h-5" />
                            <Twitter className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto">
                <div className="flex justify-center items-center">
                    <h1 className="text-white text-[350px] mb-8 font-semibold leading-none text-center">
                        Batikan
                    </h1>
                </div>

                {/* Button To Top */}
                <button
                    onClick={scrollToTop}
                    className="w-full rounded-xl border border-gray-700 px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4 bg-neutral-800 text-sm hover:bg-neutral-700 transition"
                >
                    <span className="text-left">
                        {t('footer.scrollLine1')} <br /> {t('footer.scrollLine2')}
                    </span>
                    <div className="bg-white text-black rounded-full p-2">
                        <ArrowUp className="w-4 h-4" />
                    </div>
                </button>
            </div>
        </footer>
    )
}
