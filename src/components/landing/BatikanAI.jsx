import { useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const motifs = [
    { id: 1, src: "/images/batik-megamendung.png", label: "Megamendung" },
    { id: 2, src: "/images/batik-jabar.png", label: "Jabar" },
];

export default function BatikanAI() {
    const { t } = useTranslation();
    const [image, setImage] = useState("/images/model.png");
    const [motifIndex, setMotifIndex] = useState(0);
    const inputRef = useRef(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const imageURL = URL.createObjectURL(file);
        setImage(imageURL);
    };

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
        <section className="container mx-auto bg-card rounded-xl flex flex-col md:flex-row gap-10 pt-8">
            <div className="flex flex-col gap-6 pt-12 px-12 md:w-1/3 w-full">
                <div>
                    <h1 className="text-6xl font-bold">Batikan AI</h1>
                    <p className="text-gray-500 mt-2">
                        {t("batikanAI.description")}
                    </p>
                </div>

                <div className="relative w-full max-w-xs rounded-xl overflow-hidden bg-white">
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

                <button className="bg-white w-full justify-center flex text-black font-semibold rounded-full py-3 shadow hover:bg-gray-100 transition">
                    {t("batikanAI.generate_button")}
                </button>
            </div>

            {/* TENGAH */}
            <div className="md:w-1/3 w-full order-3 flex justify-center">
                <img
                    src={image}
                    alt="Model Batik"
                    className="w-full h-auto object-cover rounded-md"
                />
            </div>

            {/* KANAN */}
            <div className="md:w-1/3 z-5 pl-6 pb-6 justify-center w-full flex flex-col items-center gap-4">
                <h2 className="text-4xl w-full text-start font-semibold">
                    {t("batikanAI.choose_motif")}
                </h2>

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
                                className="relative w-2/3 h-auto aspect-7/9 rounded-xl overflow-hidden shrink-0"
                            >
                                <img
                                    src={motif.src}
                                    alt={motif.label}
                                    className="w-full h-full object-cover"
                                />
                                {index === 0 && (
                                    <div className="absolute inset-0 m-auto bg-black/40 flex justify-center items-center">
                                        <button className="bg-white text-black font-semibold rounded-full shadow px-4 py-2 hover:bg-gray-100 transition">
                                            {t("batikanAI.select_button")}
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>

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
        </section>
    );
}
