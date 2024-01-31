import React from 'react';
import './gamag2.css';

const Data = [
  {
    id: 1,
    name: "react",
    img: "/ag2images/RTedu.jpeg",
    matched: false,
  },
  {
    id: 2,
    name: "java",
    img:
      "/ag2images/RTdev.png",
    matched: false,
  },
  {
    id: 3,
    name: "css",
    img:
      "/ag2images/RTdis.jpeg",
    matched: false,
  },
  {
    id: 4,
    name: "node",
    img:
      "/ag2images/RTpro.jpeg",
    matched: false,
  },
  {
    id: 5,
    name: "html",
    img:
      "/ag2images/RTpar.png",
    matched: false,
  },
  {
    id: 6,
    name: "js",
    img:
      "/ag2images/RTsur.jpeg",
    matched: false,
  },
  {
    id: 7,
    name: "react",
    img: "/ag2images/RTedu.jpeg",
    matched: false,
  },
  {
    id: 8,
    name: "java",
    img:
      "/ag2images/RTdev.png",
    matched: false,
  },
  {
    id: 9,
    name: "css",
    img:
      "/ag2images/RTdis.jpeg",
    matched: false,
  },
  {
    id: 10,
    name: "node",
    img:
      "/ag2images/RTpro.jpeg",
    matched: false,
  },
  {
    id: 11,
    name: "html",
    img:
      "/ag2images/RTpar.png",
    matched: false,
  },
  {
    id: 12,
    name: "js",
    img:
      "/ag2images/RTsur.jpeg",
    matched: false,
  },

];
function Card({ item, handleSelectedCards, toggled, stopflip }) {
  return (
    <div className="mem-item">
      <div className={toggled ? "memtoggled" : ""}>
        <img className="mem-face" src={item.img} alt="face" />
        <div
          className="mem-back"
          onClick={() => !stopflip && handleSelectedCards(item)}
        >
          {" "}
        </div>
      </div>
    </div>
  );
}

function GameBoard() {
  const [cardsArray, setCardsArray] = React.useState([]);
  const [moves, setMoves] = React.useState(0);
  const [firstCard, setFirstCard] = React.useState(null);
  const [secondCard, setSecondCard] = React.useState(null);
  const [stopFlip, setStopFlip] = React.useState(false);
  const [won, setWon] = React.useState(0);

  function NewGame() {
    setTimeout(() => {
      const randomOrderArray = Data.sort(() => 0.5 - Math.random());
      setCardsArray(randomOrderArray);
      setMoves(0);
      setFirstCard(null);
      setSecondCard(null);
      setWon(0);
    }, 1200);
  }

  function handleSelectedCards(item) {
    if (firstCard !== null && firstCard.id !== item.id) {
      setSecondCard(item);
    } else {
      setFirstCard(item);
    }
  }

  React.useEffect(() => {
    if (firstCard && secondCard) {
      setStopFlip(true);
      if (firstCard.name === secondCard.name) {
        setCardsArray((prevArray) => {
          return prevArray.map((unit) => {
            if (unit.name === firstCard.name) {
              return { ...unit, matched: true };
            } else {
              return unit;
            }
          });
        });
        setWon((preVal) => preVal + 1);
        removeSelection();
      } else {
        setTimeout(() => {
          removeSelection();
        }, 1000);
      }
    }
  }, [firstCard, secondCard]);

  function removeSelection() {
    setFirstCard(null);
    setSecondCard(null);
    setStopFlip(false);
    setMoves((prevValue) => prevValue + 1);
  }

  React.useEffect(() => {
    NewGame();
  }, []);

  return (
    <div className="mem-gam" style={{ backgroundImage: `url("ag2images/homepic2.jpg")`  }}>
      <div className="memMain" >
        <div className="mem-header">
          <h1 className="mg-heading">Memory Game</h1>
        </div>
        <div className="mem-board">
          {cardsArray.map((item) => (
            <Card
              item={item}
              key={item.id}
              handleSelectedCards={handleSelectedCards}
              toggled={
                item === firstCard || item === secondCard || item.matched === true
              }
              stopflip={stopFlip}
            />
          ))}
        </div>

        {won !== 6 ? (
          <div className="mem-comments">Moves: {moves}</div>
        ) : (
          <div className="mem-comments">You Won in {moves} moves!</div>
        )}
        <button className="mem-but" onClick={NewGame}>
          New Game
        </button>
      </div>
    </div>
  );
}

export default GameBoard;