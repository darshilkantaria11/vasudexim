'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const ServicesSection = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const industries = [
        {
            id: 1,
            title: "Calcium Chloride for Oil & Gas",
            description: "Used in drilling fluids and completion fluids, Calcium Chloride improves well stability and prevents formation damage in oil and gas exploration.",
            image: "/oil-gas.jpg"
        },
        {
            id: 2,
            title: "Transforming Water Treatment",
            description: "The Crucial Role of Calcium Chloride in removing impurities and balancing water hardness in treatment plants.",
            image: "/water-treatment.jpg"
        },
        {
            id: 3,
            title: "Calcium Chloride for Road Deicing",
            description: "An effective deicing agent, Calcium Chloride ensures safer roads by quickly melting ice and snow even in sub-zero temperatures.",
            image: "/road-deicing.jpg"
        },
        {
            id: 4,
            title: "Enhancing Coatings: Paint Industry",
            description: "Calcium Chloride improves the drying process and film formation in paints, ensuring consistent quality in coatings.",
            image: "/paint.jpg"
        },
        {
            id: 5,
            title: "Advancing Rubber & Plastics",
            description: "Plays a critical role as a desiccant and processing aid in the production of rubber and plastic compounds.",
            image: "/rubber-plastic.jpg"
        },
        {
            id: 6,
            title: "Construction Industry Applications",
            description: "Calcium Chloride enhances concrete setting, improves dust control, and accelerates curing in the construction sector.",
            image: "/construction.jpg"
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const cardHover = {
        scale: 1.03,
        boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.3 }
    };

    const contentHover = {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut",
            delay: 0.05
        }
    };

    return (
        <section className="w-full py-8 lg:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-12 lg:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h1
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Industries We Serve
                    </motion.h1>
                    <motion.h2
                        className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Comprehensive Chemical Solutions to Drive Success Across Various Industries
                    </motion.h2>
                    <motion.p
                        className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Discover how Calcium Chloride empowers various industries with practical and reliable solutions.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {industries.map((industry) => (
                        <motion.div
                            key={industry.id}
                            className="relative overflow-hidden shadow-lg h-[360px] cursor-pointer"
                            variants={item}
                            whileHover={cardHover}
                            onMouseEnter={() => setHoveredCard(industry.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="absolute inset-0 overflow-hidden">
                                <Image
                                    src={industry.image}
                                    alt={industry.title}
                                    title={industry.title}
                                    fill
                                    className="object-cover transition-transform duration-500"
                                    style={{ transform: hoveredCard === industry.id ? 'scale(1.05)' : 'scale(1)' }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-5 lg:p-6 text-white z-10">
                                <motion.h3
                                    className="text-xl lg:text-xl font-bold mb-2"
                                    animate={{
                                        y: hoveredCard === industry.id ? -10 : 0
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    {industry.title}
                                </motion.h3>

                                <motion.div
                                    className="overflow-hidden"
                                    animate={{
                                        height: hoveredCard === industry.id ? "auto" : 0,
                                        opacity: hoveredCard === industry.id ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.p className="text-gray-200 text-sm lg:text-base mb-4" animate={contentHover}>
                                        {industry.description}
                                    </motion.p>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
