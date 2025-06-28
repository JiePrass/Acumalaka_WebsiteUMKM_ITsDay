/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
    const { t } = useTranslation();

    const [form, setForm] = useState({
        nama: "",
        email: "",
        subjek: "",
        pesan: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleKirim = () => {
        const intro = t("contact.whatsapp.intro");
        const labelNama = t("contact.whatsapp.name");
        const labelEmail = t("contact.whatsapp.email");
        const labelSubjek = t("contact.whatsapp.subject");
        const labelPesan = t("contact.whatsapp.message");

        const pesanWA = `${intro}\n\n${labelNama}: ${form.nama}\n${labelEmail}: ${form.email}\n${labelSubjek}: ${form.subjek}\n${labelPesan}: ${form.pesan}`;
        const url = `https://wa.me/6285770253105?text=${encodeURIComponent(pesanWA)}`;
        window.open(url, "_blank");
    };

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section
            ref={sectionRef}
            className="container mx-auto px-6 md:px-0 py-12 flex flex-col md:flex-row items-center gap-16"
            id="contact"
        >
            {/* Form Kontak */}
            <motion.div
                className="md:w-1/2 w-full gap-4 order-2 md:order-1"
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
            >
                <h2 className="text-7xl font-bold mb-4">{t("contact.title")}</h2>
                <p className="text-gray-600 mb-8 max-w-md">{t("contact.description")}</p>

                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="nama"
                        placeholder={t("contact.form.name")}
                        value={form.nama}
                        onChange={handleChange}
                        className="border-b border-gray-300 focus:outline-none py-2"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder={t("contact.form.email")}
                        value={form.email}
                        onChange={handleChange}
                        className="border-b border-gray-300 focus:outline-none py-2"
                    />
                    <input
                        type="text"
                        name="subjek"
                        placeholder={t("contact.form.subject")}
                        value={form.subjek}
                        onChange={handleChange}
                        className="border-b border-gray-300 focus:outline-none py-2"
                    />
                    <textarea
                        name="pesan"
                        placeholder={t("contact.form.message")}
                        rows="4"
                        value={form.pesan}
                        onChange={handleChange}
                        className="border-b border-gray-300 focus:outline-none py-2 mb-4 resize-none"
                    />

                    <button
                        onClick={handleKirim}
                        className="bg-card text-black px-6 py-3 rounded-full w-max font-semibold flex items-center gap-2 hover:bg-gray-200 transition"
                    >
                        {t("contact.form.button")}
                        <span className="bg-black text-white rounded-full p-1 -rotate-45">
                            <ArrowRight size={16} />
                        </span>
                    </button>
                </div>
            </motion.div>

            {/* Gambar */}
            <motion.div
                className="flex w-full md:w-1/2 md:order-2 order-1"
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
            >
                <img
                    src="/images/pengrajin.png"
                    alt="Pengrajin Batik"
                    className="rounded-xl max-h-screen w-full h-auto aspect-1/1 md:aspect-auto object-cover"
                />
            </motion.div>
        </section>
    );
}
