import { Suspense } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="h-full flex flex-col items-center justify-center px-6 bg-slate-800 ">
        <div style={{ height: "84vh" }} className="flex flex-col items-start justify-center">
          <span className="text-sm sm:text-1 font-bold mb-4 text-indigo-400">Hi, My name is</span>
          <h1 className="text-5xl sm:text-7xl font-bold mb-4 text-white">Vida Maleki.</h1>
          <h2 className="text-4xl sm:text-6xl font-bold mb-4 text-gray-400">Full-Stack Software Engineer</h2>
          <p className="max-w-2xl text-gray-500 dark:text-gray-300 mb-8">
            I build scalable, accessible web applications using React, TypeScript, Python, and more.
          </p>
        </div>
        <About />
        <Skills />
        <Experiences />
        <Projects />
        <Contact />
      </section>
    </Suspense>
  );
}
