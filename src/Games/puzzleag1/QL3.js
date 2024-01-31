import React, { useState } from 'react';
import "./GL1.css";
import { Link } from 'react-router-dom';

const questions = [
  {
    id: 1,
    text: 'What did you learn from the previous child right?',
    options: ['Right to Candy','Right to Playtime', 'Right to Education', 'Right to Protection from Abuse and Exploitation'],
    correctAnswer: 'Right to Protection from Abuse and Exploitation',
  },
  {
    id: 2,
    text: 'Which legal framework is specifically designed to protect children from abuse and exploitation?',
    options: ['Protection of Children from Sexual Offences (POCSO) Act ', 'Child Welfare Act', 'Adult Rights Act', 'Workplace Safety Act'],
    correctAnswer: 'Protection of Children from Sexual Offences (POCSO) Act ',
  },
];

const Quiz2 = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  const isAllCorrect = score === questions.length;

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          {isAllCorrect ? (
            <div className='lev'>
              <h2>Congratulations!</h2>
              <p>You answered all questions correctly.</p>
              <Link to="/game1/l4" style={{textDecoration: 'none'}}>Play Next Level</Link>
            </div>
          ) : (
            <div>
              <h2>Your Score: {score} out of {questions.length}</h2>
              <p>Sorry, you didn't answer all questions correctly.</p>
              <button  className='quiz-btn' onClick={restartQuiz}>Reattempt Quiz</button>
            </div>
          )}
        </div>
      ) : (
        <div className="question-section">
          <h2>Question {currentQuestion + 1}</h2>
          <h5>{questions[currentQuestion].text}</h5>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button  className='quiz-btn' key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Quiz2;
