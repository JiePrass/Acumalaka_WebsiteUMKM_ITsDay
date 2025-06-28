/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function SplashScreen() {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                className="flex items-center"
                initial="initial"
                animate="animate"
                variants={containerVariants}
            >
                {/* Logo */}
                <motion.img
                    src="/images/batikan-logo.png"
                    alt="Batikan Logo"
                    className="w-10 h-10 md:w-20 md:h-20"
                    variants={logoVariants}
                />

                {/* Teks Batikan */}
                <motion.h1
                    className="text-3xl md:text-6xl font-bold text-primary ml-4"
                    variants={textVariants}
                >
                    Batikan.
                </motion.h1>
            </motion.div>
        </motion.div>
    );
}

// Logo bergerak sedikit ke kiri (hanya -40px)
const containerVariants = {
    initial: { x: 140 },
    animate: {
        x: -40,
        transition: {
            delay: 1.2,
            duration: 0.8,
            ease: "easeInOut",
        },
    },
};

const logoVariants = {
    initial: { scale: 0 },
    animate: {
        scale: 1,
        transition: {
            delay: 0.5,
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

const textVariants = {
    initial: { opacity: 0, x: -10 },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 2,
            duration: 0.5,
        },
    },
};
