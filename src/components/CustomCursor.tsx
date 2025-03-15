
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [textHovered, setTextHovered] = useState(false);
  const [imageHovered, setImageHovered] = useState(false);

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

    const onTextHoverStart = () => {
      setTextHovered(true);
    };

    const onTextHoverEnd = () => {
      setTextHovered(false);
    };

    const onImageHoverStart = () => {
      setImageHovered(true);
    };

    const onImageHoverEnd = () => {
      setImageHovered(false);
    };

    const handleElementInteractions = () => {
      // Interactive elements
      document.querySelectorAll("a, button, [role=button], input, textarea, select").forEach(el => {
        el.addEventListener("mouseenter", onLinkHoverStart);
        el.addEventListener("mouseleave", onLinkHoverEnd);
      });

      // Text elements
      document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span").forEach(el => {
        el.addEventListener("mouseenter", onTextHoverStart);
        el.addEventListener("mouseleave", onTextHoverEnd);
      });

      // Image elements
      document.querySelectorAll("img, video, canvas, svg").forEach(el => {
        el.addEventListener("mouseenter", onImageHoverStart);
        el.addEventListener("mouseleave", onImageHoverEnd);
      });
    };

    const removeElementInteractions = () => {
      document.querySelectorAll("a, button, [role=button], input, textarea, select").forEach(el => {
        el.removeEventListener("mouseenter", onLinkHoverStart);
        el.removeEventListener("mouseleave", onLinkHoverEnd);
      });

      document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span").forEach(el => {
        el.removeEventListener("mouseenter", onTextHoverStart);
        el.removeEventListener("mouseleave", onTextHoverEnd);
      });

      document.querySelectorAll("img, video, canvas, svg").forEach(el => {
        el.removeEventListener("mouseenter", onImageHoverStart);
        el.removeEventListener("mouseleave", onImageHoverEnd);
      });
    };

    addEventListeners();
    setTimeout(handleElementInteractions, 1000); // Delay to ensure all elements are rendered

    return () => {
      removeEventListeners();
      removeElementInteractions();
    };
  }, []);

  return (
    <>
      <motion.div
        className={`pointer-events-none fixed top-0 left-0 z-[9999] h-7 w-7 rounded-full border-2 border-primary mix-blend-difference ${
          hidden ? "opacity-0" : "opacity-100"
        }`}
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: clicked ? 0.8 : linkHovered ? 1.8 : textHovered ? 1.3 : imageHovered ? 1.5 : 1,
          borderColor: linkHovered ? "#8B5CF6" : textHovered ? "#60A5FA" : imageHovered ? "#EC4899" : "#60A5FA",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
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
          backgroundColor: linkHovered ? "#8B5CF6" : textHovered ? "#60A5FA" : imageHovered ? "#EC4899" : "#60A5FA",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.3,
        }}
      />
    </>
  );
};

export default CustomCursor;
