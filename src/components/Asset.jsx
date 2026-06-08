import { useState } from "react";

export default function Asset({ cardInfo, handleClick }) {
  return (
    <div className="w-25 h-25 " onClick={() => handleClick(cardInfo.id)}>
      {cardInfo.state != "removed" && (
        <div className="bg-blue-400 text-4xl w-full h-full justify-center flex items-center ">
          {cardInfo.state === "visible" && cardInfo.value}
        </div>
      )}
    </div>
  );
}
