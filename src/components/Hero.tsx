
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-20">
          {/* Animated Circle Photo - New Addition */}
          <motion.div
            className="mx-auto lg:mx-0 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary/50 relative z-10"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95, rotate: -5 }}
              animate={{ 
                boxShadow: ["0 0 10px rgba(155, 135, 245, 0.5)", "0 0 20px rgba(155, 135, 245, 0.8)", "0 0 10px rgba(155, 135, 245, 0.5)"],
              }}
              transition={{
                boxShadow: {
                  repeat: Infinity,
                  duration: 2,
                },
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
              
              {/* Inner animated circle elements */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay"
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 20,
                  ease: "linear"
                }}
              ></motion.div>
            </motion.div>
            
            {/* Orbiting circles */}
            <motion.div 
              className="absolute -inset-2 z-0"
              animate={{ rotate: 360 }}
              transition={{ 
                repeat: Infinity, 
                duration: 15, 
                ease: "linear" 
              }}
            >
              <motion.div 
                className="absolute top-1/2 -left-2 w-4 h-4 bg-primary rounded-full"
                animate={{ 
                  scale: [1, 1.4, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2
                }}
              ></motion.div>
              <motion.div 
                className="absolute bottom-5 left-1/2 w-6 h-6 bg-blue-400 rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 0.9, 0.6]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  delay: 0.5
                }}
              ></motion.div>
              <motion.div 
                className="absolute top-10 right-5 w-5 h-5 bg-indigo-500 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2.5,
                  delay: 1
                }}
              ></motion.div>
            </motion.div>
          </motion.div>

          <div className="lg:max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="inline-block mb-4">
                <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
                  Innovative Solutions
                </span>
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-balance mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Crafting Digital Experiences with Precision and Purpose
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Building cutting-edge software solutions that combine elegant design with powerful functionality. Transform your ideas into reality with our expertise in modern technology.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                View Projects <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-background hover:bg-accent transition-colors"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="hidden lg:block lg:w-5/12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-400/20 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-card border border-border rounded-2xl shadow-xl glass overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-6 bg-muted flex items-center px-4">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="pt-8 px-4 pb-4">
                  <div className="w-full aspect-video bg-muted rounded-md"></div>
                  <div className="mt-4 space-y-2">
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                    <div className="h-4 bg-muted rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
