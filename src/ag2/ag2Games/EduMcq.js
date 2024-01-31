import React, { useState } from "react";
 import './Mcq1.css' ;
const Mcq1 = () => {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "What is the right to education considered?",
      options: [
        { id: 0, text: "Optional privilege", isCorrect: false },
        { id: 1, text: "Fundamental human right", isCorrect: true },
        { id: 2, text: "Government initiative", isCorrect: false },
        { id: 3, text: "Educational policy", isCorrect: false },
      ],
    },
    {
      text: "What is the primary role of education according to the text?",
      options: [
        { id: 0, text: "Maintaining social order", isCorrect: false },
        { id: 1, text: "Empowering individuals", isCorrect: true },
        { id: 2, text: "Fostering competition", isCorrect: false },
        { id: 3, text: "Promoting political ideologies", isCorrect: false},
      ],
    },
    {
      text: "How does education contribute to societies, according to the passage?",
      options: [
        { id: 0, text: "By promoting inequality", isCorrect: false },
        { id: 1, text: "By hindering development", isCorrect: false },
        { id: 2, text: "By contributing to overall development", isCorrect: true },
        { id: 3, text: "By encouraging discrimination", isCorrect: false },
      ],
    },
    {
      text: "What is described as a powerful tool in the context of the passage?",
      options: [
        { id: 0, text: "Education", isCorrect: true },
        { id: 1, text: "Economic systems", isCorrect: false },
        { id: 2, text: "Political ideologies", isCorrect: false },
        { id: 3, text: "Social media", isCorrect: false },
      ],
    },
    {
      text: "Why is access to quality education emphasized?",
      options: [
        { id: 0, text: "To limit individual empowerment", isCorrect: false },
        { id: 1, text: "To promote inequality", isCorrect: false },
        { id: 2, text: "To encourage discrimination", isCorrect: false },
        { id: 3, text: "To ensure overall development and empowerment", isCorrect: true },
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
