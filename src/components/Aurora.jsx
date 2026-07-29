import { motion } from "framer-motion";

function Aurora() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      <motion.div
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-pink-500/20 blur-[120px]"
        animate={{
          x: [0, 120, -80, 0],
          y: [0, 60, -60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-violet-500/20 blur-[150px]"
        animate={{
          x: [0, -150, 80, 0],
          y: [0, -80, 50, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

    </div>
  );
}

export default Aurora;