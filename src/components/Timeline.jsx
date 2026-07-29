import { motion } from "framer-motion";

const timeline = [
  "❤️ The Day We Met",
  "🌸 First Conversation",
  "😊 Beautiful Memories",
  "💕 Today",
  "∞ Forever Together",
];

function Timeline() {
  return (
    <section className="py-24 bg-[#140021] text-center">
      <h2 className="text-5xl font-bold text-pink-300 mb-16">
        Our Journey
      </h2>

      <div className="max-w-xl mx-auto space-y-10">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl py-6 text-2xl border border-white/20"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;