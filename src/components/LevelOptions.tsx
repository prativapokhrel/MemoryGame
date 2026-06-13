import LevelCard from "./LevelCard";

export default function LevelOptions({ setSelectedLevel, numberOfCards }) {
  return (
    <div className="flex flex-col gap-2">
      {numberOfCards.map((number, index) => {
        return (
          <LevelCard
            number={index + 1}
            cards={number}
            pairs={number / 2}
            onClick={() => setSelectedLevel(index + 1)}
          />
        );
      })}
    </div>
  );
}
