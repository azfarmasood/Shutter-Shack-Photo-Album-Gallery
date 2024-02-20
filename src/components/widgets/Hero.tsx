"use client"
import Link from "next/link"
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const words = ["Genrative Fill", "Pixelate","Blur","Opacity", "Removebackground" ,"And many more", "Explore Now"];


const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);



  return (
    <main>
      <div className="flex flex-col items-center justify-center text-center mt-28">
      <h1 className="font-bold md:text-3xl text-xl uppercase bg-gradient-to-br from-yellow-500 via-yellow-300 to-transparent bg-clip-text text-transparent -tracking-tighter">
          Welcome To Shutter Shack
        </h1>
        <h3 className="md:text-2xl font-bold text-lg mt-4">Discover The Essence of Shutter Shack</h3>
        <h4 className="md:text-xl text-lg font-bold w-60 mt-3">Use Genrative AI Tools To Download Images</h4>
        <div>
        <AnimatePresence mode="wait">
      <motion.h1
        key={words[index]}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="text-center font-display text-lg font-bold -tracking-tighter drop-shadow-sm md:text-xl mt-4 w-96"
      >
        {words[index]}
      </motion.h1>
    </AnimatePresence>
        </div>
        <Link href='/gallery'>
        <button className="px-6 py-2 font-bold bg-yellow-700 md:text-lg text-sm mt-4 rounded-full">Explore Now</button>
        </Link>
      </div>
    </main>
  )
}

export default Hero
