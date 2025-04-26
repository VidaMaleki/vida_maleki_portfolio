"use client";

import { motion } from "framer-motion";
import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaJava, FaPython, FaDocker, FaAws
} from "react-icons/fa";
import {
    SiTypescript, SiJavascript, SiTailwindcss, SiPostgresql, SiMongodb, SiNextdotjs,
    SiFlask, SiSpringboot, SiGraphql, SiCplusplus, SiTestinglibrary, SiJest, SiCypress, SiSnowflake, SiWebcomponentsdotorg
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const skills = [
    // Programming Languages
    { name: "Python", icon: <FaPython size={36} className="text-yellow-300" /> },
    { name: "Java", icon: <FaJava size={36} className="text-red-500" /> },
    { name: "JavaScript", icon: <SiJavascript size={36} className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript size={36} className="text-blue-500" /> },
    { name: "C++ (Basic)", icon: <SiCplusplus size={36} className="text-blue-300" /> },

    // Frontend
    { name: "React.js", icon: <FaReact size={36} className="text-sky-400" /> },
    { name: "Next.js", icon: <SiNextdotjs size={36} className="text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={36} className="text-cyan-400" /> },
    { name: "Fluent UI", icon: <SiWebcomponentsdotorg size={36} className="text-violet-400" /> },
    { name: "HTML5", icon: <FaHtml5 size={36} className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt size={36} className="text-blue-400" /> },

    // Backend
    { name: "Node.js", icon: <FaNodeJs size={36} className="text-green-500" /> },
    { name: "Flask", icon: <SiFlask size={36} className="text-gray-300" /> },
    { name: "Spring Boot", icon: <SiSpringboot size={36} className="text-green-600" /> },
    { name: "GraphQL (Basic)", icon: <SiGraphql size={36} className="text-pink-400" /> },

    // Databases
    { name: "MongoDB", icon: <SiMongodb size={36} className="text-green-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={36} className="text-blue-500" /> },
    { name: "JSON (Data)", icon: <SiWebcomponentsdotorg size={36} className="text-gray-400" /> },

    // Tools & DevOps
    { name: "AWS (S3, Lambda)", icon: <FaAws size={36} className="text-orange-300" /> },
    { name: "Azure", icon: <VscAzure size={36} className="text-blue-500" /> },
    { name: "Docker (Basic)", icon: <FaDocker size={36} className="text-blue-300" /> },
    { name: "Snowflake", icon: <SiSnowflake size={36} className="text-blue-200" /> },
    { name: "Webpack", icon: <SiWebcomponentsdotorg size={36} className="text-violet-400" /> },

    // Testing
    { name: "Jest", icon: <SiJest size={36} className="text-pink-500" /> },
    { name: "Cypress", icon: <SiCypress size={36} className="text-green-300" /> },
    { name: "TDD", icon: <SiTestinglibrary size={36} className="text-red-300" /> },

    // Extra
    { name: "GitHub", icon: <FaGithub size={36} className="text-white" /> },
];

const Skills = () => {
    return (
        <section id="skills" className="w-full py-20 px-6 text-center">
            <h2 className="text-3xl font-bold mb-10 text-white">Skills</h2>

            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-6 max-w-6xl mx-auto">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.03 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center justify-center"
                    >
                        <div className="bg-gray-700 p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
                            {skill.icon}
                        </div>
                        <span className="text-white text-xs mt-2">{skill.name}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;