/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

export default function SearchToggle() {
    const [showInput, setShowInput] = useState(false);
    const containerRef = useRef(null);

    const toggleInput = () => {
        setShowInput((prev) => !prev);
    };

    // Tutup input ketika klik diluar konten
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target)
            ) {
                setShowInput(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative flex items-center"
        >
            <motion.div
                onClick={toggleInput}
                className="cursor-pointer z-10"
                initial={false}
                animate={{ x: showInput ? -168 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
                <Search
                    className={`w-6 h-6 ${
                        showInput ? "text-gray-400" : "text-gray-700"
                    }`}
                />
            </motion.div>

            <AnimatePresence>
                {showInput && (
                    <motion.input
                        key="search-input"
                        type="text"
                        placeholder="Search..."
                        className="py-1.5 pl-10 absolute right-0 rounded-full border border-gray-300 shadow-sm text-sm outline-none"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "200px" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ type: "tween", duration: 0.3 }}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
