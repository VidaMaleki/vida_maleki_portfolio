"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full pb-10 pt-10 bg-slate-800 text-center text-gray-400">
      <div className="flex justify-center space-x-6 mb-4">
        {/* GitHub */}
        <a
          href="https://github.com/your-github" // <-- replace with your real GitHub
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400 transition-colors"
        >
          <FaGithub size={24} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/your-linkedin" // <-- replace with your real LinkedIn
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400 transition-colors"
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm">
        © {new Date().getFullYear()} Vida Maleki. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
