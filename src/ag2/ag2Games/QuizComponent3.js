import React, {useState} from "react";
import './Mcq1.css';
const QuizComponent3 = () => {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "What does the video describing about?",
      options: [
        { id: 0, text: "Child Rights", isCorrect: true },
        { id: 1, text: "Freedom for child", isCorrect: false },
        { id: 2, text: "Enjoyment", isCorrect: false },
        { id: 3, text: "Human rights", isCorrect: false },
      ],
    },
    {
      text: "Living in a safe environment belongs to which of the following rights",
      options: [
        { id: 0, text: "Right to Education", isCorrect: false },
        { id: 1, text: "Right to Participate", isCorrect: false },
        { id: 2, text: "Right to Protection", isCorrect: true },
        { id: 3, text: "All the above", isCorrect: false },
      ],
    },
    {
      text: "Which of the following are the child rights?",
      options: [
        { id: 0, text: "Right to Education", isCorrect: false },
        { id: 1, text: "Right to Protection", isCorrect: false },
        { id: 2, text: "Right to Survival", isCorrect: false },
        { id: 3, text: "All the above", isCorrect: true },
      ],
    },
    {
      text: "How many countries signed up with UNICEF?",
      options: [
        { id: 0, text: "196", isCorrect: true },
        { id: 1, text: "47", isCorrect: false },
        { id: 2, text: "200", isCorrect: false },
        { id: 3, text: "186", isCorrect: false },
      ],
    },
    {
      text: "When the convention on rights of the child was signed?",
      options: [
        { id: 0, text: "October  28th,1999", isCorrect: false },
        { id: 1, text: "October  20th,1989", isCorrect: false },
        { id: 2, text: "November 20th,1989", isCorrect: true },
        { id: 3, text: "November 28th,1989", isCorrect: false },
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

export default QuizComponent3;

