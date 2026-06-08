import { useRef, useState } from "react";
import GameOver from "./GameOver";
import GamePlay from "./GamePlay";

const emojis = ["🦋", "🐘", "🐟", "🌼", "🌻", "🦜", "🦓", "🐞", "🐷", "🐙"];

export default function MemoryGame({ numberOfCards }) {
  const initialState = [];
  let emojiIndex = 0;
  for (let i = 0; i < numberOfCards; i += 2) {
    initialState.push({
      id: i + 1,
      value: emojis[emojiIndex],
      state: "hidden",
    });
    initialState.push({
      id: i + 2,
      value: emojis[emojiIndex],
      state: "hidden",
    });
    emojiIndex++;
  }

  const [assets, setAssets] = useState(shuffleArray(initialState));

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
      const matchedd = visibleAssets[0].value === visibleAssets[1].value;

      if (matchedd) {
        clearTimeout(timeoutRef.current);
      }
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
        }, 1000);
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
    shuffleArray(assets);
    setAssets(assets.map((a) => ({ ...a, state: "hidden" })));
  }

  const removedAssets = assets.filter((ua) => ua.state === "removed").length;
  const isGameOver = removedAssets === assets.length;
  if (isGameOver) {
    return <GameOver handleRestart={handleRestart} />;
  }
  return <GamePlay assets={assets} handleClick={handleClick} />;
}
