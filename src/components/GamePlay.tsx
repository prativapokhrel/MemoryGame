import Card from "./Card";
export default function GamePlay({ assets, handleClick }) {
  return (
    <>
      {assets.map((cardInfo) => (
        <Card cardInfo={cardInfo} handleClick={handleClick} />
      ))}
    </>
  );
}
