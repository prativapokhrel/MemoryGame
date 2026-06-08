import Asset from "./Asset";
export default function GamePlay({ assets, handleClick }) {
  return (
    <>
      {assets.map((cardInfo) => (
        <Asset cardInfo={cardInfo} handleClick={handleClick} />
      ))}
    </>
  );
}
