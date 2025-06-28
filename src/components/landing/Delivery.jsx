/* eslint-disable no-unused-vars */
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Delivery() {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section
            ref={sectionRef}
            className="mx-auto container px-6 md:px-0 py-8 flex flex-col items-center gap-8 md:gap-16"
        >
            {/* Judul utama section pengiriman */}
            <motion.h2
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="text-3xl md:text-5xl max-w-4xl font-semibold font-narrow text-center leading-snug text-black"
            >
                {t("delivery.titleStart")}{" "}
                <span className="text-gray-500">{t("delivery.titleEnd")}</span>
            </motion.h2>

            {/* Logo layanan pengiriman */}
            <motion.div
                className="flex flex-wrap justify-center items-center gap-8 md:gap-14"
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.3,
                        },
                    },
                }}
            >
                {[
                    { src: "/icons/jnt.png", alt: "J&T", h: "h-6 md:h-8" },
                    { src: "/icons/jne.png", alt: "JNE", h: "h-8 md:h-12" },
                    { src: "/icons/tiki.png", alt: "Tiki", h: "h-6 md:h-10" },
                    { src: "/icons/sicepat.png", alt: "Sicepat", h: "h-9 md:h-16" },
                    { src: "/icons/wahana.png", alt: "Wahana", h: "h-8 md:h-14" },
                    { src: "/icons/ninja.png", alt: "Ninja", h: "h-10 md:h-16" },
                    { src: "/icons/gosend.png", alt: "Gosend", h: "h-14 md:h-24" },
                    { src: "/icons/grab.png", alt: "Grab", h: "h-14 md:h-24" },
                ].map((item, idx) => (
                    <motion.img
                        key={idx}
                        src={item.src}
                        alt={item.alt}
                        className={item.h}
                        variants={fadeUp}
                    />
                ))}
            </motion.div>
        </section>
    );
}
