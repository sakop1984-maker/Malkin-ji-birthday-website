import { useState } from "react";
import Confetti from "react-confetti";

function Surprise() {
  const [show, setShow] = useState(false);

  return (
    <section className="bg-[#1b012f] py-24 text-center relative overflow-hidden">
      {show && <Confetti recycle={false} numberOfPieces={500} />}

      <h2 className="text-5xl font-bold text-pink-300 mb-8">
        One Last Surprise ❤️
      </h2>

      <button
        onClick={() => setShow(true)}
        className="rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-10 py-5 text-xl font-bold text-white transition hover:scale-110"
      >
        Click Me 🎁
      </button>

      {show && (
        <h3 className="mt-12 text-4xl text-pink-200 animate-pulse">
          Happy Birthday Malkin Ji ❤️🎉
        </h3>
      )}
    </section>
  );
}

export default Surprise;