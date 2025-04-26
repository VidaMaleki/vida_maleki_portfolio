"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 1800); // 1.8 seconds

    return () => clearTimeout(timeout);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed inset-0 bg-slate-900 flex flex-col items-center justify-center z-[1000]"
    >
      {/* You can replace this with your SVG */}
      <Image 
        src="/vg.svg" 
        alt="Vida Logo" 
        width={120} 
        height={60}
        className="animate-pulse"
      />
      {/* Optional: animated typing effect */}
      {/* <p className="text-indigo-400 text-lg mt-4 font-bold tracking-widest animate-pulse">VIDA</p> */}
    </motion.div>
  );
};

export default LoadingScreen;
