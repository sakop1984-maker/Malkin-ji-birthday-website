import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 150,
        y: position.y - 150,
      }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 20,
      }}
      className="pointer-events-none fixed left-0 top-0 z-0 h-[300px] w-[300px] rounded-full bg-pink-400/20 blur-[120px]"
    />
  );
}

export default MouseGlow;