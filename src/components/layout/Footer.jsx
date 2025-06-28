import { useTranslation, Trans } from 'react-i18next'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
    const { t } = useTranslation()
    const currentYear = new Date().getFullYear()

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-neutral-900 text-white py-8">
            {/* Navigation */}
            <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-0 px-6 md:px-0">
                <img src="images/itsday.png" alt="Logo" className="object-contain w-18 h-auto" />
                <div className="md:flex gap-4 hidden flex-wrap">
                    <a href="/#" className="px-4 py-1 border rounded-full whitespace-nowrap hover:bg-white hover:text-black transition-colors ">{t('nav.home')}</a>
                    <a href="/#" className="px-4 py-1 border rounded-full whitespace-nowrap hover:bg-white hover:text-black transition-colors ">{t('nav.batik')}</a>
                    <a href="/#" className="px-4 py-1 border rounded-full whitespace-nowrap hover:bg-white hover:text-black transition-colors ">{t('nav.store')}</a>
                    <a href="/#" className="px-4 py-1 border rounded-full whitespace-nowrap hover:bg-white hover:text-black transition-colors ">{t('nav.ai')}</a>
                    <a href="/#" className="px-4 py-1 border rounded-full whitespace-nowrap hover:bg-white hover:text-black transition-colors ">{t('nav.contact')}</a>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-0 py-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-64">
                <div className="flex flex-col gap-6">
                    <h1 className="text-4xl md:text-6xl font-semibold">
                        {t('footer.tagline')}
                    </h1>
                    <p className="text-xs h-full text-[#595A5B] hidden md:flex items-end">
                        &copy; {currentYear} Batikan. {t('footer.rights')}
                    </p>
                    <div className="flex gap-4 md:hidden flex-wrap">
                        <a href="/#" className="px-4 py-1 border rounded-full whitespace-nowrap hover:bg-white hover:text-black transition-colors ">{t('nav.home')}</a>
                        <a href="/#" className="px-4 py-1 border rounded-full whitespace-nowrap hover:bg-white hover:text-black transition-colors ">{t('nav.batik')}</a>
                        <a href="/#" className="px-4 py-1 border rounded-full whitespace-nowrap hover:bg-white hover:text-black transition-colors ">{t('nav.store')}</a>
                        <a href="/#" className="px-4 py-1 border rounded-full whitespace-nowrap hover:bg-white hover:text-black transition-colors ">{t('nav.ai')}</a>
                        <a href="/#" className="px-4 py-1 border rounded-full whitespace-nowrap hover:bg-white hover:text-black transition-colors ">{t('nav.contact')}</a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                    <div className="flex flex-col gap-2 text-lg order-3 md:order-1">
                        <h2 className="text-[#595A5B] font-semibold">{t('footer.location')}</h2>
                        <p>Jl. Raya Tajur, Kp. Buntar, Kel. Muara Sari, Kec. Bogor Selatan</p>
                    </div>
                    <div className="flex flex-col gap-2 text-lg order-2">
                        <h2 className="text-[#595A5B] font-semibold">{t('footer.email')}</h2>
                        <p>batikan@gmail.com</p>
                    </div>
                    <div className="flex flex-col gap-2 text-lg order-1 md:order-3">
                        <h2 className="text-[#595A5B] font-semibold">{t('footer.contact')}</h2>
                        <p>+62 838 7963 0647</p>
                        <p>+62 857 7025 3105</p>
                    </div>
                    <div className="flex flex-col gap-2 text-lg order-4">
                        <h2 className="text-[#595A5B] font-semibold">{t('footer.social')}</h2>
                        <div className="flex gap-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6 md:w-8 md:h-8 hover:opacity-80 transition" />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <img src="/icons/youtube.svg" alt="Youtube" className="w-6 h-6 md:w-8 md:h-8 hover:opacity-80 transition" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6 md:w-8 md:h-8 hover:opacity-80 transition" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6 md:w-8 md:h-8 hover:opacity-80 transition" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-0">
                <div className="flex justify-center items-center">
                    <h1 className="text-white text-[100px] md:text-[350px] mb-8 font-semibold leading-none text-center">
                        Batikan
                    </h1>
                </div>

                {/* Button To Top */}
                <button
                    onClick={scrollToTop}
                    className="w-full rounded-xl border border-gray-700 px-4 md:px-8 py-4 flex flex-row items-center justify-between gap-4 bg-neutral-800 text-sm hover:bg-neutral-700 transition"
                >
                    <span className="text-left">
                        {t('footer.scrollLine1')} <br /> {t('footer.scrollLine2')}
                    </span>
                    <div className="bg-white text-black rounded-full p-2">
                        <ArrowUp className="w-4 h-4" />
                    </div>
                </button>
            </div>

            <p className="text-xs text-center text-[#595A5B] md:hidden mt-4">
                &copy; {currentYear} Batikan. {t('footer.rights')}
            </p>
        </footer>
    )
}
