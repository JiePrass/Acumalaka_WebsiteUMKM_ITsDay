import { useTranslation } from "react-i18next";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function ProductCard({ product, isHovered, onHover, onLeave }) {
    const { t } = useTranslation();

    return (
        <div className="relative col-span-3 md:col-span-4 rounded-xl transition">
            {product.label && (
                <span className="absolute top-2 md:top-4 font-medium left-2 md:left-4 z-10 bg-white text-black text-xs md:text-sm px-2.5 py-1 md:px-4 md:py-2 rounded-full">
                    {t(`product.label.${product.label}`)}
                </span>
            )}
            {product.discount && (
                <span className="absolute top-2 md:top-4 font-medium left-2 md:left-4 z-10 bg-white text-black text-xs md:text-sm px-2.5 py-1 md:px-4 md:py-2 rounded-full">
                    {t("product.discount")}
                </span>
            )}

            <div
                className="relative flex justify-center bg-card rounded-xl"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
            >
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-4/6 object-cover"
                />

                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 z-20 flex flex-col justify-center items-center gap-2 bg-black/50 rounded-xl text-white"
                        >
                            <button className="bg-white text-black px-2.5 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm hover:cursor-pointer">
                                {t("product.add_to_cart")}
                            </button>
                            <button className="bg-transparent border border-white px-2.5 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm hover:bg-white hover:text-black">
                                {t("product.buy_now")}
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="mt-3 flex flex-col w-full">
                <h2 className="md:text-lg font-semibold">{product.title}</h2>
                <p className="md:text-lg font-semibold text-primary">
                    Rp{product.price.toLocaleString("id-ID")}
                </p>
            </div>
        </div>
    );
}
