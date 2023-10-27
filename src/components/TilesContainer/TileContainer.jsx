import React, { useState, useEffect } from "react";
import { TIME_TO_GAME_START } from "../../App";
import Tile from "../Tile/Tile";
import "./TileContainer.css";
import axios from "axios";
import { formatTimeToString } from "../StopWatch/StopWatch";
import Leaderboard from "../Leaderboard/Leaderboard";

const listOfAllTiles = [
  "https://images.pexels.com/photos/1374884/pexels-photo-1374884.jpeg?auto=compress&cs=tinysrgb&w=1600",
  // "https://images.pexels.com/photos/314726/pexels-photo-314726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // "https://images.pexels.com/photos/4420454/pexels-photo-4420454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // "https://images.pexels.com/photos/53459/lightning-storm-weather-sky-53459.jpeg?auto=compress&cs=tinysrgb&w=1600",
  // "https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=1600",
  // "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1600",
];
const listOfAllPairedTiles = [...listOfAllTiles, ...listOfAllTiles];
const listToDisplay = listOfAllPairedTiles.sort((a, b) => 0.5 - Math.random());

const cards = listToDisplay.map((element, index) => {
  return { path: element, isVisible: false, ID: index }; // [{isVisible: false}, {isVisible: false}]
});

function TilesContainer({
  isGameStarted,
  setIsGameStarted,
  isGameEnded,
  setIsGameEnded,
  areTilesShowing,
  setIsRunning,
  userName,
  time,
}) {
  const [clickedImagePaths, setImagePaths] = useState([]);
  const [cardState, setCardsState] = useState(cards);
  const [leaderboardData, setLeaderboardData] = useState([]);

  cardState.map((card) => ({ ...card, isVisible: false }));
  const invisibleCards = cardState.filter((card) => card.isVisible === false);

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

  useEffect(() => {
    if (invisibleCards.length === 0 && !areTilesShowing) {
      setIsRunning(false);
      axios
        .post("http://localhost:3000/API/post", {
          name: userName,
          time: formatTimeToString(time),
        })
        .then(() => {
          axios.get("http://localhost:3000/API/getAll").then((data) => {
            setLeaderboardData(data.data);
            setIsGameEnded(true);
            setIsGameStarted(false);
          });
        })
        .catch(() => {});
    }
  }, [areTilesShowing, invisibleCards.length, setIsRunning, userName, time]);

  if (isGameEnded) {
    return (
      <div>
        <Leaderboard leaderboardData={leaderboardData} />
      </div>
    );
  }
  return (
    <div className="TileContainer">
      {cardState.map((element) => (
        <Tile
          key={element.ID}
          isGameStarted={isGameStarted}
          clickedImagePaths={clickedImagePaths}
          cardState={cardState}
          pictureTile={element.path}
          index={element.ID}
          setCardsState={setCardsState}
          setImagePath={setImagePaths}
          isVisible={element.isVisible}
        />
      ))}
    </div>
  );
}

export default TilesContainer;
