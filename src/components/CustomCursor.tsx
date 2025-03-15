
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onLinkHoverStart = () => {
      setLinkHovered(true);
    };

    const onLinkHoverEnd = () => {
      setLinkHovered(false);
    };

    const handleLinkHover = () => {
      document.querySelectorAll("a, button, [role=button], input, textarea, select").forEach(el => {
        el.addEventListener("mouseenter", onLinkHoverStart);
        el.addEventListener("mouseleave", onLinkHoverEnd);
      });
    };

    const removeLinkHover = () => {
      document.querySelectorAll("a, button, [role=button], input, textarea, select").forEach(el => {
        el.removeEventListener("mouseenter", onLinkHoverStart);
        el.removeEventListener("mouseleave", onLinkHoverEnd);
      });
    };

    addEventListeners();
    handleLinkHover();

    return () => {
      removeEventListeners();
      removeLinkHover();
    };
  }, []);

  return (
    <>
      <motion.div
        className={`pointer-events-none fixed top-0 left-0 z-[9999] h-6 w-6 rounded-full border-2 border-primary bg-transparent mix-blend-difference ${
          hidden ? "opacity-0" : "opacity-100"
        }`}
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 28,
          mass: 0.5,
        }}
      />
      <motion.div
        className={`pointer-events-none fixed top-0 left-0 z-[9999] h-3 w-3 rounded-full bg-primary mix-blend-difference ${
          hidden ? "opacity-0" : "opacity-100"
        }`}
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: clicked ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
          mass: 0.3,
        }}
      />
    </>
  );
};

export default CustomCursor;
