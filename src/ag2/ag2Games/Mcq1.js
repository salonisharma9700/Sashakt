import React, { useState } from "react";
import './Mcq1.css' ;
const Mcq1 = () => {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "Which International organisation is work for development and protection of child rights?",
      options: [
        { id: 0, text: "International Red Cross", isCorrect: false },
        { id: 1, text: "United Nations", isCorrect: false },
        { id: 2, text: "ECPAT", isCorrect: false },
        { id: 3, text: "UNICEF", isCorrect: true },
      ],
    },
    {
      text: "What is the abbrevation of UNICEF?",
      options: [
        { id: 0, text: "United Nations International Children's Emergency Fund", isCorrect: true },
        { id: 1, text: "United Nations International Children's Education Fund", isCorrect: false },
        { id: 2, text: "United Nations International Children's Foundation", isCorrect: false },
        { id: 3, text: "None of the above", isCorrect: false},
      ],
    },
    {
      text: "What is the punishment for male adult marrying a child?",
      options: [
        { id: 0, text: "2 years", isCorrect: true },
        { id: 1, text: "5 years", isCorrect: false },
        { id: 2, text: "4 years", isCorrect: false },
        { id: 3, text: "1 year", isCorrect: false },
      ],
    },
    {
      text: "Select an in-correct child right?",
      options: [
        { id: 0, text: "Right to Education", isCorrect: false },
        { id: 1, text: "Right to Vote", isCorrect: true },
        { id: 2, text: "Right to Survival", isCorrect: false },
        { id: 3, text: "Right to Protection ", isCorrect: false },
      ],
    },
    {
      text: "What does the Right to Survival mean in the context of child rights?",
      options: [
        { id: 0, text: "Right to education", isCorrect: false },
        { id: 1, text: "Right to life and development", isCorrect: true },
        { id: 2, text: "Right to play", isCorrect: false },
        { id: 3, text: "Right to privacy", isCorrect: false },
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
    <div className="App">
      {/* Header */}
      <h1>Quiz App</h1>

      {/* Current score */}
      <h2>Current Score:{score}</h2>

      {showFinalResults ? (
        /* Final Results */
        <div className="result-card">
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
        <div className="question-card">
          <h2>
            Question {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3>{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
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
  );
};

export default Mcq1;
