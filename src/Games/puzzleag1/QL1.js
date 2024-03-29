import React, { useState } from 'react';
import "./GL1.css";
import { Link } from 'react-router-dom';

const questions = [
  {
    id: 1,
    text: 'What is the primary objective of the right to free and compulsory elementary education for all children in the 6-14 year age group?',
    options: ['To provide optional education', 'To ensure education is available only for certain age groups', 'To guarantee free and mandatory education for children aged 6-14', 'To restrict education access based on economic status'],
    correctAnswer: 'To guarantee free and mandatory education for children aged 6-14',
  },
  {
    id: 2,
    text: 'Who is responsible for ensuring the implementation of the right to free and compulsory elementary education?',
    options: ['Local businesses', 'Parents only', 'Government and local authorities', 'Non-profit organizations'],
    correctAnswer: 'Government and local authorities',
  },
];

const Quiz = () => {

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
    <div className="quiz-container" >
      {showScore ? (
        <div className="score-section">
          {isAllCorrect ? (
            <div className='lev'>
              <h2>Congratulations!</h2>
              <p>You answered all questions correctly.</p>
              <Link to="/game1/l2" style={{textDecoration: 'none' ,width:'50px'}}>Play Next Level</Link>
            </div>
          ) : (
            <div>
              <h2>Your Score: {score} out of {questions.length}</h2>
              <p>Sorry, you didn't answer all questions correctly.</p>
              <button className='quiz-btn' onClick={restartQuiz}>Reattempt Quiz</button>
            </div>
          )}
        </div>
      ) : (
        <div className="question-section">
          <h2>Question {currentQuestion + 1}</h2>
          <h5>{questions[currentQuestion].text}</h5>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button className='quiz-btn' key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Quiz;
