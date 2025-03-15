
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
    y: 20,
    scale: 0.98,
  },
};

const pageTransition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
};

const PageTransition = ({ children }: PageTransitionProps) => {
  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add("dark");
    
    return () => {
      // We're not allowing light mode, so we don't remove the class
    };
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen w-full cursor-none"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
