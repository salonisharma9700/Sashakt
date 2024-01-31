import React, { useState } from 'react';
import './Hgame.css';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import wamImage from './wambg.png';
import cgamImage from './cgamebd.png'; 
import leftArrowIcon from './back-arrow.png';
import rightArrowIcon from './right-arrow.png';
import puzzlebg from './puzzlebg.jpg'

const Playgame = () => {
  const navigate = useNavigate();

  const gameCards = [
    
    {  title: 'Puzzle Game',
       description: 'Play a very intresting Puzzle Game, also a very interesting quiz awaits you!!',
       image: puzzlebg, 
       onClick: () => navigate('/game1/l1'),

    },
    {
      title: 'Whack A Mole Game',
      description: 'Whack a Mole to score points, also a very interesting quiz awaits you!!',
      image: wamImage, 
      onClick: () => navigate('/WaGa'),
    },
    {
      title: 'Crush Game',
      description: 'Crush candies to score points, also a very interesting quiz awaits you!!',
      image: cgamImage, 
      onClick: () => navigate('/cgam'),
    },
    
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % gameCards.length);
  };

  const prevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + gameCards.length) % gameCards.length);
  };

  return (
    <div className="gbg">
      <div className="psl">
        <h1 className="playhead">Play Games </h1>
      </div>

      <div className="ccgame">
        <Card className="gamecard1">
          <Card.Body>
            <Card.Title>{gameCards[currentCardIndex].title}</Card.Title>
            <Card.Img variant="top" src={gameCards[currentCardIndex].image} alt="Card Image" />
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>{gameCards[currentCardIndex].description}</Card.Text>
            <button onClick={gameCards[currentCardIndex].onClick} className="play">
              Play Now
            </button>
          </Card.Body>
        </Card>

        {/* Navigation arrows with image icons */}
        <div className="navigation-arrows">
          <button onClick={prevCard} className="hgame-arrow-button">
            <img src={leftArrowIcon} alt="Left Arrow" />
          </button>
          <button onClick={nextCard} className="hgame-arrow-button">
            <img src={rightArrowIcon} alt="Right Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Playgame;
