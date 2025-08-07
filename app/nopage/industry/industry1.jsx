"use client"
import { motion } from "framer-motion";
import Link from "next/link";
export default function HeroSection() {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="relative min-h-screen text-white overflow-hidden">
            {/* Responsive Background Images */}
            <div className="absolute inset-0">
                {/* Mobile Image */}
                <div className="md:hidden absolute inset-0">
                    <motion.div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: "url('/industry.jpg')" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    />
                </div>

                {/* Desktop Image */}
                <div className="hidden md:block absolute inset-0">
                    <motion.div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: "url('/industry.jpg')" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content */}
            <motion.div
                className="relative z-10 flex flex-col justify-center min-h-screen px-6 lg:px-24"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-3xl">
                    <motion.h1
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                        variants={itemVariants}
                    >
                        <motion.span
                            className="block mt-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.7 }}
                        >
                            Powering Industries with Precision Chemistry
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        className="mt-6 text-lg text-gray-300 max-w-4xl"
                        variants={itemVariants}
                    >
                        Our chemical solutions are trusted across diverse sectors — from agriculture and pharmaceuticals to textiles and water treatment — driving innovation, safety, and performance at every level.
                    </motion.p>

                    <motion.div
                        className="mt-8 flex gap-4 flex-wrap items-center"
                        variants={itemVariants}
                    >
                        <Link
                            href="/contact"
                            className="bg-r1 text-white font-medium px-6 py-3 rounded shadow-md  transition"
                        >
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                Get in Touch →
                            </motion.span>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}