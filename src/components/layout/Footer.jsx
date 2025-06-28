/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { ArrowUp } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function Footer() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <footer
            ref={sectionRef}
            className="bg-neutral-900 text-white py-8 overflow-hidden"
        >
            <motion.div
                className="container mx-auto px-6 md:px-0 flex flex-col md:flex-row md:justify-between md:items-center gap-6"
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
            >
                <img
                    src="images/itsday.png"
                    alt="Logo"
                    className="object-contain w-18 h-auto"
                />

                <div className="hidden md:flex gap-4 flex-wrap">
                    {["home", "batik", "store", "ai", "contact"].map((key) => (
                        <a
                            key={key}
                            href="/#"
                            className="px-4 py-1 border rounded-full whitespace-nowrap hover:bg-white hover:text-black transition-colors"
                        >
                            {t(`nav.${key}`)}
                        </a>
                    ))}
                </div>
            </motion.div>

            <motion.div
                className="container mx-auto px-6 md:px-0 py-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-64"
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
            >
                <div className="flex flex-col gap-6">
                    <h1 className="text-4xl md:text-6xl font-semibold">
                        {t("footer.tagline")}
                    </h1>

                    <div className="flex md:hidden flex-wrap gap-4">
                        {["home", "batik", "store", "ai", "contact"].map((key) => (
                            <a
                                key={key}
                                href="/#"
                                className="px-4 py-1 border rounded-full whitespace-nowrap hover:bg-white hover:text-black transition-colors"
                            >
                                {t(`nav.${key}`)}
                            </a>
                        ))}
                    </div>

                    <p className="text-xs text-[#595A5B] hidden md:flex">
                        &copy; {currentYear} Batikan. {t("footer.rights")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                    <div className="flex flex-col gap-2 text-lg">
                        <h2 className="text-[#595A5B] font-semibold">{t("footer.location")}</h2>
                        <p>Jl. Raya Tajur, Kp. Buntar, Kel. Muara Sari, Kec. Bogor Selatan</p>
                    </div>
                    <div className="flex flex-col gap-2 text-lg">
                        <h2 className="text-[#595A5B] font-semibold">{t("footer.email")}</h2>
                        <p>batikan@gmail.com</p>
                    </div>
                    <div className="flex flex-col gap-2 text-lg">
                        <h2 className="text-[#595A5B] font-semibold">{t("footer.contact")}</h2>
                        <p>+62 838 7963 0647</p>
                        <p>+62 857 7025 3105</p>
                    </div>
                    <div className="flex flex-col gap-2 text-lg">
                        <h2 className="text-[#595A5B] font-semibold">{t("footer.social")}</h2>
                        <div className="flex gap-4">
                            {["facebook", "youtube", "instagram", "twitter"].map((platform) => (
                                <a
                                    key={platform}
                                    href={`https://${platform}.com`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={`/icons/${platform}.svg`}
                                        alt={platform}
                                        className="w-6 h-6 md:w-8 md:h-8 hover:opacity-80 transition"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="container mx-auto px-4 md:px-0"
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
            >
                <div className="flex justify-center items-center">
                    <h1 className="text-white text-[100px] md:text-[350px] mb-8 font-semibold leading-none text-center">
                        Batikan
                    </h1>
                </div>

                <button
                    onClick={scrollToTop}
                    className="w-full rounded-xl border border-gray-700 px-4 md:px-8 py-4 flex items-center justify-between gap-4 bg-neutral-800 text-sm hover:bg-neutral-700 transition"
                >
                    <span className="text-left">
                        {t("footer.scrollLine1")} <br /> {t("footer.scrollLine2")}
                    </span>
                    <div className="bg-white text-black rounded-full p-2">
                        <ArrowUp className="w-4 h-4" />
                    </div>
                </button>
            </motion.div>

            <p className="text-xs text-center text-[#595A5B] md:hidden mt-4">
                &copy; {currentYear} Batikan. {t("footer.rights")}
            </p>
        </footer>
    );
}
