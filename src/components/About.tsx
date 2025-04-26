import Image from 'next/image';

const About = () => {
    return (
        <section
            id="about"
            className="w-full max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-12"
        >
            {/* Left: Text Content */}
            <div className="w-full md:w-3/5 text-left">
                <div className="flex items-center gap-4 mb-6">
                    {/* <span className="text-indigo-400 font-mono text-sm">01.</span> */}
                    <h2 className="text-white text-2xl sm:text-3xl font-bold">About</h2><h2 className='text-indigo-400 text-2xl sm:text-3xl font-bold'>Me</h2>
                    <div className="flex-1 h-px bg-slate-600"></div>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    Hello! I’m <span className="text-indigo-400 font-medium">Vida</span>, a full-stack software engineer with a passion for building intuitive, user-focused applications.
                    <br /><br />
                    My path into tech wasn’t traditional. I originally studied Accounting and worked in banking before discovering my love for software development. After moving to the U.S., becoming a mom, and searching for a career that truly excited me, I dove into code, often studying late into the night while caring for my baby during the day.
                    <br /><br />
                    Since then, I’ve completed multiple internships at <span className="text-indigo-400">Microsoft</span>, <span className="text-indigo-400">Snowflake</span>, and startups, working on everything from scalable backend systems to accessible frontend interfaces. I enjoy solving complex problems with clean, maintainable code and collaborating with teams that care about users as much as technology.
                    <br /><br />
                    I’m currently looking for full-time opportunities where I can continue learning, contribute to real-world impact, and grow as an engineer. I’m especially interested in roles focused on frontend, full-stack, or developer experience.
                    <br /><br />
                    Outside of tech, I love painting nature on canvas, teaching my son, and learning something new every day.
                </p>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-2/5 flex justify-center">
                <div className="relative group">
                    <div className="absolute inset-0 border-2 border-indigo-400 rounded-md transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
                    <Image
                        alt="Vida"
                        src="/images/vida-headshot.jpg" // Replace with your image
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
