/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

// Data motif batik
const motifs = [
    {
        id: 1,
        src: "/images/batik-megamendung-biru.png",
        label: "Megamendung",
        modelSrc: "/images/model-megamendung-biru.png",
    },
    {
        id: 2,
        src: "/images/batik-truntum-parang.png",
        label: "Truntum Parang",
        modelSrc: "/images/model-truntum-parang.png",
    },
    {
        id: 3,
        src: "/images/batik-megamendung-hitam.png",
        label: "Megamendung Hitam",
        modelSrc: "/images/model-megamendung-hitam.png",
    },
    {
        id: 4,
        src: "/images/batik-megamendung-merah.png",
        label: "Megamendung Hitam",
        modelSrc: "/images/model-megamendung-merah.png",
    },
];

export default function BatikanAI() {
    const { t } = useTranslation();
    const [image, setImage] = useState(motifs[0].modelSrc);
    const [motifIndex, setMotifIndex] = useState(0);
    const inputRef = useRef(null);

    // Upload gambar custom dari user
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const imageURL = URL.createObjectURL(file);
        setImage(imageURL);
    };

    // Ganti model sesuai motif yang dipilih
    const handleSelectMotif = (modelSrc) => {
        setImage(modelSrc);
    };

    // Navigasi carousel
    const handlePrev = () => {
        setMotifIndex((prev) => (prev - 1 + motifs.length) % motifs.length);
    };

    const handleNext = () => {
        setMotifIndex((prev) => (prev + 1) % motifs.length);
    };

    const visibleMotifs = [
        motifs[motifIndex % motifs.length],
        motifs[(motifIndex + 1) % motifs.length],
    ];

    return (
        <section className="bg-card">
            <div className="container mx-auto flex flex-col md:flex-row gap-10 pt-8">
                {/* Kolom kiri */}
                <div className="flex flex-col gap-6 pt-12 order-1 px-6 md:px-12 md:w-1/3 w-full">
                    <div>
                        <h1 className="text-6xl font-bold font-narrow">Batikan AI</h1>
                        <p className="text-gray-500 mt-2">{t("batikanAI.description")}</p>
                    </div>

                    {/* Upload Preview */}
                    <div className="relative w-full md:max-w-xs rounded-xl overflow-hidden bg-white">
                        <div className="absolute inset-0 z-10 bg-black/40" />
                        <img
                            src={image}
                            alt="Preview Upload"
                            className="w-full h-48 object-cover object-top"
                        />
                        <button
                            onClick={() => inputRef.current.click()}
                            className="absolute inset-0 z-20 m-auto h-10 w-48 bg-white text-black font-semibold rounded-full shadow hover:bg-gray-100 transition"
                        >
                            {t("batikanAI.upload_button")}
                        </button>
                        <input
                            type="file"
                            accept="image/*"
                            ref={inputRef}
                            onChange={handleImageUpload}
                            className="hidden"
                        />
                    </div>

                    {/* Tombol Generate */}
                    <button className="bg-white w-full flex justify-center text-black font-semibold rounded-full py-3 shadow hover:bg-gray-100 transition">
                        {t("batikanAI.generate_button")}
                    </button>
                </div>

                {/* Kolom Tengah */}
                <div className="md:w-1/3 w-full order-3 md:order-2 flex justify-center">
                    <img
                        src={image}
                        alt="Model Batik"
                        className="w-full h-auto object-cover rounded-md"
                    />
                </div>

                {/* Kolom Kanan */}
                <div className="md:w-1/3 w-full order-2 md:order-3 pl-6 pb-6 md:pt-18 flex flex-col items-center gap-4 z-5">
                    <h2 className="text-5xl w-full text-start font-semibold font-narrow">
                        {t("batikanAI.choose_motif")}
                    </h2>

                    {/* Carousel Motif */}
                    <div className="w-full overflow-hidden">
                        <motion.div
                            className="flex gap-4"
                            key={motifIndex}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {visibleMotifs.map((motif, index) => (
                                <div
                                    key={motif.id}
                                    className="relative w-2/3 aspect-7/9 rounded-xl overflow-hidden shrink-0"
                                >
                                    <img
                                        src={motif.src}
                                        alt={motif.label}
                                        className="w-full h-full object-cover"
                                    />
                                    {index === 0 && (
                                        <div className="absolute inset-0 bg-black/40 flex justify-center items-center">
                                            <button
                                                onClick={() => handleSelectMotif(motif.modelSrc)}
                                                className="bg-white text-black font-semibold rounded-full shadow px-4 py-2 hover:bg-gray-100 transition"
                                            >
                                                {t("batikanAI.select_button")}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Navigasi */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handlePrev}
                            className="p-3 bg-black text-white rounded-full"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="p-3 bg-black text-white rounded-full"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
