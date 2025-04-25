import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-20">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        Hi, I’m Vida — Full-Stack Software Engineer
      </h1>
      <p className="max-w-2xl text-gray-600 dark:text-gray-300 mb-8">
        I build scalable, accessible web applications using React, TypeScript, Python, and more. Passionate about creative tools, great UX, and solving real problems with clean code.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          href="/projects"
          className="bg-black text-white dark:bg-white dark:text-black px-5 py-3 rounded-lg text-sm hover:opacity-90 transition"
        >
          View Projects
        </Link>
        <Link
          href="/about"
          className="border border-gray-300 dark:border-gray-600 px-5 py-3 rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          About Me
        </Link>
      </div>
    </section>
  );
}
