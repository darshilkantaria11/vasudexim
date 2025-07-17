"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Logo from "../../../public/Logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        { name: 'Industries', href: '/industries', title: 'Industries We Serve' },
        { name: 'Products', href: '/products', title: 'Our Chemical Products' },
        { name: 'Clients & Affiliations', href: '/clients', title: 'Our Trusted Clients & Global Network' },
        { name: 'Contact', href: '/contact-us', title: 'Get in Touch with Vasudexim' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 740);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-md bg-white/30 shadow-md" : "bg-transparent"}`}>

            <div className="container mx-auto">
                <div className="flex justify-between items-center h-16 lg:h-20 px-2 lg:px-0">
                    {/* Logo */}
                    <Link href="/" title="Vasudexim Chemical Trading - Home">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative w-[80px] lg:w-[100px] h-[50px] lg:h-[60px] cursor-pointer"
                        >
                            <Image
                                src={Logo}
                                alt="Vasudexim Logo"
                                fill
                                className="object-contain"
                                priority
                                title="Vasudexim - Global Chemical Traders"
                            />
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav aria-label="Primary Navigation" className="hidden lg:flex items-center">
                        <motion.ul
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex space-x-10"
                        >
                            {navItems.map((item) => (
                                <motion.li key={item.name} variants={itemVariants}>
                                    <motion.div whileHover={{ scale: 1.1 }} className="inline-block">
                                        <Link
                                            href={item.href}
                                            title={item.title}
                                            className={`text-md transition-colors ${isScrolled ? "text-black" : "text-white"}`}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ x: 20 }}
                            animate={{ x: 0 }}
                            className="ml-8 flex items-center"
                        >
                            <Link
                                href="/get-quote"
                                title="Request a Chemical Quote from Vasudexim"
                                className="shine-button bg-lime-400 text-black font-bold  border border-lime-400 px-4 font-medium py-3 hover:scale-105 transition-all text-md shadow-lg relative z-10"
                            >
                                Request a Quote →
                            </Link>
                        </motion.div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <motion.div
                            initial={{ x: -20 }}
                            animate={{ x: 0 }}
                            className="ml-4 flex items-center lg:hidden"
                        >
                            <Link
                                href="/get-quote"
                                title="Request a Quote"
                                className="shine-button bg-lime-400 text-black   border border-lime-400 px-3 py-2 font-medium text-sm shadow-md transition-all"
                            >
                                Request a Quote →
                            </Link>
                        </motion.div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-lime-400 focus:outline-none p-2"
                            aria-label={isOpen ? "Close Menu" : "Open Menu"}
                        >
                            {isOpen ? (
                                <XMarkIcon className="h-8 w-8" />
                            ) : (
                                <Bars3Icon className="h-8 w-8" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg"
                        aria-label="Mobile Navigation"
                    >
                        <div className="pt-2 pb-4 space-y-4 px-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    title={item.title}
                                    onClick={() => setIsOpen(false)}
                                    className="border-b block text-lime-400 hover:text-blue-600 px-4 py-3 font-medium hover:bg-gray-50 transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/get-quote"
                                title="Request a Quote from Vasudexim"
                                className="shine-button bg-lime-400 text-white hover:bg-white hover:text-lime-400 border border-lime-400 block text-center px-6 py-3 transition-colors font-semibold shadow-md"
                            >
                                Request a Quote →
                            </Link>
                        </div>
                    </motion.nav>
                )}
            </div>
        </header>
    );
};

export default Navbar;
