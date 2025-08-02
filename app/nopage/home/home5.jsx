'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BiLeaf, BiWorld } from 'react-icons/bi';
import { MdOutlineScience, MdOutlineSupportAgent } from 'react-icons/md';
import { FiShield, FiSettings } from 'react-icons/fi';

const reasons = [
  {
    title: 'High Purity Standards',
    description: 'We ensure the highest purity and consistency in all our chemical products, guaranteeing reliable performance.',
    icon: <MdOutlineScience className="text-r1 text-3xl shrink-0" />,
  },
  {
    title: 'Customized Solutions',
    description: 'Our team can tailor products to meet specific industry requirements, ensuring optimal compatibility and efficiency.',
    icon: <FiSettings className="text-r1 text-3xl shrink-0" />,
  },
  {
    title: 'Expert Knowledge',
    description: 'With decades of experience in chemical export, we provide expert guidance and support for all your chemical needs.',
    icon: <MdOutlineSupportAgent className="text-r1 text-3xl shrink-0" />,
  },
  {
    title: 'Global Network',
    description: 'We offer efficient and timely delivery worldwide, ensuring your products arrive safely and on schedule.',
    icon: <BiWorld className="text-r1 text-3xl shrink-0" />,
  },
  {
    title: 'Commitment to Safety',
    description: 'We adhere to stringent safety protocols & international regulations, prioritizing the safety of our products & customers.',
    icon: <FiShield className="text-r1 text-3xl shrink-0" />,
  },
  {
    title: 'Sustainable Practices',
    description: 'We are dedicated to sustainable and eco-conscious manufacturing processes, contributing to a greener future.',
    icon: <BiLeaf className="text-r1 text-3xl shrink-0" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full overflow-hidden py-16 px-4 sm:px-6" id="why-choose-us">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block border border-r1 text-r1 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
            Empowering Your Industry with<br />Unmatched Chemical Solutions
          </h2>
        </motion.div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto items-start">
        {/* Left Features */}
        <div className="space-y-6">
          {reasons.slice(0, 3).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 items-start"
            >
              <div>{item.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full aspect-[4/5] relative mx-auto max-w-sm sm:max-w-md lg:max-w-full"
        >
          <div className="w-full h-full relative rounded shadow-lg overflow-hidden">
            <Image
              src="/Calciumchloridegranules.webp"
              alt="Empella Exports"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </motion.div>

        {/* Right Features */}
        <div className="space-y-6">
          {reasons.slice(3).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 items-start"
            >
              <div>{item.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Logos */}
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center items-center max-w-5xl mx-auto px-4">
        {['msme.png', 'iso.png', 'chemexcil.png', 'aeo.png'].map((logo, i) => (
          <motion.div
            key={logo}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={`/${logo}`}
              alt={logo}
              width={60}
              height={60}
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
