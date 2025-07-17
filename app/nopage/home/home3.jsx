"use client";
import { motion } from "framer-motion";
import { Target, Rocket, Globe, Leaf } from "lucide-react";

export default function VisionMission() {
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

    return (
        <section className="bg-white py-24 px-6 lg:px-8 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-lime-100 opacity-30 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-lime-100 opacity-20 blur-3xl"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section header */}
                <motion.div 
                    className="text-center max-w-3xl mx-auto mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block bg-lime-100 text-lime-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
                        Our Purpose
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Shaping the Future of <span className="text-lime-500">Chemical Commerce</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        We're driven by a commitment to transform how businesses access and utilize industrial chemicals worldwide.
                    </p>
                </motion.div>

                {/* Main content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Vision Column */}
                    <motion.div 
                        className="bg-gradient-to-br from-white to-lime-50 rounded-3xl p-8 shadow-xl border border-gray-100"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-start gap-5 mb-8">
                            <div className="w-14 h-14 rounded-2xl bg-lime-100 flex items-center justify-center text-lime-600 flex-shrink-0">
                                <Target className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Vision</h3>
                                <div className="w-20 h-1 bg-lime-400 rounded-full"></div>
                            </div>
                        </div>
                        
                        <motion.div 
                            className="space-y-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.p className="text-lg text-gray-600" variants={itemVariants}>
                                To become the most trusted global platform for chemical commerce, where innovation meets reliability to solve industrial challenges.
                            </motion.p>
                            
                            <motion.div className="mt-8" variants={itemVariants}>
                                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                    <Rocket className="w-5 h-5 text-lime-500" />
                                    Future Aspirations
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="w-6 h-6 rounded-full bg-lime-100 flex items-center justify-center text-lime-600 text-sm mt-1 mr-3 flex-shrink-0">1</span>
                                        <span className="text-gray-600">Pioneer AI-driven solutions for predictive chemical sourcing</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-6 h-6 rounded-full bg-lime-100 flex items-center justify-center text-lime-600 text-sm mt-1 mr-3 flex-shrink-0">2</span>
                                        <span className="text-gray-600">Establish a zero-carbon supply chain by 2030</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-6 h-6 rounded-full bg-lime-100 flex items-center justify-center text-lime-600 text-sm mt-1 mr-3 flex-shrink-0">3</span>
                                        <span className="text-gray-600">Develop next-generation sustainable chemical alternatives</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Mission Column */}
                    <motion.div 
                        className="bg-gradient-to-br from-white to-lime-50 rounded-3xl p-8 shadow-xl border border-gray-100"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="flex items-start gap-5 mb-8">
                            <div className="w-14 h-14 rounded-2xl bg-lime-100 flex items-center justify-center text-lime-600 flex-shrink-0">
                                <Globe className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h3>
                                <div className="w-20 h-1 bg-lime-400 rounded-full"></div>
                            </div>
                        </div>
                        
                        <motion.div 
                            className="space-y-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.p className="text-lg text-gray-600" variants={itemVariants}>
                                To empower industries worldwide with seamless access to high-quality chemicals through innovative, sustainable, and transparent supply chain solutions.
                            </motion.p>
                            
                            <motion.div className="mt-8" variants={itemVariants}>
                                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                    <Leaf className="w-5 h-5 text-lime-500" />
                                    Core Commitments
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-lime-50 p-4 rounded-xl">
                                        <h5 className="font-medium text-gray-900 mb-1">Reliability</h5>
                                        <p className="text-gray-600 text-sm">Consistent quality and on-time delivery</p>
                                    </div>
                                    <div className="bg-lime-50 p-4 rounded-xl">
                                        <h5 className="font-medium text-gray-900 mb-1">Innovation</h5>
                                        <p className="text-gray-600 text-sm">Continuous improvement in our processes</p>
                                    </div>
                                    <div className="bg-lime-50 p-4 rounded-xl">
                                        <h5 className="font-medium text-gray-900 mb-1">Sustainability</h5>
                                        <p className="text-gray-600 text-sm">Eco-friendly solutions at every step</p>
                                    </div>
                                    <div className="bg-lime-50 p-4 rounded-xl">
                                        <h5 className="font-medium text-gray-900 mb-1">Transparency</h5>
                                        <p className="text-gray-600 text-sm">Open communication and traceability</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Stats section */}
                <motion.div 
                    className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="bg-gradient-to-br from-lime-50 to-white p-6 rounded-2xl text-center border border-gray-100 shadow-sm">
                        <div className="text-3xl md:text-4xl font-bold text-lime-600 mb-2">50+</div>
                        <div className="text-gray-600">Chemical Products</div>
                    </div>
                    <div className="bg-gradient-to-br from-lime-50 to-white p-6 rounded-2xl text-center border border-gray-100 shadow-sm">
                        <div className="text-3xl md:text-4xl font-bold text-lime-600 mb-2">20+</div>
                        <div className="text-gray-600">Countries Served</div>
                    </div>
                    <div className="bg-gradient-to-br from-lime-50 to-white p-6 rounded-2xl text-center border border-gray-100 shadow-sm">
                        <div className="text-3xl md:text-4xl font-bold text-lime-600 mb-2">99%</div>
                        <div className="text-gray-600">Quality Assurance</div>
                    </div>
                    <div className="bg-gradient-to-br from-lime-50 to-white p-6 rounded-2xl text-center border border-gray-100 shadow-sm">
                        <div className="text-3xl md:text-4xl font-bold text-lime-600 mb-2">24/7</div>
                        <div className="text-gray-600">Support</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}