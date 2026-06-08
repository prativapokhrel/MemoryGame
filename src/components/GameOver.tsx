import Confetti from "react-confetti";

export default function GameOver({ handleRestart }) {
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
