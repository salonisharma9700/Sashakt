import React, { useState } from "react";
import "./play.css"; 
function Quiz1() {
  const [showFinalResults, setFinalResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the United Nations Convention on the Rights of the Child (CRC)?",
      options: [
        
       { id:0, text:"A global initiative for adult rights", isCorrect: false },
       { id:0, text:"A treaty outlining the rights of children", isCorrect: true },
       { id:0, text:"An organization promoting child labor", isCorrect: false },
       { id:0, text:"A campaign for pet rights", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is NOT a right of the child according to the CRC?",
      options: [
        
       { id:0, text:"Right to education", isCorrect: false },
       { id:0, text:"Right to health", isCorrect: false },
       { id:0, text:"Right to work", isCorrect: true },
       { id:0, text:"Right to play video games", isCorrect: false },
      ],
    },
    {
      text: "What does the term best interests of the child mean in the context of child rights?",
      options: [
        
       { id:0, text:" Prioritizing the child's well-being in decision-making", isCorrect: true },
       { id:0, text:"Letting the child decide everything", isCorrect: false },
       { id:0, text:"Ignoring the child's interests", isCorrect: false },
       { id:0, text:" Promoting adult interests", isCorrect: false },
      ],
    },
    {
      text: "What is the legal age for employment in most countries according to international standards?",
      options: [
        
       { id:0, text:"12 years old", isCorrect: false },
       { id:0, text:"16 years old", isCorrect: false },
       { id:0, text:"18 years old", isCorrect: true },
       { id:0, text:"21 years old", isCorrect: false },
      ],
    },
    {
      text: "Which organization is dedicated to promoting and protecting the rights of children worldwide?",
      options: [
        
       { id:0, text:"UNICEF ", isCorrect: true },
       { id:0, text:"WHO", isCorrect: false },
       { id:0, text:"UNESCO", isCorrect: false },
       { id:0, text:"Greenpeace", isCorrect: false },
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

export default Quiz1;
