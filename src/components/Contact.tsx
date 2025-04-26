"use client";

import { FormEvent } from "react";
import { toast } from "react-hot-toast";

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
    <section id="contact" className="w-full py-20 pb-10 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10 text-white">Contact Me</h2>
      <p className="max-w-2xl mx-auto text-gray-400 mb-10">
      Feel free to reach out! I&apos;d love to hear from you.
      </p>

      <div className="max-w-2xl mx-auto w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-gray-700 p-8 rounded-lg shadow-lg"
        >
          <div className="flex flex-col items-start w-full">
            <label htmlFor="email" className="text-sm text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="emailAddress"
              id="email"
              required
              className="w-full p-3 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your email"
            />
          </div>

          <div className="flex flex-col items-start w-full">
            <label htmlFor="name" className="text-sm text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="entry.1770478706"
              id="name"
              required
              className="w-full p-3 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Full Name"
            />
          </div>

          <div className="flex flex-col items-start w-full">
            <label htmlFor="message" className="text-sm text-gray-300 mb-1">
              Message
            </label>
            <textarea
              name="entry.211621177"
              id="message"
              required
              rows={5}
              className="w-full p-3 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
