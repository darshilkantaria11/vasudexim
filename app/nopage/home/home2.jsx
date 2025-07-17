"use client";
import { motion } from "framer-motion";
import { Globe, ShieldCheck, Leaf, Rocket } from "lucide-react";

export default function AboutUs() {
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
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const values = [
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Global Network",
            description: "Connecting chemical markets worldwide through strategic partnerships"
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Quality Assurance",
            description: "Rigorous testing protocols for consistent product excellence"
        },
        {
            icon: <Leaf className="w-8 h-8" />,
            title: "Sustainable Practices",
            description: "Prioritizing eco-friendly solutions in every transaction"
        },
        {
            icon: <Rocket className="w-8 h-8" />,
            title: "Innovation Focus",
            description: "Pioneering new approaches in chemical supply chain management"
        }
    ];

    return (
        <section className="bg-white py-24 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Main Image */}
                        <div className="relative aspect-square rounded-2xl overflow-hidden">
                            <img
                                src="/chemicalindustry.jpg"
                                alt="Main Visual"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>

                        {/* Overlapping Image */}
                        <div className="absolute -bottom-6 -right-6 w-2/3 h-48 rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="/calciumchloride.jpg"
                                alt="Secondary Visual"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    </motion.div>


                    {/* Right Column - Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div variants={itemVariants}>
                            <span className="inline-block bg-lime-100 text-lime-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
                                About Us
                            </span>
                            <motion.h2
                                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                Building the Future of <span className="text-lime-500">Chemical Commerce</span>
                            </motion.h2>
                        </motion.div>

                        <motion.p
                            className="text-lg text-gray-600 mb-8"
                            variants={itemVariants}
                        >
                            We're revolutionizing how businesses access industrial chemicals worldwide. Through innovative supply chain solutions and uncompromising quality standards, we enable manufacturers to focus on what they do best.
                        </motion.p>

                        {/* <motion.p 
                            className="text-lg text-gray-600 mb-12"
                            variants={itemVariants}
                        >
                            Our commitment extends beyond transactions - we're building lasting partnerships that drive sustainable growth across industries.
                        </motion.p> */}

                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                            variants={containerVariants}
                        >
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="w-12 h-12 rounded-full bg-lime-100 flex items-center justify-center text-lime-600 mb-4">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}