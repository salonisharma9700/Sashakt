
import React, { useState, useEffect } from "react";

const CgamQuiz = () => {
  const [questions, setQuestions] = useState([
    {
              question: " Which fundamental right ensures the right to education for children in India?",
              options: ["Right to Equality", "Right to Freedom of Religion", "Right to Education", "Right to Life and Personal Liberty"],
              correctAnswer: "Right to Education"
            },
            {
                question: " What does the Juvenile Justice (Care and Protection of Children) Act focus on?",
                options: ["Child Labour", "Child Marriage", "Protection of juvenile offenders", "Child Trafficking"],
                correctAnswer: "Protection of juvenile offenders"
              },
              {
                question: " According to the POCSO Act, what is the age of consent for sexual activities involving a child?",
                options: ["14 years", "16 years", "18 years", "21 years"],
                correctAnswer: "16 years"
              },
              {
                question: " Which organization in India is responsible for the implementation of child welfare programs?",
                options: ["Ministry of Education", "Ministry of Women and Child Development", "Ministry of Health and Family Welfare", "Ministry of Social Justice and Empowerment"],
                correctAnswer: " Ministry of Women and Child Development"
              },
              {
                question: " What is the purpose of the Integrated Child Development Services (ICDS) in India?",
                options: [" Providing free education to children", "Ensuring proper nutrition and healthcare for mothers and children", "Preventing child trafficking", "Eliminating child labor"],
                correctAnswer: "Protection of juvenile offenders"
              },
              {
                question: "  What does the term Bal Swaraj refer to in the context of child rights?",
                options: ["Right to Play", "Right to Play", "Children's Self-Governance", "Right to Health"],
                correctAnswer: "Children's Self-Governance"
              },
              {
                question: " What is the legal age for employment in India according to the Child Labour (Prohibition and Regulation) Act?",
                options: ["12 years", "14 years", "16 years", "18 years"],
                correctAnswer: "14 years"
              },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    const shuffledQuestions = shuffleArray(questions);
    
    setQuestions(shuffledQuestions.slice(0, 5));
  }, []);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleAnswerSelect = (selectedOption) => {
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedOption]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
     
      const correctAnswers = questions.map((question) => question.correctAnswer);
      const userScore = userAnswers.filter((answer, index) => answer === correctAnswers[index]).length;
      setScore(userScore);
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setScore(0);
    setQuizCompleted(false);
    const shuffledQuestions = shuffleArray(questions);
    setQuestions(shuffledQuestions.slice(0, 5));
  };

  return (
    <div className="c-quiz-p">
    <div className="cquiz">
      {quizCompleted ? (
        <div className="cquiz-win">
          {score === 5 ? (
            <p>Congratulations! You answered all questions correctly.</p>
          ) : (
            <div className="cquiz-lost">
              <p>Oops! You got {score} out of 5 questions correct.</p>
              <button className="restart-cquiz" onClick={restartQuiz}>Restart Quiz</button>
            </div>
          )}
        </div>
      ) : (
        <div className="cquiz-quiz">
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          <form>
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`option${index}`}
                  name="answer"
                  value={option}
                  onChange={() => handleAnswerSelect(option)}
                />
                <label htmlFor={`option${index}`}>{option}</label>
              </div>
            ))}
          </form>
        </div>
      )}
    </div>
    </div>
  );
};

export default CgamQuiz;
