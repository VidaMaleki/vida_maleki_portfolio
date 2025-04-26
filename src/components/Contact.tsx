"use client";

import { FormEvent } from "react";
import { toast } from "react-hot-toast";
import { SiMinutemailer } from "react-icons/si"; // or use FaEnvelopesBulk

const Contact = () => {
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const formDataObj = Object.fromEntries(formData);
        const formBody = new URLSearchParams(formDataObj as Record<string, string>).toString();

        try {
            await fetch(
                "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeSwogtUnE5yKHEEo52AC_VOnVQ25txYV_Lmw2NXvCsL4sB4g/formResponse",
                {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: formBody,
                }
            );

            toast.success("Thank you! Your message has been sent 🎉");
            form.reset();
        } catch (error) {
            console.error("Form submission error:", error);
            toast.error("Oops! Something went wrong. Please try again.");
        }
    };

    return (
        <section
            id="contact"
            className="w-full py-20 px-6 bg-slate-800 text-center"
        >
            <h2 className="text-4xl font-bold mb-6 text-white">Have Some Questions?</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-12">
                Feel free to reach out! I woud love to hear from you.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto gap-20">
                {/* Left Side: Big Icon */}
                <div className="flex justify-center">
                    <SiMinutemailer
                        size={160}
                        className="text-indigo-400 hover:text-indigo-600 transition-colors duration-300"
                    />
                </div>

                {/* Right Side: Form */}
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md flex flex-col gap-6"
                >
                    <input
                        type="email"
                        name="emailAddress"
                        required
                        placeholder="Your Email"
                        className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    <input
                        type="text"
                        name="entry.1770478706"
                        required
                        placeholder="Full Name"
                        className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    <textarea
                        name="entry.211621177"
                        required
                        rows={4}
                        placeholder="Your Message..."
                        className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />

                    <button
                        type="submit"
                        className="w-full py-3 rounded-md font-semibold text-white bg-gradient-to-r  bg-indigo-400 hover:from-indigo-600 hover:to-blue-600 transition-all duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
