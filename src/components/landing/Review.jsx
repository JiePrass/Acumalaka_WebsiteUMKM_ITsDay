/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useTranslation, Trans } from 'react-i18next'

export default function Review() {
    const { t } = useTranslation()
    const [current, setCurrent] = useState(0)
    const reviews = t('review.reviews', { returnObjects: true })
    const previewItems = [...reviews.slice(current + 1), ...reviews.slice(0, current)]

    const handlePrev = () => {
        setCurrent(prev => (prev === 0 ? reviews.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setCurrent(prev => (prev === reviews.length - 1 ? 0 : prev + 1))
    }

    return (
        <section className="relative w-full overflow-hidden">
            <div className="container mx-auto px-6 md:px-0">
                <div className="justify-between flex items-center mb-10">
                    <div className="flex gap-4 z-10 p-4">
                        <button onClick={handlePrev} className="p-3 bg-black text-white rounded-full">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={handleNext} className="p-3 bg-black text-white rounded-full">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                    <h2 className='text-end text-xl md:text-3xl font-medium leading-snug'>
                        {t("review.title")}<br />
                        <Trans i18nKey="review.title2" components={{
                            highlight: <span className="text-primary" />,
                        }} />
                    </h2>
                </div>

                <div className="relative flex flex-col md:flex-row items-start gap-8">
                    <div className="flex-1 w-full md:max-w-80 relative z-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4 }}
                                className="rounded-xl w-full md:w-80 h-80 overflow-hidden shadow-md"
                            >
                                <img
                                    src={reviews[current].image}
                                    alt={reviews[current].name}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex-1 max-w-sm flex flex-col gap-2 justify-center z-10 h-80">
                        <Quote className="w-8 h-8 mb-4 text-black" />
                        <p className="text-2xl font-semibold text-black leading-relaxed">
                            {reviews[current].text}
                        </p>
                        <div className="mt-6 text-sm text-gray-600">
                            {reviews[current].name} &nbsp; | &nbsp; {reviews[current].role}
                        </div>
                    </div>
                </div>
                <div className="absolute hidden md:block top-5/8 right-0 -translate-y-1/2 w-[420px] overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex gap-4 pl-6"
                        >
                            {previewItems.map((review, idx) => (
                                <motion.div
                                    key={review.name}
                                    onClick={() => setCurrent((current + 1 + idx) % reviews.length)}
                                    className="cursor-pointer w-64 h-64 rounded-md overflow-hidden border border-gray-300 flex-shrink-0"
                                >
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
