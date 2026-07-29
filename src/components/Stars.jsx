import { motion } from "framer-motion";

const stars = Array.from({ length: 80 });

function Stars() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}

export default Stars;