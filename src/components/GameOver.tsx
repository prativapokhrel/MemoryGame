export default function GameOver({ handleRestart }) {
  return (
    <div>
      <h1>Congratulations</h1>
      <button onClick={handleRestart} className="bg-green-600 mt-2">
        Restart
      </button>
    </div>
  );
}
