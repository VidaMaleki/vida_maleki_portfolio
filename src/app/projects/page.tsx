"use client";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const ProjectPage = () => {
  return (
    <section className="w-full py-20 px-4 text-center bg-slate-800">
      <h2 className="text-3xl font-bold mb-10 text-white">All Projects</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="flex justify-center">
            <div className="max-w-[320px] w-full">
              <ProjectCard {...project} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
