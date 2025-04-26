"use client";

import Slider from "react-slick";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "./Arrow";
import Link from "next/link";

const Projects = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

  return (
    <section id="projects" className="w-full py-20 text-center overflow-hidden">
      <h2 className="text-3xl font-bold mb-10 text-white">Projects</h2>
      <div className="slider-container max-w-full overflow-x-hidden">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-2 box-border">
              <div className="max-w-[320px] w-full mx-auto h-full">
                <ProjectCard {...project} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="mt-10">
        <Link
          href="/projects"
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium"
        >
          See More Projects
        </Link>
      </div>
    </section>
  );
};

export default Projects