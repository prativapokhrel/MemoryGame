import { useEffect } from "react";
import Confetti from "react-confetti";

export default function GameOver({ handleRestart }) {
  useEffect(() => {
    const sound = new Audio("/confetti.wav");
    sound.play();
    return () => {
      sound.pause();
      sound.currentTime = 0;
    };
  }, []);
  return (
    <div>
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <h1>Congratulations</h1>
      <button onClick={handleRestart} className="bg-green-600 mt-2">
        Restart
      </button>
    </div>
  );
}
