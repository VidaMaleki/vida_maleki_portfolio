import Image from 'next/image';

const About = () => {
    return (
        <section
            id="about"
            className="w-full max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-12"
        >
            <div className="w-full md:w-3/5 text-left">
                <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-white text-2xl sm:text-3xl font-bold">About</h2><h2 className='text-indigo-400 text-2xl sm:text-3xl font-bold'>Me</h2>
                    <div className="flex-1 h-px bg-slate-600"></div>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    Hello! I’m <span className="text-indigo-400 font-medium">Vida</span>, a full-stack software engineer passionate about building scalable, user-friendly applications.
                    <br /><br />
                    After working in banking and accounting, I transitioned into tech to follow my passion for problem-solving and innovation, inspired by my desire to set a strong example for my son. I completed my training at <span className="text-indigo-400">Ada Developers Academy</span>, freelanced for real-world clients, and built professional experience through internships at <span className="text-indigo-400">Microsoft</span>, <span className="text-indigo-400">Snowflake</span>, and early-stage startups.
                    <br /><br />
                    I enjoy working across the stack, with particular strengths in React, TypeScript, Python, and backend systems. I love solving complex problems with clean, maintainable code and collaborating with teams that value both users and technology.
                    <br /><br />
                    I’m currently seeking a full-time opportunity where I can continue growing as an engineer and contribute to impactful, user-focused products.
                </p>
            </div>
            <div className="w-full md:w-2/5 flex justify-center">
                <div className="relative group">
                    <div className="absolute inset-0 border-2 border-indigo-400 rounded-md transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
                    <Image
                        alt="Vida"
                        src="/images/vida.jpg"
                        width={250}
                        height={250}
                        className="relative z-10 rounded-md grayscale hover:grayscale-0 transition duration-300 object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
