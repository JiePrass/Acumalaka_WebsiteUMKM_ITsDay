import { useTranslation } from "react-i18next";

export default function Delivery() {
    const { t } = useTranslation();

    return (
        <section className="mx-auto container px-6 md:px-0 py-8 flex flex-col items-center gap-8 md:gap-16">
            {/* Judul utama section pengiriman */}
            <h2 className="text-3xl md:text-5xl max-w-4xl font-semibold font-narrow text-center leading-snug text-black">
                {t("delivery.titleStart")}{" "}
                <span className="text-gray-500">{t("delivery.titleEnd")}</span>
            </h2>

            {/* Logo layanan pengiriman */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
                <img src="/icons/jnt.png" alt="J&T" className="h-6 md:h-8" />
                <img src="/icons/jne.png" alt="JNE" className="h-8 md:h-12" />
                <img src="/icons/tiki.png" alt="Tiki" className="h-6 md:h-10" />
                <img src="/icons/sicepat.png" alt="Sicepat" className="h-9 md:h-16" />
                <img src="/icons/wahana.png" alt="Wahana" className="h-8 md:h-14" />
                <img src="/icons/ninja.png" alt="Ninja.com" className="h-10 md:h-16" />
                <img src="/icons/gosend.png" alt="Gosend" className="h-14 md:h-24" />
                <img src="/icons/grab.png" alt="Grab" className="h-14 md:h-24" />
            </div>
        </section>
    );
}
