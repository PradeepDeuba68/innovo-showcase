import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  // Click animation variants
  const buttonVariants = {
    rest: { scale: 1 },
    pressed: { scale: 0.95 },
    hover: { 
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    }
  };

  const rippleVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: [0, 1, 0],
      scale: 5,
      transition: {
        duration: 0.6,
      },
    },
  };

  // State for ripple animation
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleCreateRipple = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const buttonRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - buttonRect.left;
    const y = e.clientY - buttonRect.top;
    
    const newRipple = {
      id: Date.now(),
      x,
      y,
    };
    
    setRipples((prevRipples) => [...prevRipples, newRipple]);
    
    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples((prevRipples) => 
        prevRipples.filter((ripple) => ripple.id !== newRipple.id)
      );
    }, 600);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-10 py-5",
        {
          "bg-black/80 backdrop-blur-md shadow-sm": isScrolled,
          "bg-transparent": !isScrolled,
        }
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl md:text-2xl font-display font-semibold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">Innovo</span>
        </Link>

        {/* Dropdown Menu - Now the only navigation option */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center text-white hover:text-primary transition-colors bg-black/50 px-3 py-2 rounded-md border border-white/10">
            <span className="mr-1">Menu</span>
            <ChevronDown size={16} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black/90 backdrop-blur-md border border-white/10 shadow-lg rounded-md z-50">
            {navItems.map((item) => (
              <DropdownMenuItem key={item.name} className="focus:bg-gray-800">
                <Link
                  to={item.path}
                  className={cn(
                    "w-full text-sm font-medium relative flex items-center py-1.5 px-3",
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-white/80 hover:text-white"
                  )}
                  onClick={handleCreateRipple}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"
                      layoutId="navbar-indicator"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                  
                  {/* Ripple effects */}
                  {ripples.map((ripple) => (
                    <motion.span
                      key={ripple.id}
                      className="absolute bg-white/20 rounded-full pointer-events-none"
                      style={{
                        left: ripple.x,
                        top: ripple.y,
                        width: 4,
                        height: 4,
                        marginLeft: -2,
                        marginTop: -2,
                      }}
                      initial="initial"
                      animate="animate"
                      variants={rippleVariants}
                      onAnimationComplete={() => {
                        setRipples((prevRipples) =>
                          prevRipples.filter((r) => r.id !== ripple.id)
                        );
                      }}
                    />
                  ))}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Mobile Menu Button - Now hidden since we're using the dropdown for all devices */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden hidden text-white p-1 rounded-full hover:bg-accent transition-colors"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu - Now hidden since we're using the dropdown for all devices */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="hidden md:hidden overflow-hidden bg-black/90 backdrop-blur-md"
          >
            <nav className="flex flex-col space-y-4 py-6 px-4">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ 
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    transition: { duration: 0.2 }
                  }}
                  className="relative overflow-hidden rounded-md"
                >
                  <Link
                    to={item.path}
                    className={cn(
                      "py-2 px-4 text-base font-medium block rounded-md transition-colors",
                      location.pathname === item.path
                        ? "bg-primary/10 text-primary"
                        : "text-white/80 hover:text-white"
                    )}
                    onClick={handleCreateRipple}
                  >
                    {item.name}
                    
                    {/* Ripple effects */}
                    {ripples.map((ripple) => (
                      <motion.span
                        key={ripple.id}
                        className="absolute bg-white/20 rounded-full pointer-events-none"
                        style={{
                          left: ripple.x,
                          top: ripple.y,
                          width: 4,
                          height: 4,
                          marginLeft: -2,
                          marginTop: -2,
                        }}
                        initial="initial"
                        animate="animate"
                        variants={rippleVariants}
                      />
                    ))}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
