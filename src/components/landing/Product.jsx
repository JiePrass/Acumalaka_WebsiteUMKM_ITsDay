import { useState } from "react";
import { useTranslation } from "react-i18next";
import ProductCard from "../shared/ProductCard";
import FilterTabs from "../shared/FilterTabs";

const allProducts = [
    { id: 1, label: "new", category: "popular", discount: false, image: "/images/model.png", title: "Batik Megamendung", price: 89000 },
    { id: 2, discount: true, category: "best_seller", image: "/images/model.png", title: "Batik Megamendung", price: 89000 },
    { id: 3, discount: true, category: "nearest", image: "/images/model.png", title: "Batik Megamendung", price: 89000 },
    { id: 4, discount: false, category: "all", image: "/images/model.png", title: "Batik Megamendung", price: 89000 },
    { id: 5, discount: false, category: "best_seller", image: "/images/model.png", title: "Batik Megamendung", price: 89000 },
    { id: 6, discount: false, category: "popular", image: "/images/model.png", title: "Batik Megamendung", price: 89000 },
];


export default function Product() {
    const [hovered, setHovered] = useState(null);
    const [filter, setFilter] = useState("all");
    const { t } = useTranslation();

    const filteredProducts =
        filter === "all"
            ? allProducts
            : allProducts.filter((p) => p.category === filter);

    return (
        <section className="container mx-auto px-6 md:px-0">
            <h1 className="text-2xl md:text-5xl font-semibold mb-4">{t("product.title")}</h1>

            <FilterTabs active={filter} onChange={setFilter} />

            <div className="grid grid-cols-6 gap-6 md:grid-cols-12 md:gap-12">
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        isHovered={hovered === product.id}
                        onHover={() => setHovered(product.id)}
                        onLeave={() => setHovered(null)}
                    />
                ))}
            </div>
        </section>
    );
}
