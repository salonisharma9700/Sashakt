import React, { useState } from "react";
import './Mcq1.css';
const QuizComponent2 = () => {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "What the video is describing about?",
      options: [
        { id: 0, text: "Development of children", isCorrect: false },
        { id: 1, text: "Well-being of society", isCorrect: false },
        { id: 2, text: "Good touch - Bad touch", isCorrect: true },
        { id: 3, text: "Mental health", isCorrect: false },
      ],
    },
    {
      text: "Who has the right to touch your private body parts",
      options: [
        { id: 0, text: "Doctor when your parents are with you", isCorrect: true },
        { id: 1, text: "Others", isCorrect: false },
        { id: 2, text: "Yourself", isCorrect: false },
        { id: 3, text: "None", isCorrect: false },
      ],
    },
    {
      text: "When is it appropriate for a stranger to touch a child?",
      options: [
        { id: 0, text: "Anytime, as long as it's a friendly gesture", isCorrect: false },
        { id: 1, text: "Never, unless in an emergency situation and with a parent's consent", isCorrect: true },
        { id: 2, text: "Only during special events", isCorrect: false },
        { id: 3, text: "Only during special events", isCorrect: false },
      ],
    },
    {
      text: "What is a good touch?",
      options: [
        { id: 0, text: "A touch that feels uncomfortable", isCorrect: false },
        { id: 1, text: "A touch that is forceful and aggressive", isCorrect: false },
        { id: 2, text: "A touch that is gentle and respectful", isCorrect: true },
        { id: 3, text: "A touch that should be avoided at all time", isCorrect: false },
      ],
    },
    {
      text: "What should a child do if someone makes them feel uncomfortable with a touch?",
      options: [
        { id: 0, text: "Keep it a secret and don't tell anyone", isCorrect: false },
        { id: 1, text: "Say thank you and walk away", isCorrect: false },
        { id: 2, text: "Ignore it and hope it stops", isCorrect: false },
        { id: 3, text: "Tell a trusted adult about the uncomfortable touch", isCorrect: true },
      ],
    },
    {
      text: "Which body parts are considered private?",
      options: [
        { id: 0, text: "Hands and feet", isCorrect: false },
        { id: 1, text: "Head and shoulders", isCorrect: false },
        { id: 2, text: "Arms and legs", isCorrect: false },
        { id: 3, text: "Private parts (genital areas)", isCorrect: true },
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

export default QuizComponent2;

