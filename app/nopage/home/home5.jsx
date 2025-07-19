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
    icon: <MdOutlineScience className="text-lime-500 text-3xl" />,
  },
  {
    title: 'Customized Solutions',
    description: 'Our team can tailor products to meet specific industry requirements, ensuring optimal compatibility and efficiency.',
    icon: <FiSettings className="text-lime-500 text-3xl" />,
  },
  {
    title: 'Expert Knowledge',
    description: 'With decades of experience in chemical export, we provide expert guidance and support for all your chemical needs.',
    icon: <MdOutlineSupportAgent className="text-lime-500 text-3xl" />,
  },
  {
    title: 'Global Network',
    description: 'We offer efficient and timely delivery worldwide, ensuring your products arrive safely and on schedule.',
    icon: <BiWorld className="text-lime-500 text-3xl" />,
  },
  {
    title: 'Commitment to Safety',
    description: 'We adhere to stringent safety protocols & international regulations, prioritizing the safety of our products & customers.',
    icon: <FiShield className="text-lime-500 text-3xl" />,
  },
  {
    title: 'Sustainable Practices',
    description: 'We are dedicated to sustainable and eco-conscious manufacturing processes, contributing to a greener future.',
    icon: <BiLeaf className="text-lime-500 text-3xl" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="container mx-auto  py-16 px-4 md:px-6" id="why-choose-us">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block border border-lime-400 text-lime-500 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Empowering Your Industry with<br />Unmatched Chemical Solutions
          </h2>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-center">
        {/* Left Features */}
        <div className="space-y-6">
          {reasons.slice(0, 3).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div>{item.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
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
          className="flex justify-center"
        >
          <div className="relative w-full h-80 sm:h-96 md:h-[420px] rounded shadow-lg overflow-hidden">
            <Image
              src="/Calciumchloridegranules.webp" // Replace with your final image path
              alt="Empella Exports"
              fill
              className="object-cover"
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
              className="flex gap-4"
            >
              <div>{item.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Logos */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center items-center">
        {['msme.png', 'iso.png', 'chemexcil.png', 'aeo.png'].map((logo, i) => (
          <motion.div
            key={logo}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Image src={`/${logo}`} alt={logo} width={60} height={60} className="object-contain" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
