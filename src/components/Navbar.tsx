"use client";
import Link from "next/link";

const Navbar = () => {
    const navLinkStyle = "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";

    return (
        <header className="sticky top-0 z-50 bg-slate-800 shadow-xl/20 ">
            <nav className="mx-auto flex h-16 items-center justify-between px-4 sm:px-10 max-w-7xl">
                <div className="flex items-center">
                    <h1 className="text-indigo-400 text-3xl">VG</h1>
                </div>
                {/* Nav Links */}
                <div className="hidden sm:flex space-x-6">
                    <Link href="/#about" scroll={false}>
                        <span className={navLinkStyle}>
                            About
                        </span>
                    </Link>

                    <Link href="/#projects" scroll={false}>
                        <span className={navLinkStyle}>
                            Projects
                        </span>
                    </Link>

                    <Link href="/#experience" scroll={false}>
                        <span className={navLinkStyle}>
                            Experiences
                        </span>
                    </Link>

                    <Link href="/#contact" scroll={false}>
                        <span className={navLinkStyle}>
                            Contact
                        </span>
                    </Link>
                    {/* text-xs text-white px-2 py-1 border border-indigo-400 rounded */}
                    <button className="text-gray-300 border border-indigo-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">RESUME</button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
