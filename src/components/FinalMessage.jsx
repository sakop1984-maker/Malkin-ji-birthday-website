import { motion } from "framer-motion";

function FinalMessage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#12001f] to-black px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-pink-400">
          Happy Birthday ❤️
        </h1>

        <p className="mt-8 text-xl md:text-2xl text-pink-100 leading-10 max-w-3xl">
          Thank you for being a beautiful part of my life.
          <br />
          I hope this year brings you endless happiness,
          success, peace, and countless reasons to smile.
          <br /><br />
          Stay happy, stay blessed, and never stop shining. ✨
        </p>

        <h2 className="mt-12 text-3xl text-white">
          ❤️ Forever Yours Honey ❤️
        </h2>
      </motion.div>
    </section>
  );
}

export default FinalMessage;