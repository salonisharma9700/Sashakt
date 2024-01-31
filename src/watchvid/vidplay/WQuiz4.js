

import React, { useState } from "react";
import './play.css'

function Quiz4() {
  const [showFinalResults, setFinalResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const questions = [
    {
      text: "What does the term child abuse encompass?",
      options: [
        { id: 0, text: "Any intentional harm or mistreatment of a child", isCorrect: true },
        { id: 1, text: "Providing adequate care and attention to children", isCorrect: false },
        { id: 2, text: "Encouraging children to explore their creativity", isCorrect: false },
        { id: 3, text: "Strict discipline to shape a child's behavior", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is a form of child abuse?",
      options: [
        { id: 0, text: "Supporting a child's education", isCorrect: false },
        { id: 1, text: "Encouraging a child's hobbies", isCorrect: false },
        { id: 2, text: "Neglecting a child's emotional needs", isCorrect: true },
        { id: 3, text: "Rewarding a child for good behavior", isCorrect: false },
      ],
    },
    {
      text: "What is the primary goal of child protection policies?",
      options: [
        { id: 0, text: "Punishing children for misbehavior", isCorrect: false },
        { id: 1, text: "Encouraging children to be self-reliant", isCorrect: false },
        { id: 2, text: "Preventing and responding to child abuse", isCorrect: true },
        { id: 3, text: "Restricting children's access to information", isCorrect: false },
      ],
    },
    {
      text: "Which organization or agency is often involved in child protection efforts?",
      options: [
        { id: 0, text: "World Bank", isCorrect: false },
        { id: 1, text: "International Space Station (ISS)", isCorrect: false },
        { id: 2, text: "World Health Organization (WHO)", isCorrect: false },
        { id: 3, text: "Child Protective Services (CPS)", isCorrect: true },
      ],
    },
    {
      text: "What is an example of emotional abuse towards a child?",
      options: [
        { id: 0, text: " Providing a supportive environment", isCorrect: false },
        { id: 1, text: " Encouraging healthy friendships", isCorrect: false },
        { id: 2, text: "Celebrating a child's achievements", isCorrect: false },
        { id: 3, text: "Ignoring a child's feelings and needs", isCorrect: true },
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

export default Quiz4;
