/* eslint-disable no-unused-vars */
import { ArrowRight } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const { t } = useTranslation();

    // Reference untuk section hero agar tahu kapan masuk viewport
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 }); // amount: 0.3 artinya 30% terlihat baru animasi jalan

    // Animasi varian sederhana
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section ref={ref} className="container mx-auto py-8 px-6 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-12 gap-4">

                {/* Gambar utama */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    className="relative md:col-span-6 md:row-span-12 rounded-xl overflow-hidden"
                >
                    <img
                        src="images/batikan-hero.png"
                        alt="Batik Jawa Barat"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <span className="absolute top-4 md:top-8 left-6 md:left-12 border border-white text-white px-4 py-1 rounded-full font-semibold shadow">
                        {t("hero.badge")}
                    </span>
                    <a
                        href="/"
                        className="absolute bottom-4 md:bottom-8 right-6 md:right-12 bg-white px-4 py-2 rounded-full font-semibold flex items-center gap-2 shadow hover:bg-gray-100 transition"
                    >
                        {t("hero.cta")}
                        <div className="bg-black text-white p-1.5 rounded-full">
                            <ArrowRight className="w-5 h-5 -rotate-45" />
                        </div>
                    </a>
                </motion.div>

                {/* Judul & deskripsi */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    transition={{ delay: 0.2 }}
                    className="md:col-span-6 md:row-span-7 bg-card rounded-xl px-8 py-8 flex flex-col justify-center"
                >
                    <h1 className="text-[32px] md:text-[80px] font-extrabold leading-[1.0] font-narrow">
                        {t("hero.titleLine1")}<br />
                        {t("hero.titleLine2")}<br />
                        <Trans
                            i18nKey="hero.titleLine3"
                            components={{ highlight: <span className="text-primary" /> }}
                        />
                    </h1>
                    <p className="text-gray-600 mt-4 max-w-md">
                        {t("hero.description")}
                    </p>
                </motion.div>

                {/* Hashtag 1 */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    transition={{ delay: 0.3 }}
                    className="relative md:col-span-3 md:row-span-5 rounded-xl overflow-hidden"
                >
                    <img
                        src="images/batik-megamendung-biru.png"
                        alt="Hashtag Batik Jabar"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                        <span className="text-white font-semibold text-xl">
                            {t("hero.hashtag1")}
                        </span>
                    </div>
                </motion.div>

                {/* Hashtag 2 */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    transition={{ delay: 0.4 }}
                    className="relative md:col-span-3 md:row-span-5 rounded-xl overflow-hidden"
                >
                    <img
                        src="images/batik-truntum-parang.png"
                        alt="Hashtag Jabar Terbaik"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                        <span className="text-white font-semibold text-xl">
                            {t("hero.hashtag2")}
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
