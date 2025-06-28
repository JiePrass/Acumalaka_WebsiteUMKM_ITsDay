/* eslint-disable no-unused-vars */
import { Trans, useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
    const { t } = useTranslation();

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-12 items-center justify-center mx-auto container gap-6 px-6 md:px-0"
        >
            {/* Kiri - Judul */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="flex flex-col h-full justify-between md:col-span-5 text-xl font-bold"
            >
                <h1>{t("about.title1")}</h1>
                <h1>{t("about.title2")}</h1>
            </motion.div>

            {/* Kanan - Headline dan gambar user */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                transition={{ delay: 0.2 }}
                className="md:col-span-7 space-y-16"
            >
                <h2 className="text-2xl md:text-5xl font-semibold text-gray-900 leading-snug">
                    <Trans
                        i18nKey="about.headline"
                        components={{ highlight: <span className="text-primary" /> }}
                    />
                </h2>

                <div className="flex gap-3 items-center">
                    <div className="flex -space-x-3">
                        {[
                            "/images/profile.png",
                            "/images/profile2.png",
                            "/images/profile3.png",
                            "/images/profile4.png",
                        ].map((img, index) => (
                            <motion.img
                                key={index}
                                src={img}
                                alt={`User ${index + 1}`}
                                className="w-10 h-10 rounded-full border-2 border-white object-cover shadow"
                                variants={fadeUp}
                                initial="hidden"
                                animate={isInView ? "show" : "hidden"}
                                transition={{ delay: 0.3 + index * 0.1 }}
                            />
                        ))}
                    </div>

                    <p className="text-sm hidden md:inline text-gray-500 max-w-md sm:ml-3 mt-2 sm:mt-0">
                        {t("about.community")}
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
