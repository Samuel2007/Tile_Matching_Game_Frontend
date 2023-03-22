import React, { useState } from "react";
import "./Tile.css";

function Tile({
  pictureTile,
  setImagePath,
  setCardsState,
  isVisible,
  cardState,
  index,
  clickedImagePaths,
}) {
  const onClickHandler = () => {
    if (clickedImagePaths.length < 2 && !cardState[index].isVisible) {
      const newCardState = cardState.map((card) => {
        if (index === card.ID) {
          return { ...card, isVisible: true };
        }
        return card;
      });
      setCardsState(newCardState);
      setImagePath([...clickedImagePaths, pictureTile]);
    }
  };
  return (
    <div className="Tile" onClick={onClickHandler}>
      {isVisible && <img src={pictureTile} className="Image" />}
    </div>
  );
}

export default Tile;
