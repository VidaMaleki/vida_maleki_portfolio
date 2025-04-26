"use client";
import { useState } from "react";
import { experiences } from "@/data/experiences";

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24 text-slate-300">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-white text-2xl sm:text-3xl font-bold">Where I’ve Worked</h2>
        <div className="flex-1 h-px bg-slate-600"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <ul className="border-l-2 border-indigo-500 space-y-1">
            {experiences.map((exp, index) => (
              <li key={exp.company}>
                <button
                  onClick={() => setActive(index)}
                  className={`pl-4 py-2 w-full text-left border-l-4 transition-colors ${active === index
                      ? "border-indigo-400 text-indigo-400 bg-slate-800"
                      : "border-transparent hover:text-indigo-300 hover:bg-slate-800"
                    }`}
                >
                  {exp.company}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Details */}
        <div className="md:w-3/4">
          <h3 className="text-white text-lg font-semibold mb-1">
            {experiences[active].title}{" "}
            <span className="text-indigo-400">@ {experiences[active].company}</span>
          </h3>
          <p className="text-sm text-slate-400 mb-4">{experiences[active].date}</p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            {experiences[active].bullets.map((point, idx) => (
              <li key={idx} className="text-slate-300">{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}