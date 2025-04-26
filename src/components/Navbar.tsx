"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const navLinkStyle =
        "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";

    const handleNavClick = (hash: string) => {
        if (pathname !== "/") {
            startTransition(() => {
                router.push("/");
            });

            // Now wait a little bit and then scroll after route change
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 300); // <- wait a bit longer
        } else {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-slate-800 shadow-xl/20">
            <nav className="mx-auto flex h-16 items-center justify-between px-4 sm:px-10 max-w-7xl">
                <div className="flex items-center">
                    <button disabled={isPending}></button>
                    <Image 
                    src="/vg.svg"
                    alt="Vida Logo" 
                    width={80} 
                    height={40} 
                    className="object-contain"
                    style={{fill:"transparent"}}
                    />
                </div>
                <div className="hidden sm:flex space-x-6">
                    <button onClick={() => handleNavClick("#about")} className={navLinkStyle}>
                        About
                    </button>
                    <button onClick={() => handleNavClick("#projects")} className={navLinkStyle}>
                        Projects
                    </button>
                    <button onClick={() => handleNavClick("#experience")} className={navLinkStyle}>
                        Experiences
                    </button>
                    <button onClick={() => handleNavClick("#contact")} className={navLinkStyle}>
                        Contact
                    </button>
                    <a
                        href="/resume/Vida_software_engineer.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 border border-indigo-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        RESUME
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
