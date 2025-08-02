"use client"
import { useState, useEffect } from 'react';

const ContactUs = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',  // <-- added
        number: '',
        subject: '',
        message: ''
    });


    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [copied, setCopied] = useState(false);
    const email = "info@vasudexim.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const savedContacts = JSON.parse(localStorage.getItem('contactFormData') || '[]');
        const newContacts = [...savedContacts, formData];
        localStorage.setItem('contactFormData', JSON.stringify(newContacts));

        // Send form data to backend
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSubmitMessage("Thank you for your inquiry! We'll contact you shortly.");
                setFormData({ name: '', email: '', number: '', subject: '', message: '' });
            } else {
                setSubmitMessage("Failed to send message. Please try again later.");
            }
        } catch (err) {
            console.error(err);
            setSubmitMessage("Error occurred. Please try again.");
        }

        setIsSubmitting(false);
    };

    return (
        <>
            <div className="sticky top-0 z-20 backdrop-blur-md bg-black/20 shadow-md p-10 w-full"></div>

            <div className="min-h-screen bg-white py-4 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    {/* Header */}
                    <div className="bg-r1 rounded-xl text-white py-16 px-6 relative overflow-hidden mb-8">
                        {/* Decorative Circles */}
                        <div className="absolute left-[-60px] top-[-60px] w-60 h-60 border-4 border-white/30 rounded-full opacity-20" />
                        <div className="absolute left-[-30px] top-[-30px] w-40 h-40 border-4 border-white/30 rounded-full opacity-20" />
                        <div className="absolute right-[-60px] bottom-[-60px] w-60 h-60 border-4 border-white/30 rounded-full opacity-20" />
                        <div className="absolute right-[-30px] bottom-[-30px] w-40 h-40 border-4 border-white/30 rounded-full opacity-20" />

                        <div className="relative text-center">
                            <button className="bg-white text-r1 px-6 py-2 rounded-full mb-4 shadow-lg hover:bg-gray-100 transition">
                                CONTACT US
                            </button>
                            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse lg:flex-row gap-10">
                        {/* Left: Contact Info */}
                        <div className="flex flex-col rounded-2xl overflow-hidden lg:w-2/5 h-auto">
                            <div className="p-8 bg-white border border-gray-200 rounded-t-3xl">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>

                                <div className="space-y-4">
                                    {/* WhatsApp */}
                                    <a
                                        href="https://wa.me/919898742743?text=Hello%20Vasudexim%2C%20I%20visited%20your%20website%20and%20I'm%20interested%20in%20your%20chemical%20products."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-3 rounded-xl bg-r1/5 hover:bg-r1/10 transition"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className="bg-r1/10 p-2 rounded-full">
                                                <svg className="h-6 w-6 text-r1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-800">Chat on WhatsApp</h3>
                                                <p className="text-gray-600">+91 98987 42743</p>
                                            </div>
                                        </div>
                                    </a>

                                    {/* Email */}
                                    <div className="flex items-center justify-between p-3 rounded-xl bg-r1/5 hover:bg-r1/10 transition">
                                        <a href={`mailto:${email}`} className="flex items-center space-x-4">
                                            <div className="bg-r1/10 p-2 rounded-full">
                                                <svg className="h-6 w-6 text-r1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
                                                <p className="text-gray-600">{email}</p>
                                            </div>
                                        </a>

                                        <button
                                            onClick={handleCopy}
                                            className="text-sm text-r1 hover:text-r1/80 px-3 py-1 bg-white border border-r1/30 rounded-lg"
                                        >
                                            {copied ? "Copied!" : "Copy"}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Company Message */}
                            <div className="p-8 bg-r1 text-white flex flex-col justify-center space-y-4 rounded-b-3xl">
                                <h2 className="text-3xl font-bold">Global Chemical Solutions</h2>
                                <p className="text-lg opacity-90">
                                    Partnering with industries worldwide to deliver premium chemical products and innovative solutions. Let's build a sustainable chemical supply chain together.
                                </p>
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <div className="lg:w-3/5">
                            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">Send Inquiry</h2>
                                <p className="text-gray-600 mb-8">
                                    Interested in our chemical products? Fill out the form and our team will contact you.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">                                    {/* Name Field */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Your Name
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="John Smith"
                                                autoComplete="off"
                                                required
                                            />
                                        </div>
                                    </div>
                                    {/* Email Field */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-r1 focus:border-r1"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                    </div>



                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Number Field */}
                                        <div>
                                            <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
                                                Phone Number
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="tel"
                                                    id="number"
                                                    name="number"
                                                    value={formData.number}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                    placeholder="+1 (555) 123-4567"
                                                    autoComplete="off"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Subject Field */}
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                                Subject
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                    placeholder="Product Inquiry"
                                                    autoComplete="off"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Message Field */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Tell us about your chemical requirements..."
                                            required
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-all ${isSubmitting
                                                ? 'bg-red-300 cursor-not-allowed'
                                                : 'bg-r1 hover:shadow-lg'
                                                }`}
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center">
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </span>
                                            ) : (
                                                'Submit Inquiry'
                                            )}
                                        </button>

                                        {submitMessage && (
                                            <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
                                                {submitMessage}
                                            </div>
                                        )}
                                    </div>
                                </form>
                            </div>

                            {/* Additional Info */}
                            <div className="mt-8 text-center">
                                <p className="text-gray-600">
                                    Our chemical experts typically respond within 1 business day.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;