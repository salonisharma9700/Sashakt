// Mcq5.js

import React, { useState } from "react";
import './Mcq1.css';

const Mcq1 = () => {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "Which core principle of the United Nations Convention on the Rights of the Child (CRC) is discussed in the paragraph?",
      options: [
        { id: 0, text: "Right to education", isCorrect: false },
        { id: 1, text: "Right to survival", isCorrect: true },
        { id: 2, text: "Right to participation", isCorrect: false },
        { id: 3, text: "Right against discrimination", isCorrect: false },
      ],
    },
    {
      text: "What is the United Nations Convention on the Rights of the Child (CRC)?",
      options: [
        { id: 0, text: "A regional treaty", isCorrect: false },
        { id: 1, text: "An economic agreement", isCorrect: false },
        { id: 2, text: "A human rights treaty", isCorrect: true },
        { id: 3, text: "A cultural convention", isCorrect: false },
      ],
    },
    {
      text: "What does the right to survival encompass?",
      options: [
        { id: 0, text: "Ensuring only survival of children", isCorrect: false },
        { id: 1, text: "Ensuring children thrive as well", isCorrect: true },
        { id: 2, text: "Promoting discrimination", isCorrect: false },
        { id: 3, text: "Limiting children's rights", isCorrect: false },
      ],
    },
    {
      text: "Who plays a crucial role in upholding the right to survival for children?",
      options: [
        { id: 0, text: "Children only", isCorrect: false },
        { id: 1, text: "International organizations only", isCorrect: false },
        { id: 2, text: "Governments, international organizations, and communities", isCorrect: true },
        { id: 3, text: "Local communities only", isCorrect: false },
      ],
    },
    {
      text: "Which is described as the most widely ratified human rights treaty in the world?",
      options: [
        { id: 0, text: "Universal Declaration of Human Rights", isCorrect: false },
        { id: 1, text: "International Covenant on Civil and Political Rights", isCorrect: false },
        { id: 2, text: "United Nations Convention on the Rights of the Child (CRC)", isCorrect: true },
        { id: 3, text: "United Nations Charter", isCorrect: false },
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
