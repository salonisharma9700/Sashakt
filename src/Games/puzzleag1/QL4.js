import React, { useState } from 'react';
import "./GL1.css";
import { Link } from 'react-router-dom';

const questions = [
  {
    id: 1,
    text: 'What is a key benefit of recognizing and respecting the right of children to express their views and opinions?',
    options: ['Enhanced creativity, critical thinking, and self-esteem',' Improved candy consumption', 'Reduced playtime conflicts', 'Higher scores in bedtime trivia'],
    correctAnswer: 'Enhanced creativity, critical thinking, and self-esteem',
  },
  {
    id: 2,
    text: 'How can parents and educators promote the right of children to express their views and opinions?',
    options: ['By limiting playtime to encourage focus on studies', ' By restricting access to information to avoid diverse perspectives', 'By encouraging conformity and discouraging individuality', 'By providing opportunities for open discussions and active listening '],
    correctAnswer: 'By providing opportunities for open discussions and active listening ',
  },
];

const Quiz3 = () => {

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
            <div className="completion-message">
                <h1>Congratulations!</h1>
                <p>You have completed all the levels.</p>
                <Link to="/games"  style={{textDecoration: 'none'}}>Menu</Link>
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

export default Quiz3;
