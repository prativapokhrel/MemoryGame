import { useRef, useState } from "react";
import GameOver from "./GameOver";
import GamePlay from "./GamePlay";
// option for grid board
// fix bug
export default function MemoryGame() {
  const [assets, setAssets] = useState([
    { id: 2, value: "🐘", state: "hidden" },
    { id: 3, value: "🐟", state: "hidden" },
    { id: 4, value: "🐘", state: "hidden" },
    { id: 5, value: "🦋", state: "hidden" },
    { id: 6, value: "🐟", state: "hidden" },
    { id: 1, value: "🦋", state: "hidden" },
  ]);

  const timeoutRef = useRef(null);

  function handleClick(assetId) {
    const currentAsset = assets.find((asset) => asset.id === assetId);
    if (
      currentAsset?.state === "visible" ||
      currentAsset?.state === "removed"
    ) {
      return;
    }

    const updatedAssets = assets.map((asset) => {
      if (asset.id === assetId) {
        return { ...asset, state: "visible" };
      } else {
        return asset;
      }
    });

    const visibleAssets = updatedAssets.filter(
      (asset) => asset.state === "visible",
    );

    if (visibleAssets.length > 2) {
      // if (!matched) {
      // }
      // clearTimeout(timeoutRef.current);
      const updatedAssets2 = updatedAssets.map((va) => {
        if (va.id != assetId) {
          if (va.state != "removed") {
            return { ...va, state: "hidden" };
          } else {
            return va;
          }
        } else {
          return va;
        }
      });
      setAssets(updatedAssets2);
    } else if (visibleAssets.length == 2) {
      setAssets(updatedAssets);
      const matched = visibleAssets[0].value === visibleAssets[1].value;

      if (matched) {
        timeoutRef.current = setTimeout(() => {
          setAssets(
            updatedAssets.map((ua) => {
              if (visibleAssets.find((a) => a.id === ua.id)) {
                return { ...ua, state: "removed" };
              } else {
                return ua;
              }
            }),
          );
        }, 500);
      } else {
        const allAssets = updatedAssets.map((va) => {
          if (va.state === "visible") {
            return { ...va, state: "hidden" };
          } else {
            return va;
          }
        });
        timeoutRef.current = setTimeout(() => {
          setAssets(allAssets);
        }, 2000);
      }
    } else {
      setAssets(updatedAssets);
    }
  }

  function shuffleArray(array) {
    const arrayCopy = [...array];
    for (let i = arrayCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arrayCopy[i];
      arrayCopy[i] = arrayCopy[j];
      arrayCopy[j] = temp;
    }
    return arrayCopy;
  }
  function handleRestart() {
    const shuffledAssets = shuffleArray(assets);
    setAssets(assets.map((a) => ({ ...a, state: "hidden" })));
  }

  const removedAssets = assets.filter((ua) => ua.state === "removed").length;
  const isGameOver = removedAssets === assets.length;
  if (isGameOver) {
    return <GameOver handleRestart={handleRestart} />;
  }
  return <GamePlay assets={assets} handleClick={handleClick} />;
}
