// import React, { useEffect, useState } from 'react';
// import ScoreBoard from './ScoreBoard'
// import blueCandy from './cgamimg/blueCandy.png'
// import greenCandy from './cgamimg/greenCandy.png'
// import orangeCandy from './cgamimg/orangeCandy.png'
// import purpleCandy from './cgamimg/purpleCandy.png'
// import redCandy from './cgamimg/redCandy.png'
// import yellowCandy from './cgamimg/yellowCandy.png'
// import blank from './cgamimg/blank.png'
// import "./cgam.css"
// const PopUp = ({ message, onClose }) => (
//     <div className="popup">
//       <div className="popup-content">
//         <p>{message}</p>
        
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// const width = 8;
// const candyColors = [blueCandy, orangeCandy, purpleCandy, redCandy, yellowCandy, greenCandy];

// const Gameapp = () => {
//   const [currentColorArrangement, setCurrentColorArrangement] = useState([]);
//   const [squareBeingDragged, setSquareBeingDragged] = useState(null);
//   const [squareBeingReplaced, setSquareBeingReplaced] = useState(null);
//   const [scoreDisplay, setScoreDisplay] = useState(0);
//   const [gameStarted, setGameStarted] = useState(false);
//   const [showPopUp, setShowPopUp] = useState(false);
//   const [level, setLevel] = useState(1);
//   const [popUpMessage, setPopUpMessage] = useState("");
// //   const [showPopUp, setShowPopUp] = useState(false);
//   const [showLevelUp, setShowLevelUp] = useState(false);
//   const [showQuiz, setShowQuiz] = useState(false);
//   const [quizQuestions, setQuizQuestions] = useState([
//     // Add your quiz questions here
//   ]);
//   const [currentQuestions, setCurrentQuestions] = useState([]);
//   const [quizCompleted, setQuizCompleted] = useState(false);

//   const checkForColumnOfFour = () => {
//     for (let i = 0; i <= 39; i++) {
//       const columnOfFour = [i, i + width, i + width * 2, i + width * 3];
//       const decidedColor = currentColorArrangement[i];
//       const isBlank = currentColorArrangement[i] === blank;

//       if (columnOfFour.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
//         if (gameStarted) {
//           setScoreDisplay((score) => score + 2);
//           columnOfFour.forEach(square => (currentColorArrangement[square] = blank));
//           return true;
//         }
//         return false;
//       }
//     }
//   };

//   const checkForRowOfFour = () => {
//     for (let i = 0; i < 64; i++) {
//       const rowOfFour = [i, i + 1, i + 2, i + 3];
//       const decidedColor = currentColorArrangement[i];
//       const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64];
//       const isBlank = currentColorArrangement[i] === blank;

//       if (notValid.includes(i)) continue;

//       if (rowOfFour.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
//         if (gameStarted) {
//           setScoreDisplay((score) => score + 2);
//           rowOfFour.forEach(square => (currentColorArrangement[square] = blank));
//           return true;
//         }
//         return false;
//       }
//     }
//   };

//   const checkForColumnOfThree = () => {
//     for (let i = 0; i <= 47; i++) {
//       const columnOfThree = [i, i + width, i + width * 2];
//       const decidedColor = currentColorArrangement[i];
//       const isBlank = currentColorArrangement[i] === blank;

//       if (columnOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
//         if (gameStarted) {
//           setScoreDisplay((score) => score + 1);
//           columnOfThree.forEach(square => (currentColorArrangement[square] = blank));
//           return true;
//         } else {
//           return false;
//         }
//       }
//     }
//   };

  // const checkForRowOfThree = () => {
  //   for (let i = 0; i < 64; i++) {
  //     const rowOfThree = [i, i + 1, i + 2];
  //     const decidedColor = currentColorArrangement[i];
  //     const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64];
  //     const isBlank = currentColorArrangement[i] === blank;

  //     if (notValid.includes(i)) continue;

  //     if (rowOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
  //       if (gameStarted) {
  //         setScoreDisplay((score) => score + 1);
  //         rowOfThree.forEach(square => (currentColorArrangement[square] = blank));
  //         return true;
  //       }
  //       return false;
  //     }
  //   }
  // };

//   const moveIntoSquareBelow = () => {
//     for (let i = 0; i <= 55; i++) {
//       const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
//       const isFirstRow = firstRow.includes(i);

//       if (isFirstRow && currentColorArrangement[i] === blank) {
//         let randomNumber = Math.floor(Math.random() * candyColors.length);
//         currentColorArrangement[i] = candyColors[randomNumber];
//       }

//       if (currentColorArrangement[i + width] === blank) {
//         currentColorArrangement[i + width] = currentColorArrangement[i];
//         currentColorArrangement[i] = blank;
//       }
//     }
//   };

//   const dragStart = (e) => {
//     setGameStarted(true);
//     setSquareBeingDragged(e.target);
//   };

//   const dragDrop = (e) => {
//     setSquareBeingReplaced(e.target);
//   };

//   const dragEnd = () => {
//     const squareBeingDraggedId = parseInt(squareBeingDragged.getAttribute('data-id'));
//     const squareBeingReplacedId = parseInt(squareBeingReplaced.getAttribute('data-id'));

//     currentColorArrangement[squareBeingReplacedId] = squareBeingDragged.getAttribute('src');
//     currentColorArrangement[squareBeingDraggedId] = squareBeingReplaced.getAttribute('src');

//     const validMoves = [
//       squareBeingDraggedId - 1,
//       squareBeingDraggedId - width,
//       squareBeingDraggedId + 1,
//       squareBeingDraggedId + width,
//     ];

//     const validMove = validMoves.includes(squareBeingReplacedId);

//     if (gameStarted) {
//       const isAColumnOfFour = checkForColumnOfFour();
//       const isARowOfFour = checkForRowOfFour();
//       const isAColumnOfThree = checkForColumnOfThree();
//       const isARowOfThree = checkForRowOfThree();

//       if (squareBeingReplacedId && validMove && (isARowOfThree || isARowOfFour || isAColumnOfFour || isAColumnOfThree)) {
//         setSquareBeingDragged(null);
//         setSquareBeingReplaced(null);
//       } else {
//         currentColorArrangement[squareBeingReplacedId] = squareBeingReplaced.getAttribute('src');
//         currentColorArrangement[squareBeingDraggedId] = squareBeingDragged.getAttribute('src');
//         setCurrentColorArrangement([...currentColorArrangement]);
//       }
//     }
//   };

//   const createBoard = () => {
//     const randomColorArrangement = [];
//     for (let i = 0; i < width * width; i++) {
//       const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)];
//       randomColorArrangement.push(randomColor);
//     }
//     setCurrentColorArrangement(randomColorArrangement);
//   };

//   useEffect(() => {
//     createBoard();
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       checkForColumnOfFour();
//       checkForRowOfFour();
//       checkForColumnOfThree();
//       checkForRowOfThree();
//       moveIntoSquareBelow();
//       setCurrentColorArrangement([...currentColorArrangement]);

//       if ((scoreDisplay + 1) % 5 === 0 && !quizCompleted) {
//         setLevel((prevLevel) => prevLevel + 1);
//         setQuizCompleted(false);

//         if (quizQuestions.length > 0) {
//           const shuffledQuestions = shuffleArray(quizQuestions);
//           const questionsForLevel = shuffledQuestions.splice(0, 2);
//           setCurrentQuestions(questionsForLevel);
//           setShowLevelUp(true);
//           setShowQuiz(true);
//         }
//       }
//     }, 100);

//     return () => clearInterval(timer);
//   }, [
//     checkForColumnOfFour,
//     checkForRowOfFour,
//     checkForColumnOfThree,
//     checkForRowOfThree,
//     moveIntoSquareBelow,
//     currentColorArrangement,
//     gameStarted,
//     scoreDisplay,
//     quizCompleted,
//     quizQuestions,
//   ]);

//   const startQuiz = () => {
//     setShowQuiz(true);
//   };

//   const closeLevelUp = () => {
//     const selectedAnswers = Array.from(document.querySelectorAll('input[type="radio"]:checked')).map((input) => input.value);

//     if (selectedAnswers.length === currentQuestions.length) {
//       const allCorrect = currentQuestions.every((question, index) => question.correctAnswer === selectedAnswers[index]);

//       if (allCorrect) {
//         // Show badge or other level-up rewards
//         setPopUpMessage("Congratulations! You cleared a Level!");
//         setShowPopUp(true);
//       } else {
//         setPopUpMessage("Oops! Some answers are incorrect. Please try again or rewatch videos and attempt again.");
//         setShowPopUp(true);
//         setQuizCompleted(false);
//         setQuizQuestions([]);
//         return;
//       }
//     } else {
//       setPopUpMessage("Please answer all questions before submitting.");
//       setShowPopUp(true);
//       return;
//     }

//     setShowLevelUp(false);
//     setShowQuiz(false);
//   };

//   const handleAnswer = (questionIndex, selectedOption) => {
//     const currentQuestion = currentQuestions[questionIndex];

//     if (selectedOption === currentQuestion.correctAnswer) {
//       console.log("Correct!");
//     } else {
//       console.log("Incorrect!");
//     }

//     const allCorrect = currentQuestions.every((question) => question.correctAnswer === selectedOption);

//     setQuizCompleted(allCorrect);
//   };

//   const shuffleArray = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   };

//   return (
//     <div className="app">
//       <div className="game">
//         {currentColorArrangement.map((candyColor, index) => (
//           <img
//             key={index}
//             src={candyColor}
//             alt={`candy_${index}`}
//             onDragStart={dragStart}
//             onDragOver={(e) => e.preventDefault()}
//             onDragEnter={(e) => e.preventDefault()}
//             onDragLeave={(e) => e.preventDefault()}
//             onDrop={dragDrop}
//             onDragEnd={dragEnd}
//           />
//         ))}
//       </div>
//       <div className="sb">
//         <ScoreBoard score={scoreDisplay} />
//       </div>

//       {showLevelUp && (
//         <div className="level-up-popup">
//           {/* Add level-up popup content here */}
//           <button onClick={startQuiz}>Start Quiz</button>
//         </div>
//       )}

//       {showQuiz && (
//         <div className="quiz-popup">
//           {/* Add quiz content here */}
//           {currentQuestions.map((question, index) => (
//             <div key={index}>
//               <p>{question.question}</p>
//               {question.options.map((option, optionIndex) => (
//                 <div key={optionIndex}>
//                   <input
//                     type="radio"
//                     name={`question_${index}`}
//                     value={option}
//                     onChange={() => handleAnswer(index, option)}
//                   />
//                   <label>{option}</label>
//                 </div>
//               ))}
//             </div>
//           ))}
//           <button onClick={closeLevelUp}>Submit Answers</button>
//         </div>
//       )}

//       <div className="popup">
//         {showPopUp && <PopUp message={popUpMessage} onClose={() => setShowPopUp(false)} />}
//       </div>
//     </div>
//   );
// };

// export default Gameapp;


// import React, { useEffect, useState } from 'react';
// import ScoreBoard from './ScoreBoard';
// import blueCandy from './cgamimg/blueCandy.png';
// import greenCandy from './cgamimg/greenCandy.png';
// import orangeCandy from './cgamimg/orangeCandy.png';
// import purpleCandy from './cgamimg/purpleCandy.png';
// import redCandy from './cgamimg/redCandy.png';
// import yellowCandy from './cgamimg/yellowCandy.png';
// import blank from './cgamimg/blank.png';
// import './cgam.css';

// const width = 8;
// const candyColors = [blueCandy, orangeCandy, purpleCandy, redCandy, yellowCandy, greenCandy];

// const Gameapp = () => {
//   const [currentColorArrangement, setCurrentColorArrangement] = useState([]);
//   const [squareBeingDragged, setSquareBeingDragged] = useState(null);
//   const [squareBeingReplaced, setSquareBeingReplaced] = useState(null);
//   const [scoreDisplay, setScoreDisplay] = useState(0);
//   const [gameStarted, setGameStarted] = useState(false);

//   const checkForColumnOfFour = () => {
//     for (let i = 0; i <= 39; i++) {
//       const columnOfFour = [i, i + width, i + width * 2, i + width * 3];
//       const decidedColor = currentColorArrangement[i];
//       const isBlank = currentColorArrangement[i] === blank;

//       if (columnOfFour.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
//         if (gameStarted) {
//           setScoreDisplay((score) => score + 2);
//           columnOfFour.forEach(square => (currentColorArrangement[square] = blank));
//           return true;
//         }
//         return false;
//       }
//     }
//   };

//   const checkForRowOfFour = () => {
//     for (let i = 0; i < 64; i++) {
//       const rowOfFour = [i, i + 1, i + 2, i + 3];
//       const decidedColor = currentColorArrangement[i];
//       const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64];
//       const isBlank = currentColorArrangement[i] === blank;

//       if (notValid.includes(i)) continue;

//       if (rowOfFour.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
//         if (gameStarted) {
//           setScoreDisplay((score) => score + 2);
//           rowOfFour.forEach(square => (currentColorArrangement[square] = blank));
//           return true;
//         }
//         return false;
//       }
//     }
//   };

//   const checkForColumnOfThree = () => {
//     for (let i = 0; i <= 47; i++) {
//       const columnOfThree = [i, i + width, i + width * 2];
//       const decidedColor = currentColorArrangement[i];
//       const isBlank = currentColorArrangement[i] === blank;

//       if (columnOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
//         if (gameStarted) {
//           setScoreDisplay((score) => score + 1);
//           columnOfThree.forEach(square => (currentColorArrangement[square] = blank));
//           return true;
//         } else {
//           return false;
//         }
//       }
//     }
//   };

//   const checkForRowOfThree = () => {
//     for (let i = 0; i < 64; i++) {
//       const rowOfThree = [i, i + 1, i + 2];
//       const decidedColor = currentColorArrangement[i];
//       const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64];
//       const isBlank = currentColorArrangement[i] === blank;

//       if (notValid.includes(i)) continue;

//       if (rowOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
//         if (gameStarted) {
//           setScoreDisplay((score) => score + 1);
//           rowOfThree.forEach(square => (currentColorArrangement[square] = blank));
//           return true;
//         }
//         return false;
//       }
//     }
//   };

//   const moveIntoSquareBelow = () => {
//     for (let i = 0; i <= 55; i++) {
//       const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
//       const isFirstRow = firstRow.includes(i);

//       if (isFirstRow && currentColorArrangement[i] === blank) {
//         let randomNumber = Math.floor(Math.random() * candyColors.length);
//         currentColorArrangement[i] = candyColors[randomNumber];
//       }

//       if (currentColorArrangement[i + width] === blank) {
//         currentColorArrangement[i + width] = currentColorArrangement[i];
//         currentColorArrangement[i] = blank;
//       }
//     }
//   };

//   const dragStart = (e) => {
//     setGameStarted(true);
//     setSquareBeingDragged(e.target);
//   };

//   const dragDrop = (e) => {
//     setSquareBeingReplaced(e.target);
//   };

//   const dragEnd = () => {
//     const squareBeingDraggedId = parseInt(squareBeingDragged.getAttribute('data-id'));
//     const squareBeingReplacedId = parseInt(squareBeingReplaced.getAttribute('data-id'));

//     currentColorArrangement[squareBeingReplacedId] = squareBeingDragged.getAttribute('src');
//     currentColorArrangement[squareBeingDraggedId] = squareBeingReplaced.getAttribute('src');

//     const validMoves = [
//       squareBeingDraggedId - 1,
//       squareBeingDraggedId - width,
//       squareBeingDraggedId + 1,
//       squareBeingDraggedId + width,
//     ];

//     const validMove = validMoves.includes(squareBeingReplacedId);

//     if (gameStarted) {
//       const isAColumnOfFour = checkForColumnOfFour();
//       const isARowOfFour = checkForRowOfFour();
//       const isAColumnOfThree = checkForColumnOfThree();
//       const isARowOfThree = checkForRowOfThree();

//       if (squareBeingReplacedId && validMove && (isARowOfThree || isARowOfFour || isAColumnOfFour || isAColumnOfThree)) {
//         setSquareBeingDragged(null);
//         setSquareBeingReplaced(null);
//       } else {
//         currentColorArrangement[squareBeingReplacedId] = squareBeingReplaced.getAttribute('src');
//         currentColorArrangement[squareBeingDraggedId] = squareBeingDragged.getAttribute('src');
//         setCurrentColorArrangement([...currentColorArrangement]);
//       }
//     }
//   };

//   const createBoard = () => {
//     const randomColorArrangement = [];
//     for (let i = 0; i < width * width; i++) {
//       const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)];
//       randomColorArrangement.push(randomColor);
//     }
//     setCurrentColorArrangement(randomColorArrangement);
//   };

//   useEffect(() => {
//     createBoard();
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       checkForColumnOfFour();
//       checkForRowOfFour();
//       checkForColumnOfThree();
//       checkForRowOfThree();
//       moveIntoSquareBelow();
//       setCurrentColorArrangement([...currentColorArrangement]);
//     }, 100);

//     return () => clearInterval(timer);
//   }, [
//     checkForColumnOfFour,
//     checkForRowOfFour,
//     checkForColumnOfThree,
//     checkForRowOfThree,
//     moveIntoSquareBelow,
//     currentColorArrangement,
//   ]);

//   return (
//     <div className="app">
//       <div className="game">
//         {currentColorArrangement.map((candyColor, index) => (
//           <img
//             key={index}
//             src={candyColor}
//             alt={`candy_${index}`}
//             onDragStart={dragStart}
//             onDragOver={(e) => e.preventDefault()}
//             onDragEnter={(e) => e.preventDefault()}
//             onDragLeave={(e) => e.preventDefault()}
//             onDrop={dragDrop}
//             onDragEnd={dragEnd}
//           />
//         ))}
//       </div>
//       <div className="sb">
//         <ScoreBoard score={scoreDisplay} />
//       </div>
//     </div>
//   );
// };

// export default Gameapp;

import React, { useEffect, useState } from 'react';
import ScoreBoard from './ScoreBoard';
import blueCandy from './cgamimg/blueCandy.png';
import greenCandy from './cgamimg/greenCandy.png';
import orangeCandy from './cgamimg/orangeCandy.png';
import purpleCandy from './cgamimg/purpleCandy.png';
import redCandy from './cgamimg/redCandy.png';
import yellowCandy from './cgamimg/yellowCandy.png';
import blank from './cgamimg/blank.png';
import './cgam.css';

const width = 8
const candyColors = [
    blueCandy,
    orangeCandy,
    purpleCandy,
    redCandy,
    yellowCandy,
    greenCandy
]
const CgQuiz = () => {
  window.location.href = '/Cgquiz';
};

const Gameapp = () => {
    const [currentColorArrangement, setCurrentColorArrangement] = useState([])
    const [squareBeingDragged, setSquareBeingDragged] = useState(null)
    const [squareBeingReplaced, setSquareBeingReplaced] = useState(null)
    const [scoreDisplay, setScoreDisplay] = useState(0)
    const [gameStarted, setGameStarted] = useState(false);

    const checkForColumnOfFour = () => {
        for (let i = 0; i <= 39; i++) {
            const columnOfFour = [i, i + width, i + width * 2, i + width * 3]
            const decidedColor = currentColorArrangement[i]
            const isBlank = currentColorArrangement[i] === blank

            if (columnOfFour.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
              if (gameStarted) {
                setScoreDisplay((score) => score + 2);
                columnOfFour.forEach(square => (currentColorArrangement[square] = blank));
                return true;
              }
              return false;
            }
        }
    }

    const checkForRowOfFour = () => {
        for (let i = 0; i < 64; i++) {
            const rowOfFour = [i, i + 1, i + 2, i + 3]
            const decidedColor = currentColorArrangement[i]
            const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64]
            const isBlank = currentColorArrangement[i] === blank

            if (notValid.includes(i)) continue

            if (rowOfFour.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
              if (gameStarted) {
                setScoreDisplay((score) => score + 2);
                rowOfFour.forEach(square => (currentColorArrangement[square] = blank));
                return true;
              }
              return false;
            }
        }
    }

    const checkForColumnOfThree = () => {
        for (let i = 0; i <= 47; i++) {
            const columnOfThree = [i, i + width, i + width * 2]
            const decidedColor = currentColorArrangement[i]
            const isBlank = currentColorArrangement[i] === blank

            if (columnOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
              if (gameStarted) {
                setScoreDisplay((score) => score + 1);
                columnOfThree.forEach(square => (currentColorArrangement[square] = blank));
                return true;
              } 
              return false;
              
            }
        }
    }

    const checkForRowOfThree = () => {
        for (let i = 0; i < 64; i++) {
            const rowOfThree = [i, i + 1, i + 2]
            const decidedColor = currentColorArrangement[i]
            const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64]
            const isBlank = currentColorArrangement[i] === blank

            if (notValid.includes(i)) continue

            if (rowOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
              if (gameStarted) {
                setScoreDisplay((score) => score + 1);
                rowOfThree.forEach(square => (currentColorArrangement[square] = blank));
                return true;
              }
              return false;
            }
        }
    }

    const moveIntoSquareBelow = () => {
        for (let i = 0; i <= 55; i++) {
            const firstRow = [0, 1, 2, 3, 4, 5, 6, 7]
            const isFirstRow = firstRow.includes(i)

            if (isFirstRow && currentColorArrangement[i] === blank) {
                let randomNumber = Math.floor(Math.random() * candyColors.length)
                currentColorArrangement[i] = candyColors[randomNumber]
            }

            if ((currentColorArrangement[i + width]) === blank) {
                currentColorArrangement[i + width] = currentColorArrangement[i]
                currentColorArrangement[i] = blank
            }
        }
    }

    const dragStart = (e) => {
        setGameStarted(true);
        setSquareBeingDragged(e.target)
    }
    const dragDrop = (e) => {
        setSquareBeingReplaced(e.target)
    }
    // const dragEnd = () => {
    //     const squareBeingDraggedId = parseInt(squareBeingDragged.getAttribute('data-id'))
    //     const squareBeingReplacedId = parseInt(squareBeingReplaced.getAttribute('data-id'))

    //     currentColorArrangement[squareBeingReplacedId] = squareBeingDragged.getAttribute('src')
    //     currentColorArrangement[squareBeingDraggedId] = squareBeingReplaced.getAttribute('src')

    //     const validMoves = [
    //         squareBeingDraggedId - 1,
    //         squareBeingDraggedId - width,
    //         squareBeingDraggedId + 1,
    //         squareBeingDraggedId + width
    //     ]

    //     const validMove = validMoves.includes(squareBeingReplacedId)
    //     if (gameStarted) {
    //       const isAColumnOfFour = checkForColumnOfFour();
    //       const isARowOfFour = checkForRowOfFour();
    //       const isAColumnOfThree = checkForColumnOfThree();
    //       const isARowOfThree = checkForRowOfThree();
    
    //       if (squareBeingReplacedId && validMove && (isARowOfThree || isARowOfFour || isAColumnOfFour || isAColumnOfThree)) {
    //         setSquareBeingDragged(null);
    //         setSquareBeingReplaced(null);
    //       } else {
    //         currentColorArrangement[squareBeingReplacedId] = squareBeingReplaced.getAttribute('src');
    //         currentColorArrangement[squareBeingDraggedId] = squareBeingDragged.getAttribute('src');
    //         setCurrentColorArrangement([...currentColorArrangement]);
    //       }
    //     }
    //   };
    
    const dragEnd = () => {
      const squareBeingDraggedId = parseInt(squareBeingDragged.getAttribute('data-id'));
      const squareBeingReplacedId = parseInt(squareBeingReplaced.getAttribute('data-id'));
  
      const validMoves = [
          squareBeingDraggedId - 1,
          squareBeingDraggedId - width,
          squareBeingDraggedId + 1,
          squareBeingDraggedId + width
      ];
  
      const validMove = validMoves.includes(squareBeingReplacedId);
  
      if (gameStarted && squareBeingReplacedId && validMove) {
          currentColorArrangement[squareBeingReplacedId] = squareBeingDragged.getAttribute('src');
          currentColorArrangement[squareBeingDraggedId] = squareBeingReplaced.getAttribute('src');
  
          const isAColumnOfFour = checkForColumnOfFour();
          const isARowOfFour = checkForRowOfFour();
          const isAColumnOfThree = checkForColumnOfThree();
          const isARowOfThree = checkForRowOfThree();
  
          if (isARowOfThree || isARowOfFour || isAColumnOfFour || isAColumnOfThree) {
              setScoreDisplay(prevScore => prevScore + 2);
          } else {
              setScoreDisplay(prevScore => prevScore + 1); // Increment score for a valid move without a match
          }
  
          setSquareBeingDragged(null);
          setSquareBeingReplaced(null);
          setCurrentColorArrangement([...currentColorArrangement]);
      } else {
          setCurrentColorArrangement(prevArrangement => [...prevArrangement]); // Revert the changes
      }
  };
  
    const createBoard = () => {
        const randomColorArrangement = []
        for (let i = 0; i < width * width; i++) {
            const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
            randomColorArrangement.push(randomColor)
        }
        setCurrentColorArrangement(randomColorArrangement);
    };

    useEffect(() => {
        createBoard()
    }, [])

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         checkForColumnOfFour()
    //         checkForRowOfFour()
    //         checkForColumnOfThree()
    //         checkForRowOfThree()
    //         moveIntoSquareBelow()
    //         setCurrentColorArrangement([...currentColorArrangement])
    //     }, 100)
    //     return () => clearInterval(timer)
    // }, [checkForColumnOfFour, checkForRowOfFour, checkForColumnOfThree, checkForRowOfThree, moveIntoSquareBelow, currentColorArrangement])

    useEffect(() => {
      const timer = setInterval(() => {
          checkForColumnOfFour();
          checkForRowOfFour();
          checkForColumnOfThree();
          checkForRowOfThree();
          moveIntoSquareBelow();
          setCurrentColorArrangement((prevArrangement) => [...prevArrangement]);
      }, 100);
      return () => clearInterval(timer);
  }, [
      checkForColumnOfFour,
      checkForRowOfFour,
      checkForColumnOfThree,
      checkForRowOfThree,
      moveIntoSquareBelow,
      setCurrentColorArrangement,
  ]);
  

    return (
        <div className="app">
            <div className="game">
                {currentColorArrangement.map((candyColor, index) => (
                    <img
                        key={index}
                        src={candyColor}
                        alt={candyColor}
                        data-id={index}
                        draggable={true}
                        onDragStart={dragStart}
                        onDragOver={(e) => e.preventDefault()}
                        onDragEnter={(e) => e.preventDefault()}
                        onDragLeave={(e) => e.preventDefault()}
                        onDrop={dragDrop}
                        onDragEnd={dragEnd}
                    />
                ))}
            </div>
           <div className='sb'>
            <ScoreBoard score={scoreDisplay}/>
           </div>
           <div className='cgam-quiz'>
            <button className='cgam-quiz' onClick={CgQuiz} >Take Quiz</button>
           </div>
        </div>
    )
}

export default Gameapp;