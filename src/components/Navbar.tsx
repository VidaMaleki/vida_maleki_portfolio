"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import Link from "next/link"
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [, startTransition] = useTransition();
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinkStyle =
        "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition duration-300 ease-in-out";

    const handleNavClick = (hash: string) => {
        if (pathname !== "/") {
            startTransition(() => {
                router.push("/");
            });

            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 300);
        } else {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        setMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 bg-slate-800 shadow-xl/20">
            <nav className="w-full flex justify-between items-center mx-auto px-4 sm:px-10 h-16">
                {/* Logo */}
                <div className="flex justify-start items-center w-1/3">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/vg.svg"
                            alt="Vida Logo"
                            width={80}
                            height={40}
                            className="object-contain"
                        />
                    </Link>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex justify-end items-center w-2/3 space-x-6">
                    <button onClick={() => handleNavClick("#about")} className={navLinkStyle}>
                        About
                    </button>
                    <button onClick={() => handleNavClick("#skills")} className={navLinkStyle}>
                        Skills
                    </button>
                    <button onClick={() => handleNavClick("#experience")} className={navLinkStyle}>
                        Experiences
                    </button>
                    <button onClick={() => handleNavClick("#projects")} className={navLinkStyle}>
                        Projects
                    </button>
                    <button onClick={() => handleNavClick("#contact")} className={navLinkStyle}>
                        Contact
                    </button>
                    <Link
                        href="/resume/vida_resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 border border-indigo-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                        RESUME
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden justify-end items-center w-2/3">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-300">
                        {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
                    </button>
                </div>

            </nav>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden bg-slate-700 flex flex-col items-center space-y-4 py-4">
                    <button onClick={() => handleNavClick("#about")} className={navLinkStyle}>
                        About
                    </button>
                    <button onClick={() => handleNavClick("#skills")} className={navLinkStyle}>
                        Skills
                    </button>
                    <button onClick={() => handleNavClick("#experience")} className={navLinkStyle}>
                        Experiences
                    </button>
                    <button onClick={() => handleNavClick("#projects")} className={navLinkStyle}>
                        Projects
                    </button>
                    <button onClick={() => handleNavClick("#contact")} className={navLinkStyle}>
                        Contact
                    </button>
                    <Link
                        href="/resume/vida_resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 border border-indigo-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                        RESUME
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Navbar;