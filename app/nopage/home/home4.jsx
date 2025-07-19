'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BasicChemicals() {
  return (
    <section className="bg-white px-4 py-10 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded overflow-hidden shadow-md">
            <Image 
              src="/calciumchloride94.webp" // replace with your image path
              alt="Chemical Powder"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Basic Chemicals
          </h2>
          <p className="text-gray-700 mb-6 text-sm md:text-base">
            At Empella Export, we provide a comprehensive range of basic chemicals that are essential for various industrial applications. Our portfolio includes high-quality, versatile chemicals that form the backbone of numerous manufacturing processes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800">
            <ul className="space-y-2 list-none">
              <li>➤ Calcium chloride lumps </li>
              <li>➤ Calcium chloride powder 74%</li>
              <li>➤ Calcium chloride powder 94%</li>
              <li>➤ Calcium chloride granules</li>
              <li>➤ Magnesium chloride flakes</li>
              <li>➤ Ammonium Sulphate Powder</li>
            </ul>
        
          </div>

          {/* Quality Badge */}
          <div className="mt-6 flex items-center gap-3">
            <Image 
              src="/basic_icon.png" // replace with your actual icon
              alt="Icon"
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
