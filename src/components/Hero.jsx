import { motion } from "framer-motion";
import Aurora from "./Aurora";
import Stars from "./Stars";
import FloatingHearts from "./FloatingHearts";
import MouseGlow from "./MouseGlow";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-300 via-purple-500 to-indigo-900 px-6">

      <MouseGlow />

      <Aurora />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-pink-400/30 blur-3xl animate-pulse"></div>

        <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-purple-500/30 blur-3xl animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"></div>
      </div>

      <Stars />

      <FloatingHearts />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex max-w-3xl flex-col items-center rounded-3xl border border-white/20 bg-white/10 px-10 py-14 text-center backdrop-blur-xl shadow-[0_20px_80px_rgba(255,105,180,0.25)]"
      >
        <motion.h1
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-white drop-shadow-2xl md:text-8xl"
        >
          Happy Birthday
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-5 text-4xl text-pink-200 md:text-5xl"
        >
          Malkin Ji ❤️
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 max-w-xl text-lg text-white/90 md:text-xl"
        >
          Every heartbeat of mine celebrates you today.
        </motion.p>

        <motion.button
  whileHover={{
    scale: 1.08,
    boxShadow: "0 0 40px rgba(255,105,180,0.8)",
  }}
  whileTap={{ scale: 0.95 }}
  onClick={() => {
    document.getElementById("gallery")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="mt-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-10 py-4 text-lg font-semibold text-white transition-all duration-300"
>
  Begin The Surprise ❤️
</motion.button>
      </motion.div>

    </section>
  );
}

export default Hero;