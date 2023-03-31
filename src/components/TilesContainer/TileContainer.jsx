import React, { useState, useEffect } from "react";
import { TIME_TO_GAME_START } from "../../App";
import Tile from "../Tile/Tile";
import "./TileContainer.css";

const listOfAllTiles = [
  "https://images.pexels.com/photos/1374884/pexels-photo-1374884.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/314726/pexels-photo-314726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/4420454/pexels-photo-4420454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/53459/lightning-storm-weather-sky-53459.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1600",
];
const listOfAllPairedTiles = [...listOfAllTiles, ...listOfAllTiles];
const listToDisplay = listOfAllPairedTiles.sort((a, b) => 0.5 - Math.random());

const cards = listToDisplay.map((element, index) => {
  return { path: element, isVisible: false, ID: index }; // [{isVisible: false}, {isVisible: false}]
});

function TilesContainer({ isGameStarted }) {
  const [clickedImagePaths, setImagePaths] = useState([]); // ['url1', 'url2'] => url1 !== url2 => setCardsState
  const [cardState, setCardsState] = useState(cards);

  useEffect(() => {
    if (clickedImagePaths.length === 2) {
      setTimeout(() => {
        if (clickedImagePaths[0] === clickedImagePaths[1]) {
          setImagePaths([]);
        } else {
          const newCardState = cardState.map((card) => {
            if (clickedImagePaths.includes(card.path)) {
              return { ...card, isVisible: false };
            }
            return card;
          });
          setCardsState(newCardState);
          setImagePaths([]);
        }
      }, 200);
    }
    // clickedImagePaths.length === 2 -> akcja sprawdzająca czy clickedImagePaths[0] === clickedImagePaths[1] =>
  }, [clickedImagePaths]);

  useEffect(() => {
    if (isGameStarted) {
      const newCardState = cardState.map((card) => {
        return { ...card, isVisible: true };
      });
      setCardsState(newCardState);
      setTimeout(() => {
        const cardStateAfterTimeout = cardState.map((card) => {
          return { ...card, isVisible: false };
        });
        setCardsState(cardStateAfterTimeout);
      }, TIME_TO_GAME_START);
    }
  }, [isGameStarted]);

  return (
    <div className="TileContainer">
      {cardState.map(
        (
          element // {path: 'url', isVisible: false}
        ) => (
          <Tile
            isGameStarted={isGameStarted}
            clickedImagePaths={clickedImagePaths}
            cardState={cardState}
            pictureTile={element.path}
            index={element.ID}
            setCardsState={setCardsState}
            setImagePath={setImagePaths}
            isVisible={element.isVisible}
          />
        )
      )}
    </div>
  );
}

export default TilesContainer;
