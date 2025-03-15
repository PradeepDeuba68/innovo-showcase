
import { ReactNode, useEffect } from "react";
import { motion } from "framer-motion";

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 0.98,
  },
};

const pageTransition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  mass: 0.8,
};

const PageTransition = ({ children }: PageTransitionProps) => {
  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add("dark");
    
    // Add a smooth scrolling class to the html element
    document.documentElement.classList.add("smooth-scroll");
    
    return () => {
      // We're not allowing light mode, so we don't remove the dark class
      document.documentElement.classList.remove("smooth-scroll");
    };
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen w-full cursor-none overflow-x-hidden"
    >
      {/* Gradient orbs for background effect */}
      <div className="fixed -top-64 -right-64 w-[40rem] h-[40rem] bg-purple-500/5 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="fixed -bottom-64 -left-64 w-[40rem] h-[40rem] bg-blue-500/10 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="fixed top-1/3 left-1/4 w-[20rem] h-[20rem] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none z-0 animate-float"></div>
      {children}
    </motion.div>
  );
};

export default PageTransition;
