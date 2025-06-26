import { useTranslation } from "react-i18next";

export default function FilterTabs({ active, onChange }) {
    const { t } = useTranslation();
    const tabs = [
        { key: "all", label: t("product.filter.all") },
        { key: "best_seller", label: t("product.filter.best_seller") },
        { key: "popular", label: t("product.filter.popular") },
        { key: "nearest", label: t("product.filter.nearest") },
    ];

    return (
        <div className="flex flex-wrap gap-3 mb-6">
            {tabs.map((tab) => (
                <button
                    key={tab.key}
                    className={`px-4 py-1.5 border rounded-full transition ${active === tab.key ? "bg-black text-white" : "hover:bg-black hover:text-white"
                        }`}
                    onClick={() => onChange(tab.key)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}
