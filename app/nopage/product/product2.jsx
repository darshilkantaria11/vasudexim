'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const ProductsSection = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const products = [
        {
            id: 1,
            title: "Calcium Chloride Lumps",
            description: "Commonly used for dust control, concrete setting acceleration, and industrial refrigeration, Calcium Chloride Lumps provide excellent performance in construction and infrastructure projects.",
            image: "/calcium-chloride-lumps.webp",
            category: "Products"
        },
        {
            id: 2,
            title: "Calcium Chloride Powder 74%",
            description: "Ideal for agriculture and general deicing needs, Calcium Chloride Powder 74% helps improve soil quality, reduce dust, and control moisture in various industrial applications.",
            image: "/calcium-chloride-powder-74.webp",
            category: "Products"
        },
        {
            id: 3,
            title: "Calcium Chloride Powder 94%",
            description: "High-purity Calcium Chloride Powder 94% is used in pharmaceuticals, food processing, and specialty chemical manufacturing, ensuring consistent and safe results.",
            image: "/calcium-chloride-powder-94.webp",
            category: "Products"
        },
        {
            id: 4,
            title: "Calcium Chloride Granules",
            description: "Widely used for moisture absorption, deicing, and desiccant applications, Calcium Chloride Granules are known for their easy handling and long-lasting performance.",
            image: "/calcium-chloride-granules.webp",
            category: "Products"
        },
        {
            id: 5,
            title: "Magnesium Chloride Flakes",
            description: "Magnesium Chloride Flakes offer an effective solution for road deicing, dust suppression, and ice melt with reduced environmental impact compared to traditional salts.",
            image: "/magnesium-chloride-flakes.webp",
            category: "Products"
        }
    ];

    const createSlug = (title) =>
        title.toLowerCase()
            .replace(/[^\w\s]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .substring(0, 60);

    const productsByCategory = products.reduce((acc, item) => {
        acc[item.category] = acc[item.category] || [];
        acc[item.category].push(item);
        return acc;
    }, {});

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
                        Our Products
                    </motion.h1>
                    <motion.h2
                        className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        High-Quality Chemical Products for Industry-Specific Needs
                    </motion.h2>
                    <motion.p
                        className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Explore our wide range of Calcium and Magnesium Chloride products tailored for your industry.
                    </motion.p>
                </motion.div>

                {Object.entries(productsByCategory).map(([category, productList]) => (
                    <div key={category} className="mb-16">
                        <motion.div
                            className="flex items-center mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">{category}</h2>
                            <div className="ml-4 flex-grow h-px bg-gray-300"></div>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            {productList.map((product) => (
                                <motion.div
                                    key={product.id}
                                    className="relative overflow-hidden shadow-lg h-[360px] cursor-pointer"
                                    variants={item}
                                    whileHover={cardHover}
                                    onMouseEnter={() => setHoveredCard(product.id)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <div className="absolute inset-0 overflow-hidden">
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            title={product.title}
                                            fill
                                            className="object-cover transition-transform duration-500"
                                            style={{ transform: hoveredCard === product.id ? 'scale(1.05)' : 'scale(1)' }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/10 to-transparent" />
                                    </div>

                                    <div className="absolute bottom-0 left-0 w-full p-5 lg:p-6 text-white z-10">
                                        <motion.h3
                                            className="text-xl lg:text-xl font-bold mb-2"
                                            animate={{
                                                y: hoveredCard === product.id ? -10 : 0
                                            }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                        >
                                            {product.title}
                                        </motion.h3>

                                        <motion.div
                                            className="overflow-hidden"
                                            animate={{
                                                height: hoveredCard === product.id ? "auto" : 0,
                                                opacity: hoveredCard === product.id ? 1 : 0
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <motion.p className="text-white text-sm lg:text-base mb-4" animate={contentHover}>
                                                {product.description}
                                            </motion.p>
                                            <Link href={`/products/${createSlug(product.title)}`} title={`${product.title}`} passHref>
                                                <motion.p
                                                    className="inline-flex items-center gap-1 bg-lime-400 text-gray-900 font-medium px-2 py-2  text-sm lg:text-base"
                                                    whileHover={{ scale: 1.03 }}
                                                    whileTap={{ scale: 0.97 }}
                                                >
                                                    View Details
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-5 lg:w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </motion.p>
                                            </Link>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductsSection;
