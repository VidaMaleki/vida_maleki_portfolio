
"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from 'react';

export default function Home() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    }
  }, [pathname, searchParams]);
  return (
    <section className="h-full flex flex-col items-center justify-center px-6 bg-slate-800 ">
      <div style={{ height: "90vh" }} className=" flex flex-col items-start justify-center">
      <span className="text-sm sm:text-1 font-bold mb-4 text-indigo-400">Hi, My name is</span>
      <h1 className="text-5xl sm:text-7xl font-bold mb-4 text-white">
        Vida Maleki.
      </h1>
      <h2 className="text-4xl sm:text-6xl font-bold mb-4 text-gray-400">Full-Stack Software Engineer</h2>
      <p className="max-w-2xl text-gray-500 dark:text-gray-300 mb-8">
        I build scalable, accessible web applications using React, TypeScript, Python, and more. Passionate about creative tools, great UX, and solving real problems with clean code.
      </p>
      </div>
      <About />
      <Experiences/>
      <Projects />
      <Contact />
    </section>
  );
}
