const cards = [
  "❤️ Your Smile",
  "🌸 Your Kindness",
  "😊 Your Cute Anger",
  "💖 Your Caring Nature",
  "🌙 Everything About You",
];

function Special() {
  return (
    <section className="py-24 bg-[#1b012f] text-center">
      <h2 className="text-5xl font-bold text-pink-300 mb-16">
        Why Malkin Ji Is Special
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-10">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white/10 rounded-3xl p-10 border border-white/20 hover:scale-105 transition"
          >
            <h3 className="text-2xl">{card}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Special;