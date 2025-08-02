'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';


export default function CalciumChlorideGranulesSection() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.6 },
        }),
    };

    return (
        <section className="px-6 py-12 md:px-12 lg:px-24 space-y-24">
            {/* Section 1 - Image Left, Text Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <motion.div
                    className="w-full"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Image
                        src="/calcium-chloride-Granules.webp" // Replace this later
                        alt="Calcium Chloride Granules"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover"
                    />
                </motion.div>

                {/* Text */}
                <motion.div
                    className="space-y-5"
                    custom={1}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* <p className="text-sm font-semibold text-blue-600">10043-52-4</p> */}
                    <h2 className="text-3xl font-bold">
                        Calcium Chloride Granules
                    </h2>

                    <p className="text-gray-700 leading-relaxed">
                        Our Calcium Chloride Granules are produced in technical grade, suitable for applications in construction, de-icing, and moisture removal. Known for high purity, our granules ensure excellent performance across industries.
                    </p>


                </motion.div>
            </div>

            {/* Section 2 - Text Left, Two Images Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text */}
                <motion.div
                    className="space-y-5"
                    custom={1}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold">Available Packing</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Our packing options are designed to meet diverse industry requirements. Choose from
                        standard 25kg/50kg bags to jumbo bags for bulk handling—ensuring product safety during
                        storage and transport.
                    </p>
                </motion.div>

                {/* Two Images */}
                <motion.div
                    className="grid grid-cols-2 gap-6"
                    custom={1}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col items-center">
                        <Image
                            src="/BAG.png" // Replace this later
                            alt="25kg/50kg Packing"
                            width={300}
                            height={300}
                            className="rounded shadow"
                        />
                        <p className="mt-2 text-sm font-medium text-center">25kg | 50kg</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            src="/bigbag.png" // Replace this later
                            alt="Jumbo Bag"
                            width={300}
                            height={300}
                            className="rounded shadow"
                        />
                        <p className="mt-2 text-sm font-medium text-center">Jumbo Bag</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
