"use client"
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link"

const Logo = () => {
    const items = "Shutter Shack";
    const gradual = {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    };
  return (
    <div className="w-full px-7">
    <Link href={"/"}>
    <AnimatePresence>
    {items.split("").map((char, i) => (
      <motion.span
        key={i}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={gradual}
        transition={{ duration: 0.5, delay: i * 0.1, repeat: Infinity, repeatType: "mirror", repeatDelay: 2 }}
        className="text-center font-display text-base font-bold -tracking-tighter drop-shadow-sm md:text-xl"
      >
        {char}
      </motion.span>
    ))}
</AnimatePresence>     
    </Link>
  </div>
  )
}

export default Logo
