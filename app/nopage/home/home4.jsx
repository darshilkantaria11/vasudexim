'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BasicChemicals() {
  return (
    <section className="bg-white px-4 py-10 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center w-full"
        >
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-full h-[300px] sm:h-[400px] md:h-[500px] rounded overflow-hidden shadow-md">
            <Image 
              src="/calciumchloride94.webp"
              alt="Calcium Chloride Powder"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-900"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 break-words">
            Basic Chemicals
          </h2>

          <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed break-words">
            At Vasud Exim, we provide a comprehensive range of basic chemicals that are essential for various industrial applications. Our portfolio includes high-quality, versatile chemicals that form the backbone of numerous manufacturing processes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800 break-words">
            <ul className="space-y-2 list-none">
              <li><Link href="/products/calcium-chloride-lumps">➤ Calcium chloride lumps</Link></li>
              <li><Link href="/products/calcium-chloride-powder-74">➤ Calcium chloride powder 74%</Link></li>
              <li><Link href="/products/calcium-chloride-powder-94">➤ Calcium chloride powder 94%</Link></li>
              <li><Link href="/products/calcium-chloride-granules">➤ Calcium chloride granules</Link></li>
              <li><Link href="/products/magnesium-chloride-flakes">➤ Magnesium chloride flakes</Link></li>
            </ul>
          </div>

          {/* Quality Badge */}
          <div className="mt-6 flex items-center gap-3">
            <Image 
              src="/basic_icon.png"
              alt="Quality Badge"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-red-600 text-sm font-bold">★★★★★</span>
            <span className="text-sm font-semibold">100% Quality Products</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
