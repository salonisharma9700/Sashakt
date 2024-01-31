import React, { useState } from "react";
import './Mcq1.css' ;
const Mcq1 = () => {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "At what levels does the right to development call for equitable and sustainable development?",
      options: [
        { id: 0, text: "Only at the national level", isCorrect: false },
        { id: 1, text: "Only at the international level", isCorrect: false },
        { id: 2, text: "Only at the cultural level", isCorrect: false },
        { id: 3, text: "Both at the national and international levels", isCorrect: true },
      ],
    },
    {
      text: "In what context is the right to development often discussed?",
      options: [
        { id: 0, text: "Poverty reduction", isCorrect: true },
        { id: 1, text: "Technological advancements", isCorrect: false },
        { id: 2, text: "Environmental conservation", isCorrect: false },
        { id: 3, text: "Human rights violations", isCorrect: false},
      ],
    },
    {
      text: "What is emphasized in the context of the right to development?",
      options: [
        { id: 0, text: "Economic growth only", isCorrect: false},
        { id: 1, text: "Equitable and sustainable development", isCorrect: true },
        { id: 2, text: "Political dominance", isCorrect: false },
        { id: 3, text: "Cultural exclusivity", isCorrect: false },
      ],
    },
    {
      text: "What does the right to development encompass?",
      options: [
        { id: 0, text: "Only economic development", isCorrect: false },
        { id: 1, text: "Economic and social development", isCorrect: true },
        { id: 2, text: "Social and cultural development", isCorrect: false },
        { id: 3, text: " Political development only", isCorrect: false },
      ],
    },
    {
      text: "How is the right to development described in the passage?",
      options: [
        { id: 0, text: "A narrow concept", isCorrect: false },
        { id: 1, text: "A broader concept", isCorrect: true },
        { id: 2, text: "A political ideology", isCorrect: false },
        { id: 3, text: "A cultural principle", isCorrect: false },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }
  };

  const resetButton = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  };

  return(
    <div className="edu-quiz" style={{ backgroundImage: `url("ag2images/homepic2.jpg")`  }}>
    <div className="edu-quiz">

      {/* Current score */}
      <h1 className="ag2-hscore">Current Score:{score}</h1>

      {showFinalResults ? (
        /* Final Results */
        <div className="ag2-quiz-result">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} is Correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => resetButton()} className="btn btn-danger">
            Restart Game
          </button>
        </div>
      ) : (
        /* Question Card */
        <div className="ag2-quiz">
          <h1>
            Question {currentQuestion + 1} out of {questions.length}
          </h1>
          <h3>{questions[currentQuestion].text}</h3>
          <ul className="ag2-ul-quiz">
            {questions[currentQuestion].options.map((option) => {
              return (
                <li className="ag2-li-quiz"
                  onClick={() => optionClicked(option.isCorrect)}
                  key={option.id}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  </div>
  );
};
export default Mcq1;
