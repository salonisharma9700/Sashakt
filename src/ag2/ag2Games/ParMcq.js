// Mcq2.js

import React, { useState } from "react";
import './Mcq1.css';

const Mcq1 = () => {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "What does the right to participation emphasize?",
      options: [
        { id: 0, text: "Personal development of children", isCorrect: false },
        { id: 1, text: "Well-being of society", isCorrect: false },
        { id: 2, text: "Both personal development and well-being of society", isCorrect: true },
        { id: 3, text: "Government policies", isCorrect: false },
      ],
    },
    {
      text: "Who is encouraged to create opportunities for meaningful participation of children?",
      options: [
        { id: 0, text: "Children only", isCorrect: false },
        { id: 1, text: "Families and communities", isCorrect: false },
        { id: 2, text: "Governments, families, communities, and stakeholders", isCorrect: true },
        { id: 3, text: "Society as a whole", isCorrect: false },
      ],
    },
    {
      text: "What does the right to participation contribute to?",
      options: [
        { id: 0, text: "Personal development of children only", isCorrect: false },
        { id: 1, text: "Well-being of society only", isCorrect: false },
        { id: 2, text: "Both personal development and well-being of society", isCorrect: true },
        { id: 3, text: "Government decision-making", isCorrect: false },
      ],
    },
    {
      text: "What is the focus of the right to participation in relation to children?",
      options: [
        { id: 0, text: "Limiting their involvement in decision-making", isCorrect: false },
        { id: 1, text: "Excluding children from society", isCorrect: false },
        { id: 2, text: "Encouraging age-appropriate participation in decision-making", isCorrect: true },
        { id: 3, text: "Imposing restrictions on children's rights", isCorrect: false },
      ],
    },
    {
      text: "Who are the stakeholders encouraged to create opportunities for participation?",
      options: [
        { id: 0, text: "Governments only", isCorrect: false },
        { id: 1, text: "Families and communities only", isCorrect: false },
        { id: 2, text: "Governments, families, communities, and other stakeholders", isCorrect: true },
        { id: 3, text: "Children only", isCorrect: false },
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

