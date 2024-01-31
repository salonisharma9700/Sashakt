// Mcq3.js

import React, { useState } from "react";
import './Mcq1.css';

const Mcq1 = () => {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "Which international instrument prominently recognizes the right to protection for children?",
      options: [
        { id: 0, text: "United Nations Charter", isCorrect: false },
        { id: 1, text: "Universal Declaration of Human Rights", isCorrect: false },
        { id: 2, text: "United Nations Convention on the Rights of the Child (CRC)", isCorrect: true },
        { id: 3, text: "International Covenant on Civil and Political Rights", isCorrect: false },
      ],
    },
    {
      text: "When was the United Nations Convention on the Rights of the Child (CRC) adopted?",
      options: [
        { id: 0, text: "1945", isCorrect: false },
        { id: 1, text: "1989", isCorrect: true },
        { id: 2, text: "1966", isCorrect: false },
        { id: 3, text: "1995", isCorrect: false },
      ],
    },
    {
      text: "What does the CRC outline?",
      options: [
        { id: 0, text: "Only civil and political rights of children", isCorrect: false },
        { id: 1, text: "Only economic rights of children", isCorrect: false },
        { id: 2, text: "Comprehensive rights including civil, political, economic, social, and cultural rights of children", isCorrect: true },
        { id: 3, text: "Only cultural rights of children", isCorrect: false },
      ],
    },
    {
      text: "Why is the right to protection considered a fundamental aspect of child rights?",
      options: [
        { id: 0, text: "To limit the freedom of children", isCorrect: false },
        { id: 1, text: "To enhance economic rights", isCorrect: false },
        { id: 2, text: "To safeguard children's well-being", isCorrect: true },
        { id: 3, text: "To promote discrimination", isCorrect: false },
      ],
    },
    {
      text: "What type of treaty is the CRC?",
      options: [
        { id: 0, text: "Comprehensive treaty covering various rights of children", isCorrect: true },
        { id: 1, text: "Political treaty", isCorrect: false },
        { id: 2, text: "Economic treaty ", isCorrect: false },
        { id: 3, text: "Cultural treaty", isCorrect: false },
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

  return (
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

