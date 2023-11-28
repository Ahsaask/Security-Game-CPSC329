
import React, { useState } from 'react';

const questions = [
  {
    question: "Which protocol is secure?",
    answers: ["HTTP", "HTTPS"],
    correct: 1
  },
  {
    question: "Using same password for all accounts?",
    answers: ["Yes, it's safe", "No, it increases risk"],
    correct: 1
  },
    {
      question: "Should you share your password?",
      answers: ["Yes", "No"],
      correct: 1
    },
    {
      question: "What is phishing?",
      answers: ["A hobby", "Online scam"],
      correct: 1
    },
    {
      question: "Is public Wi-Fi always safe?",
      answers: ["Yes", "No"],
      correct: 1
    },
    {
      question: "Which one is a strong password?",
      answers: ["123456", "jK8!2#tQ1*"],
      correct: 1
    },
    {
      question: "What should you do if your account gets hacked?",
      answers: ["Ignore it", "Change your password"],
      correct: 1
    },
    {
      question: "Is it safe to save your passwords in browsers?",
      answers: ["Yes, always", "Not always"],
      correct: 1
    },
    {
      question: "What is 2-factor authentication?",
      answers: ["A dance move", "An extra layer of security"],
      correct: 1
    },
    {
      question: "Is it safe to download files from unknown emails?",
      answers: ["Yes", "No"],
      correct: 1
    },
  ];
  

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [sticker, setSticker] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleAnswerClick = (index) => {
    if (index === questions[currentIndex].correct) {
      setScore(score + 10);
      setSticker("👍 +10");
    } else {
      setSticker("❌ +0");
    }

    const stickerElement = document.querySelector('.sticker');
    if (stickerElement) {
      stickerElement.classList.add('show');
    }

    setTimeout(() => {
      setSticker('');
      if (stickerElement) {
        stickerElement.classList.remove('show');
      }
    }, 1000);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="game">
      <div className="main-box">
        <div className="sticker">{sticker}</div>
        {!showResults ? (
          <>
            <div className="question">{questions[currentIndex].question}</div>
            {questions[currentIndex].answers.map((answer, index) => (
              <button className="answer" key={index} onClick={() => handleAnswerClick(index)}>
                {answer}
              </button>
            ))}
          </>
        ) : (
          <div className="result-box">
            <div className="result-score">
              🛡️ Your security and privacy knowledge score: {score} / 100
            </div>
            <div className="result-likelihood">
              <span className="emoji">
                {score > 80 ? '😃' : score > 60 ? '🙂' : '😧'}
              </span>
              Likelihood of getting scammed: {score > 80 ? 'Very Low' : score > 60 ? 'Moderate' : 'High'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
