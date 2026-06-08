export default function LevelCard({ number, cards, pairs }) {
  return (
    <div className="level-card">
      <div className="level-number">{number}</div>

      <div className="level-info">
        <div className="level-title">{cards} CARDS - FREE PLAY</div>
        <div className="level-subtitle">{pairs} PAIRS</div>
      </div>
    </div>
  );
}
