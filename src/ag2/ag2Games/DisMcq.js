import React, { useState } from "react";
import './Mcq1.css' ;
const Mcq1 = () => {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "What is the primary goal of the right against discrimination in the context of children?",
      options: [
        { id: 0, text: "Reinforcing stereotypes", isCorrect: false },
        { id: 1, text: "Ensuring unequal treatment", isCorrect: false },
        { id: 2, text: "Eliminating prejudices and stereotypes", isCorrect: true },
        { id: 3, text: "Promoting discriminatory practices", isCorrect: false },
      ],
    },
    {
      text: "According to the passage, what is crucial for every child to enjoy their rights on an equal basis?",
      options: [
        { id: 0, text: "Elimination of prejudices and stereotypes", isCorrect: true },
        { id: 1, text: "Unequal treatment", isCorrect: false },
        { id: 2, text: "Background characteristics", isCorrect: false },
        { id: 3, text: "None of the above", isCorrect: false},
      ],
    },
    {
      text: "Why is it important to eliminate prejudices and stereotypes, according to the passage?",
      options: [
        { id: 0, text: "To promote discrimination", isCorrect: false },
        { id: 1, text: "To ensure unequal treatment", isCorrect: false },
        { id: 2, text: "To uphold the right against discrimination", isCorrect: true },
        { id: 3, text: "To reinforce cultural biases", isCorrect: false },
      ],
    },
    {
      text: "What does the right against discrimination emphasize?",
      options: [
        { id: 0, text: " Unequal treatment", isCorrect: false },
        { id: 1, text: "Equal opportunity", isCorrect: true },
        { id: 2, text: "Cultural prejudices", isCorrect: false },
        { id: 3, text: "Background characteristics", isCorrect: false },
      ],
    },
    {
      text: "What is the focus of the right against discrimination in relation to children?",
      options: [
        { id: 0, text: "Promoting unequal opportunities", isCorrect: false },
        { id: 1, text: "Ensuring fair and equitable treatment", isCorrect: true },
        { id: 2, text: "Reinforcing stereotypes", isCorrect: false },
        { id: 3, text: "Treating children based on their characteristics", isCorrect: false },
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
