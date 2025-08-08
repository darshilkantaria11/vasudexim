"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import Logo from "../../../public/Logo.png";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-200 text-black pt-16 pb-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
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
                        <p className="text-black mb-6 max-w-xs">
                            Your trusted partner in global chemical trade, delivering quality and reliability since {currentYear}.
                        </p>
                        <div className="flex space-x-4">
                            {[Linkedin, Twitter, Instagram, Facebook].map((Icon, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center hover:bg-r1 transition-colors"
                                    whileHover={{ y: -3 }}
                                    aria-label={`Social media link ${index + 1}`}
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'Industries', href: '/industries' },
                                { name: 'Products', href: '/products' },
                                { name: 'Export', href: '/export' },
                                { name: 'Contact', href: '/contact' }
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Link href={item.href} className="text-black hover:text-r1 transition-colors">
                                        {item.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Products */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700">Our Products</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Calcium chloride lumps", slug: "/products/calcium-chloride-lumps" },
                                { name: "Calcium chloride powder 74 %", slug: "/products/calcium-chloride-powder-74" },
                                { name: "Calcium chloride powder 94 %", slug: "/products/calcium-chloride-powder-94" },
                                { name: "Calcium chloride granules", slug: "/products/calcium-chloride-granules" },
                                { name: "Magnesium chloride flakes", slug: "/products/magnesium-chloride-flakes" },
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Link href={item.slug} className="text-black hover:text-r1 transition-colors">
                                        {item.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <div className="mt-1 mr-3 text-r1">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-medium">Corporate Headquarters</p>
                                    <p className="text-black">123 Vasudexim, Rajkot 360004, India</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="mt-1 mr-3 text-r1">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-medium">Phone</p>
                                    <a href="tel:+919898742743" className="text-black hover:text-r1 transition-colors">
                                        +91 98987 42743
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="mt-1 mr-3 text-r1">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-medium">Email</p>
                                    <a href="mailto:vasudexim@gmail.com" className="text-black hover:text-r1 transition-colors">
                                        vasudexim@gmail.com
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-black text-sm mb-4 md:mb-0">
                        &copy; {currentYear} VASUD EXIM LLP. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
