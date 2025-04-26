"use client";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const navLinkStyle =
    "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";

  const handleNavClick = (hash: string) => {
    if (pathname !== "/") {
      router.push("/" + hash);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-800 shadow-xl/20 ">
      <nav className="mx-auto flex h-16 items-center justify-between px-4 sm:px-10 max-w-7xl">
        <div className="flex items-center">
          <h1 className="text-indigo-400 text-3xl">VG</h1>
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
          <button className="text-gray-300 border border-indigo-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            RESUME
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
