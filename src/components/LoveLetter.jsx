import { motion } from "framer-motion";

function LoveLetter() {
  return (
    <section className="bg-[#140021] py-24 px-6 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl rounded-3xl border border-pink-300/30 bg-white/10 backdrop-blur-xl p-10 text-white shadow-2xl"
      >
        <h2 className="text-5xl font-bold text-pink-300 mb-8 text-center">
          A Letter For You ❤️
        </h2>

        <p className="leading-9 text-lg text-pink-100">
          Dear Malkin Ji,
          <br /><br />

          Today is not just your birthday...
          it's the day this world became a little more beautiful.

          <br /><br />

          Thank you for every smile,
          every laugh,
          every little memory,
          and every moment that made life brighter.

          <br /><br />

          I don't know what the future holds,
          but I know one thing—

          wherever life takes us,
          I'll always pray for your happiness.

          <br /><br />

          May this birthday bring you endless smiles,
          unlimited success,
          good health,
          and every dream you've ever wished for.

          <br /><br />

          Happy Birthday once again ❤️

          <br /><br />

          — With lots of love 💖
            Your Honey
        </p>
      </motion.div>
    </section>
  );
}

export default LoveLetter;