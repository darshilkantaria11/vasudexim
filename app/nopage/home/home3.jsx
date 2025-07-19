import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* LEFT TEXT */}
        <div>
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium border border-gray-300 rounded-full">
            Welcome to VASUDEXIM
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Manufacturing And Exporting of High-Quality Chemicals.
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Our commitment to excellence, customer-centric approach, and extensive
            industry expertise make us a trusted partner for businesses worldwide.
            Whether you're looking for standard products or bespoke chemical solutions,
            Vasu D Exim is dedicated to providing exceptional service and support.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 bg-lime-400 text-black font-medium rounded-sm hover:bg-lime-500 transition"
          >
            Explore More &rarr;
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="/Product1.webp"
            alt="Chemical Packaging Bag"
            className=" w-full object-fit h-full"
          />
        </div>
      </div>
    </section>
  );
}
