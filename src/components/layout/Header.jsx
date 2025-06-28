import { useState } from "react"
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Search, CircleUserRound, Heart, ShoppingCart, MapPin, ChevronRight } from "lucide-react"
import LanguageSelector from "../shared/LanguageSelector"
import { useTranslation, Trans } from "react-i18next"

export default function Header() {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)

    const nav = [
        { key: "home", href: "#" },
        { key: "batik", href: "#" },
        { key: "store", href: "#" },
        { key: "ai", href: "#" },
        { key: "contact", href: "#" },
        { key: "cart", href: "#" },
        { key: "profile", href: "#" }
    ]

    return (
        <header className="md:border-b pt-4 md:pt-0">
            {/* Top Bar */}
            <div className="border-b hidden md:block">
                <div className="flex justify-between items-center text-sm py-2 container mx-auto text-gray-600 relative">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{t("nav.location")}</span>
                        <span className="mx-2">|</span>
                        <LanguageSelector />
                    </div>
                    <div>
                        <Trans
                            i18nKey="nav.discountText"
                            components={{ highlight: <span className="text-primary" /> }}
                        />
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <div className="container mx-auto py-3 px-6 md:px-0 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src="images/batikan-logo.png" alt="Logo" className="object-contain w-8 h-8"/>
                    <span className="font-bold text-primary text-2xl">Batikan.</span>
                </div>

                <nav className="hidden md:flex items-center gap-6 text-lg font-medium text-gray-700">
                    <a href="#" className="text-primary">{t("nav.home")}</a>
                    <a href="#">{t("nav.batik")}</a>
                    <a href="#">{t("nav.store")}</a>
                    <a href="#">{t("nav.ai")}</a>
                    <a href="#">{t("nav.contact")}</a>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        <Menu className="w-6 h-6" />
                    </button>
                </div>

                <div className="hidden md:flex items-center gap-4 text-gray-700 relative">
                    <Search className="w-5 h-5 cursor-pointer" />
                    <CircleUserRound className="w-5 h-5 cursor-pointer" />
                    <Heart className="w-5 h-5 cursor-pointer" />
                    <div className="relative">
                        <ShoppingCart className="w-5 h-5 cursor-pointer" />
                        <span className="absolute -top-1 -right-1 bg-red-600 rounded-full w-2 h-2"></span>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay gelap */}
                        <motion.div
                            className="fixed inset-0 bg-black/40 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                        />

                        {/* Sidebar */}
                        <motion.aside
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed inset-y-0 right-0 w-72 bg-neutral-900 space-y-8 text-white z-50 shadow-lg p-6 flex flex-col justify-between"
                        >
                            <div>
                                {/* Header & Close Button */}
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-xl font-semibold">Menu</span>
                                    <button onClick={toggleMenu}>
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                {/* Search Bar */}
                                <div className="mb-4 relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder={t("nav.search")}
                                        className="w-full p-2 pl-10 rounded-full text-sm bg-neutral-800 placeholder-gray-400 text-white"
                                    />
                                </div>

                                {/* Navigation Links */}
                                <nav className="flex flex-col gap-4">
                                    {nav.map((item) => (
                                        <a
                                            key={item.key}
                                            href={item.href}
                                            className="flex items-center justify-between hover:text-primary transition"
                                        >
                                            <span>{t(`nav.${item.key}`)}</span>
                                            <ChevronRight className="w-6 h-6 text-gray-400" />
                                        </a>
                                    ))}

                                    {/* Language Selector tetap ditaruh di bawah */}
                                    <LanguageSelector />
                                </nav>


                                {/* Social Media */}
                                <div className="flex flex-col gap-2 text-lg mt-6">
                                    <h2 className="text-[#595A5B] font-semibold">{t('footer.social')}</h2>
                                    <div className="flex gap-4">
                                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                            <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6 hover:opacity-80 transition" />
                                        </a>
                                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                            <img src="/icons/youtube.svg" alt="Youtube" className="w-6 h-6 hover:opacity-80 transition" />
                                        </a>
                                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                            <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6 hover:opacity-80 transition" />
                                        </a>
                                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                            <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6 hover:opacity-80 transition" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

        </header>
    )
}
