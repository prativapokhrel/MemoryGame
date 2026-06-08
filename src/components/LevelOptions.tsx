import LevelCard from "./LevelCard";

export default function LevelOptions({ setSelectedLevel }) {
  return (
    <div>
      <div onClick={() => setSelectedLevel(1)}>
        <LevelCard number={1} cards={6} pairs={3} />
      </div>
      <div onClick={() => setSelectedLevel(2)}>
        <LevelCard number={2} cards={12} pairs={6} />
      </div>
      <div onClick={() => setSelectedLevel(3)}>
        <LevelCard number={3} cards={6} pairs={8} />
      </div>
    </div>
  );
}
