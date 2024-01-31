import React, { useState } from "react";
import './play.css'; 

function Quiz2() {
  const [showFinalResults, setFinalResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      text: "What does the right to education ensure?",
      options: [
        
       { id:0, text:"Right to Work", isCorrect: false },
       { id:0, text:"Right to Education", isCorrect: true },
       { id:0, text:"Right to Free Speech", isCorrect: false },
       { id:0, text:"Right to Bear Arms", isCorrect: false },
      ],
    },
    {
      text: "Which international document explicitly recognizes the right to education as a fundamental human right?",
      options: [
        
       { id:0, text:"Kyoto Protocol", isCorrect: false },
       { id:0, text:"North Atlantic Treaty", isCorrect: false },
       { id:0, text:"Universal Declaration of Human Rights", isCorrect: true },
       { id:0, text:"Paris Agreement", isCorrect: false },
      ],
    },
    {
      text: "In the context of the right to education, what does 'EFA' stand for?",
      options: [
        
       { id:0, text:" Education for All", isCorrect: true },
       { id:0, text:"Education for Advocacy", isCorrect: false },
       { id:0, text:"Effective Financial Accounting", isCorrect: false },
       { id:0, text:"Equal Future Achievements", isCorrect: false },
      ],
    },
    {
      text: "What is the primary goal of the right to education?",
      options: [
        
       { id:0, text:"Promoting freedom of the press", isCorrect: false },
       { id:0, text:"Establishing the right to own property", isCorrect: false },
       { id:0, text:" Ensuring equal access to quality education", isCorrect: true },
       { id:0, text:"Encouraging religious practices in schools", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is not a key principle of the right to education?",
      options: [
        
       { id:0, text:"Compulsory Military Training", isCorrect: true },
       { id:0, text:"Non-discrimination", isCorrect: false },
       { id:0, text:"Accessibility", isCorrect: false },
       { id:0, text:"Quality Education for All", isCorrect: false },
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
    <div className="vid-quiz-app">
        
       {/* Current score */}
       <h1 className="ag2-hscore">Current Score:{score}</h1>

      {showFinalResults ? (
        <div className="vid-quiz-final-result">
          <h1>Final Result</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          
        </div>
      ) : (
        <div className="vid-quiz-questions-card">
          <h2>
            Question {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="vid-quiz-question-text">
            {questions[currentQuestion].text}
          </h3>
          <ul className="ag1-ul-quiz">
            {questions[currentQuestion].options.map((option) => {
              return (
                <li className="ag1-li-quiz"
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
}

export default Quiz2;
