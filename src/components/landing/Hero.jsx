import { ArrowRight } from "lucide-react"
import { useTranslation, Trans } from "react-i18next"

export default function Hero() {
    const { t } = useTranslation()

    return (
        <section className="container mx-auto py-8">
            <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-12 gap-4">
                <div className="relative md:col-span-6 md:row-span-12 rounded-xl overflow-hidden">
                    <img
                        src="images/batikan-hero.png"
                        alt="Batik Jawa Barat"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bg-black/20 inset-0" />
                    <span className="absolute top-8 left-12 border border-white text-white px-4 py-1 rounded-full font-semibold shadow">
                        {t("hero.badge")}
                    </span>
                    <a href="/" className="absolute font-semibold bottom-8 right-12 hover:cursor-pointer bg-white px-4 py-2 rounded-full flex items-center gap-2 shadow hover:bg-gray-100 transition">
                        {t("hero.cta")}
                        <div className="bg-black text-white p-1.5 rounded-full">
                            <ArrowRight className="w-5 h-5 -rotate-45" />
                        </div>
                    </a>
                </div>

                <div className="md:col-span-6 md:row-span-7 bg-card rounded-xl px-6 py-8 flex flex-col justify-center">
                    <h1 className="md:text-6xl font-extrabold leading-snug">
                        {t("hero.titleLine1")}<br />
                        {t("hero.titleLine2")}<br />
                        <Trans
                        i18nKey="hero.titleLine3"
                        components={{
                            highlight: <span className="text-primary" />,
                        }}
                    />
                    </h1>
                    <p className="text-gray-600 mt-4 max-w-md">
                        {t("hero.description")}
                    </p>
                </div>

                <div className="relative md:col-span-3 md:row-span-5 rounded-xl overflow-hidden">
                    <img
                        src="images/batik-megamendung.png"
                        alt="Hashtag Batik Jabar"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                        <span className="text-white font-semibold text-xl">{t("hero.hashtag1")}</span>
                    </div>
                </div>

                <div className="relative md:col-span-3 md:row-span-5 rounded-xl overflow-hidden">
                    <img
                        src="images/batik-jabar.png"
                        alt="Hashtag Jabar Terbaik"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                        <span className="text-white font-semibold text-xl">{t("hero.hashtag2")}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
