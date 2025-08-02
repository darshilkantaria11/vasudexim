"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section className="relative h-[32rem] lg:h-[32rem] overflow-hidden text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: "url('/calcium-chloride-powder-94.webp')" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    role="img"
                    aria-label="Calcium Chloride Powder"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" />
            </div>

            {/* Hero Content */}
            <motion.div
                className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6 sm:px-10 lg:px-24"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl mx-auto"
                    variants={itemVariants}
                >
                    <motion.span
                        className="block"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                    >
                        Calcium Chloride Powder 94% for Industrial & Commercial Use
                    </motion.span>
                </motion.h1>
            </motion.div>
        </section>
    );
}
