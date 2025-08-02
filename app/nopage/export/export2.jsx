'use client';

import { motion } from 'framer-motion';

export default function GlobalNetworkSection() {
  return (
    <section className="w-full bg-white px-4 md:px-10 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          From India to the World: Precision and Excellence in Every Export
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto"
        >
          At Vasudexim, we are dedicated to delivering premium solutions to clients around the globe.
          Our robust export operations are designed to provide seamless access to high-quality products,
          ensuring businesses worldwide benefit from our expertise and precision.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12"
      >
        <img
          src="/map.png" // 🔁 Replace this with your own image path
          alt="Global Export Map"
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </section>
  );
}
