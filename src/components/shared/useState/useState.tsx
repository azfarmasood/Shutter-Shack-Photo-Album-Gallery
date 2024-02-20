"use client"
import { useState,useEffect } from "react";

const HeaDer = ({children, className,}:{children:React.ReactNode,className?: string}) => {
    const [isMovingDown, setIsMovingDown] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsMovingDown(window.scrollY > 100);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <header className={`sticky top-0 md:block hidden z-999 ${isMovingDown ? "bg-zinc-950 duration-1000":"duration-1000"}`}>
      {children}
    </header>
  )
}

export default HeaDer
