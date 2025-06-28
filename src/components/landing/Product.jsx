/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import ProductCard from "../shared/ProductCard";
import FilterTabs from "../shared/FilterTabs";

// Data produk dummy
const allProducts = [
    {
        id: 1,
        label: "new",
        category: "popular",
        discount: false,
        image: "/images/model-megamendung-biru.png",
        title: "Batik Megamendung",
        price: 89000,
    },
    {
        id: 2,
        discount: true,
        category: "best_seller",
        image: "/images/model-megamendung-coklat.png",
        title: "Batik Megamendung Coklat",
        price: 89000,
    },
    {
        id: 3,
        discount: true,
        category: "nearest",
        image: "/images/model-megamendung-merah.png",
        title: "Batik Megamendung Merah",
        price: 89000,
    },
    {
        id: 4,
        discount: false,
        category: "all",
        image: "/images/model-megamendung-hitam.png",
        title: "Batik Megamendung Hitam",
        price: 89000,
    },
    {
        id: 5,
        discount: false,
        category: "best_seller",
        image: "/images/model-truntum-parang.png",
        title: "Batik Truntum Parang",
        price: 89000,
    },
    {
        id: 6,
        discount: false,
        category: "popular",
        image: "/images/model-kawung-bintang.png",
        title: "Batik Kawung Bintang",
        price: 89000,
    },
];

export default function Product() {
    const { t } = useTranslation();
    const [hovered, setHovered] = useState(null);
    const [filter, setFilter] = useState("all");

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const filteredProducts =
        filter === "all"
            ? allProducts
            : allProducts.filter((p) => p.category === filter);

    return (
        <section ref={ref} className="container mx-auto px-6 md:px-0">
            {/* Judul Section */}
            <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                className="text-2xl md:text-5xl font-semibold mb-4 font-narrow"
            >
                {t("product.title")}
            </motion.h1>

            {/* Tab filter kategori */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                transition={{ delay: 0.2 }}
            >
                <FilterTabs active={filter} onChange={setFilter} />
            </motion.div>

            {/* Grid produk */}
            <motion.div
                className="grid grid-cols-6 gap-6 md:grid-cols-12 md:gap-12 mt-6"
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.4,
                        },
                    },
                }}
            >
                {filteredProducts.map((product) => (
                    <motion.div
                        key={product.id}
                        variants={fadeUp}
                        className="col-span-3 md:col-span-4"
                    >
                        <ProductCard
                            product={product}
                            isHovered={hovered === product.id}
                            onHover={() => setHovered(product.id)}
                            onLeave={() => setHovered(null)}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
