import React, { useEffect, useState } from "react";
import "./wam.css";
import axios from 'axios';

const PopUp = ({ message, onClose }) => (
  <div className="wam-popup">
    <div className="wam-popup-content">
      <p>{message}</p>
      
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

const WaGame = () => {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [moles, setMoles] = useState(new Array(9).fill(false));
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([
    {
      question: "I hope you are enjoying playing this game!!! What do you think is playing your right? ",
      options: ["NO", "YES", "MAYBE"],
      correctAnswer: "YES",
    },
    {
      question: "Having Fun Playing Right!!! What if someone stops you from playing? What would you do? ",
      options: [
        "Ignore and Continue Playing",
        "Playing is My Right! I educate that they are violating my right",
        "Stop the Game",
      ],
      correctAnswer: "Playing is My Right! I educate that they are violating my right",
    },
    {
      question: "You are hitting the mole in this game...what do you think is it appropriate to hit someone?",
      options: ["YES We can hit anyone", "NO! we shouldn't it is a child abuse violation", "Sometimes we can hit"],
      correctAnswer: "NO! we shouldn't it is a child abuse violation",
    },
    {
      question: "You are hitting the mole What if someone hits you? What would you do??",
      options: [
        "I will start crying",
        "I will hit them back",
        "This is Child Abuse Violation I will report them",
      ],
      correctAnswer: "This is Child Abuse Violation I will report them",
    },
  ]);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const authToken = localStorage.getItem('token');

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * moles.length);
      setMoleVisibility(randomIndex, true);
      setTimeout(() => {
        setMoleVisibility(randomIndex, false);
      }, 900);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [moles]);

  async function saveDataToServer(endpoint, data) {
    try {
      await axios.post(endpoint, data, {
        headers: {
          'auth-token': authToken,
          'Content-Type': 'application/json',
        },
      });
      console.log('Data saved to the server.');
    } catch (error) {
      console.error('Error saving data to server:', error);
    }
  }
  
  const scoreData = { score: score, level: level - 1, isCompleted: true };
  const quizData = { level: level - 1, isCompleted: true };
  
  saveDataToServer('http://localhost:5000/api/game/wagascore', scoreData);
  saveDataToServer('http://localhost:5000/api/quiz/wagasave', quizData);
  

  function wackMole(index) {
    if (!moles[index]) return;

    setMoleVisibility(index, false);
    setScore((prevScore) => prevScore + 1);

    if ((score + 1) % 5 === 0 && !quizCompleted) {
      setLevel((prevLevel) => prevLevel + 1);
      setQuizCompleted(false);

      if (quizQuestions.length === 0) {
        setQuizQuestions([]);
      }

      const shuffledQuestions = shuffleArray(quizQuestions);

      const questionsForLevel = shuffledQuestions.splice(0, 2);

      setCurrentQuestions(questionsForLevel);
      setShowLevelUp(true);
      setShowQuiz(true); 
    }
  }

  function startQuiz() {
    setShowQuiz(true);
  }

  
  function closeLevelUp() {
    const selectedAnswers = Array.from(document.querySelectorAll('input[type="radio"]:checked')).map(input => input.value);
  
    if (selectedAnswers.length === currentQuestions.length) {
      const allCorrect = currentQuestions.every((question, index) => question.correctAnswer === selectedAnswers[index]);
  
      if (allCorrect) {
        setPopUpMessage("Congratulations! You Cleared this Level!!!");
        setShowPopUp(true);
      } else {
        setPopUpMessage("Oops! Some answers are incorrect. Please try again or rewatch videos and attempt again.");
        setShowPopUp(true);
        setQuizCompleted(false); 
        setQuizQuestions([]); 
        return; 
      }
    } else {
      setPopUpMessage("Please answer all questions before submitting.");
      setShowPopUp(true);
      return; 
    }
  
    setShowLevelUp(false);
    setShowQuiz(false);
  }
  
  function handleAnswer(questionIndex, selectedOption) {
    const currentQuestion = currentQuestions[questionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
      console.log("Correct!");
    } else {
      console.log("Incorrect!");
    }

    const allCorrect = currentQuestions.every(
      (question) => question.correctAnswer === selectedOption
    );

    setQuizCompleted(allCorrect);
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function setMoleVisibility(index, isVisible) {
    setMoles((currMoles) => {
      const newMoles = [...currMoles];
      newMoles[index] = isVisible;
      return newMoles;
    });
  }

  return (
    <div className="wagame">
      
      <div className="wam-grid">
        {moles.map((isMole, idx) => (
          <img
            key={idx}
            src={isMole ? "./mole.png" : "./hole.png"}
            alt={isMole ? "Mole" : "Hole"}
            onClick={() => {
              wackMole(idx);
            }}
          />
        ))}
        
      </div>
      
      <div className="score-wam">
        <h1>Score:{score}</h1>
        
      </div>
      <div className="wam-lev">
        <h1>Level:{level}</h1>
      </div>
      
      
      {showLevelUp && (
        <div className="wam-level-up-popup">
          <p>Congratulations! You've reached level {level}!</p>
          {!showQuiz ? (
            <button onClick={startQuiz}>Start Quiz</button>
          ) : (
            <div>
              {currentQuestions.map((question, questionIndex) => (
                <div key={questionIndex}>
                  <p>{question.question}</p>
                  <div>
                    {question.options.map((option, optionIndex) => (
                      <div key={optionIndex}>
                        <label>
                          <input
                            type="radio"
                            name={`question_${questionIndex}`}
                            value={option}
                            onChange={() => handleAnswer(questionIndex, option)}
                          />
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <button onClick={closeLevelUp}>Submit</button>
            </div>
          )}
        </div>
      )}

      {showPopUp && <PopUp message={popUpMessage} onClose={() => setShowPopUp(false)} />}
    </div>
  );
};

export default WaGame;
