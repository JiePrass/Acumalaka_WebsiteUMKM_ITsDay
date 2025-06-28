/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
    Menu,
    X,
    Search,
    CircleUserRound,
    Heart,
    ShoppingCart,
    MapPin,
    ChevronRight,
} from "lucide-react";
import { useTranslation, Trans } from "react-i18next";
import LanguageSelector from "../shared/LanguageSelector";
import SearchToggle from "../shared/SearchToggle";

export default function Header() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    // Cegah scroll saat sidebar aktif
    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", isOpen);
    }, [isOpen]);

    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.2 });

    const fadeDown = {
        hidden: { opacity: 0, y: -20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const fadeItem = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
        },
    };

    const nav = [
        { key: "home", href: "#" },
        { key: "batik", href: "#" },
        { key: "store", href: "#" },
        { key: "ai", href: "#" },
        { key: "contact", href: "#" },
        { key: "cart", href: "#" },
        { key: "profile", href: "#" },
    ];

    return (
        <header className="md:border-b pt-4 md:pt-0 z-50 relative">
            {/* Topbar desktop */}
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                variants={fadeDown}
                className="border-b hidden md:block"
            >
                <div className="flex justify-between items-center text-sm py-2 container mx-auto text-gray-600">
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
            </motion.div>

            {/* Main Navigation */}
            <div className="container mx-auto py-3 px-6 md:px-0 flex justify-between items-center">
                {/* Logo - selalu tampil */}
                <div className="flex items-center gap-2">
                    <img
                        src="/images/batikan-logo.png"
                        alt="Logo"
                        className="object-contain w-6 h-6"
                    />
                    <span className="font-bold text-primary text-2xl">Batikan.</span>
                </div>

                {/* Navigation Desktop */}
                <motion.nav
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    variants={fadeDown}
                    className="hidden md:flex items-center gap-6 text-lg font-medium text-gray-700"
                >
                    {nav.slice(0, 5).map((item) => (
                        <a
                            key={item.key}
                            href={item.href}
                            className={item.key === "home" ? "text-primary" : ""}
                        >
                            {t(`nav.${item.key}`)}
                        </a>
                    ))}
                </motion.nav>

                {/* Right Icon (Desktop) */}
                <motion.div
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    variants={fadeDown}
                    className="hidden md:flex items-center gap-4 text-gray-700"
                >
                    <SearchToggle />
                    <CircleUserRound className="w-6 h-6 cursor-pointer" />
                    <Heart className="w-6 h-6 cursor-pointer" />
                    <div className="relative">
                        <ShoppingCart className="w-6 h-6 cursor-pointer" />
                        <span className="absolute -top-1 -right-1 bg-red-600 rounded-full w-2 h-2" />
                    </div>
                </motion.div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Sidebar Mobile */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
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
                            className="fixed inset-y-0 right-0 w-72 bg-neutral-900 text-white z-50 shadow-lg p-6 flex flex-col justify-between"
                        >
                            <motion.div
                                className="space-y-8"
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                variants={{
                                    hidden: {},
                                    show: {
                                        transition: {
                                            staggerChildren: 0.2,
                                            delayChildren: 0.2,
                                        },
                                    },
                                }}
                            >
                                {/* Header */}
                                <motion.div
                                    variants={fadeItem}
                                    className="flex justify-between items-center mb-6"
                                >
                                    <span className="text-xl font-semibold">Menu</span>
                                    <button onClick={toggleMenu}>
                                        <X className="w-6 h-6" />
                                    </button>
                                </motion.div>

                                {/* Search */}
                                <motion.div variants={fadeItem} className="relative mb-4">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder={t("nav.search")}
                                        className="w-full p-2 pl-10 rounded-full text-sm bg-neutral-800 placeholder-gray-400 text-white"
                                    />
                                </motion.div>

                                {/* Mobile Navigation */}
                                <motion.nav variants={fadeItem} className="flex flex-col gap-4">
                                    {nav.map((item) => (
                                        <motion.a
                                            key={item.key}
                                            href={item.href}
                                            variants={fadeItem}
                                            className="flex items-center justify-between hover:text-primary transition"
                                        >
                                            <span>{t(`nav.${item.key}`)}</span>
                                            <ChevronRight className="w-6 h-6 text-gray-400" />
                                        </motion.a>
                                    ))}
                                    <LanguageSelector />
                                </motion.nav>

                                {/* Social Media */}
                                <motion.div variants={fadeItem} className="flex flex-col gap-2 text-lg mt-6">
                                    <h2 className="text-[#595A5B] font-semibold">{t("footer.social")}</h2>
                                    <div className="flex gap-4">
                                        {[
                                            { src: "/icons/facebook.svg", alt: "Facebook", link: "https://facebook.com" },
                                            { src: "/icons/youtube.svg", alt: "Youtube", link: "https://youtube.com" },
                                            { src: "/icons/instagram.svg", alt: "Instagram", link: "https://instagram.com" },
                                            { src: "/icons/twitter.svg", alt: "Twitter", link: "https://twitter.com" },
                                        ].map(({ src, alt, link }, idx) => (
                                            <a key={idx} href={link} target="_blank" rel="noopener noreferrer">
                                                <img src={src} alt={alt} className="w-8 h-8 hover:opacity-80 transition" />
                                            </a>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
