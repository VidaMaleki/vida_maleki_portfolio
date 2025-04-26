import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

type Props = {
    title: string;
    description: string;
    image: string;
    tag: string;
    tech?: string[];
    github?: string;
    live?: string;
};

const ProjectCard = ({ title, description, image, tag, tech, github, live }: Props) => {
    return (
        <div className="flex flex-col justify-between h-full min-h-[480px] p-4 rounded-xl shadow-xl bg-gray-600 text-white">
            {/* Tag */}
            <span className="text-xs font-semibold bg-indigo-500 w-fit px-2 py-1 rounded mb-2 uppercase">
                {tag}
            </span>
            {/* Image */}
            <div className="mb-4">
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={200}
                    className="rounded object-cover mx-auto"
                />
            </div>
            {/* Title */}
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            {/* Description */}
            <p className="text-sm text-gray-300 mb-4">{description}</p>
            <div className="mt-auto flex flex-col gap-3">
                {/* Tech Stack */}
                {tech && (
                    <div className="flex flex-wrap gap-2 justify-center">
                        {tech.map((item, idx) => (
                            <span
                                key={idx}
                                className="text-xs text-white px-2 py-1 border border-indigo-400 rounded"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                )}
                {/* Links */}
                <div className="flex justify-between gap-4 items-center pt-2">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Repository"
                            className="hover:text-indigo-400"
                        >
                            <FaGithub size={20} />
                        </a>
                    )}
                    {live && (
                        <a
                            href={live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-indigo-400"
                        >
                            <BiLinkExternal size={18} />
                            Live
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
