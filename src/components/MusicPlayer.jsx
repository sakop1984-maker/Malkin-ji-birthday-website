import { useRef } from "react";

function MusicPlayer() {
  const audioRef = useRef(null);

  const playMusic = () => {
    audioRef.current.play();
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/birthday.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={playMusic}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-pink-500 px-6 py-3 text-white shadow-lg hover:scale-110 transition"
      >
        🎵 Play Music
      </button>
    </>
  );
}

export default MusicPlayer;