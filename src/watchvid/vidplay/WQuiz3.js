

import React, { useState } from "react";
import './play.css'; 

function Quiz3() {
  const [showFinalResults, setFinalResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const questions = [
    {
      text: "What is child labor?",
      options: [
        
       { id:0, text:"A form of unpaid internship", isCorrect: false },
       { id:0, text:"Any work performed by a child that deprives them of their childhood", isCorrect: true },
       { id:0, text:"A common extracurricular activity", isCorrect: false },
       { id:0, text:"Part-time employment for teenagers", isCorrect: false },
      ],
    },
    {
      text: "Which international organization works towards the elimination of child labor?",
      options: [
        
       { id:0, text:"World Health Organization (WHO)", isCorrect: false },
       { id:0, text:"United Nations Educational, Scientific and Cultural Organization (UNESCO)", isCorrect: false },
       { id:0, text:"International Labour Organization (ILO)", isCorrect: true },
       { id:0, text:"Greenpeace", isCorrect: false },
      ],
    },
    {
      text: "At what age does the International Labour Organization (ILO) define a child for the purpose of child labor?",
      options: [
        
       { id:0, text:"14 years old", isCorrect: true },
       { id:0, text:"12 years old", isCorrect: false },
       { id:0, text:"18 years old", isCorrect: false },
       { id:0, text:"16 years old", isCorrect: false },
      ],
    },
    {
      text: "What is one of the hazardous forms of child labor that is particularly harmful to the health of children?",
      options: [
        
       { id:0, text:"Paper delivery", isCorrect: false },
       { id:0, text:"Artistic performances", isCorrect: false },
       { id:0, text:"Agricultural work", isCorrect: true },
       { id:0, text:"Educational tutoring", isCorrect: false },
      ],
    },
    {
      text: "What does the term Worst Forms of Child Labour refer to?",
      options: [
        
       { id:0, text:"The most extreme and harmful forms of child labor", isCorrect: true },
       { id:0, text:"Child labor in industries that produce luxury goods", isCorrect: false },
       { id:0, text:"Child labor that is not considered harmful", isCorrect: false },
       { id:0, text:"Child labor in high-income countries", isCorrect: false },
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

export default Quiz3;
