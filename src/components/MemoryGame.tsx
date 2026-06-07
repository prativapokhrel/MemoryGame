import { useRef, useState } from "react";
import Card from "./Card";
import GameOver from "./GameOver";
import GamePlay from "./GamePlay";

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
    // if more than 2 assets have isVisible == true
    const currentAsset = assets.find((asset) => asset.id === assetId);
    if (currentAsset?.state === "visible") {
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
      clearTimeout(timeoutRef.current);
      const updatedAssets2 = updatedAssets.map((va) => {
        if (va.id != assetId) {
          return { ...va, state: "hidden" };
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

  function handleRestart() {
    setAssets(assets.map((a) => ({ ...a, state: "hidden" })));
  }
  // kina vayena map??????????????
  // translation ko document herne  🤔🤔
  // const shuffledAssets = assets.map((a, currentIndex) => {
  //   const newIndex = Math.floor(Math.random() * 5);
  //   assets[currentIndex] = assets[newIndex];
  //   assets[newIndex] = a;
  //   return assets;
  // });

  //   const assetCopy = [...assets];
  //   for (let i = 0; i < assetCopy.length; i++) {
  //     const newIndex = Math.floor(Math.random() * 5);
  //     const currentValue = assetCopy[i];
  //     assetCopy[i] = assetCopy[newIndex];
  //     assetCopy[newIndex] = currentValue;
  //   }

  //   setAssets(assetCopy);
  // }
  const removedAssets = assets.filter((ua) => ua.state === "removed").length;
  const isGameOver = removedAssets === assets.length;
  if (isGameOver) {
    return <GameOver handleRestart={handleRestart} />;
  }
  return <GamePlay assets={assets} handleClick={handleClick} />;
}
