import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    question: "What's the most common password?",
    answers: ["password123", "uniquecode"],
    correct: 0
  },
  {
    question: "Which protocol is secure?",
    answers: ["HTTP", "HTTPS"],
    correct: 1
  },
  {
    question: "Should you share your password online?",
    answers: ["Yes", "No"],
    correct: 1
  },
  {
    question: "What is phishing?",
    answers: ["A hobby", "Online scam", "Fishing, incorrectly spelled"],
    correct: 1
  },
  {
    question: "Is public Wi-Fi always safe?",
    answers: ["Yes", "No", "Maybe"],
    correct: 1
  },
  {
    question: "Which one is a strong password?",
    answers: ["123456", "jK8!2#tQ1*","strong"],
    correct: 1
  },
  {
    question: "What should you do if your account gets hacked?",
    answers: ["Ignore it", "Change your password", "Hack someone else's account"],
    correct: 1
  },
  {
    question: "Is it safe to save your passwords in browsers?",
    answers: ["Yes, always", "Not always"],
    correct: 1
  },
  {
    question: "What is 2-factor authentication?",
    answers: ["A dance move", "An extra layer of security", "A math equation"],
    correct: 1
  },
  {
    question: "Is it safe to download files from unknown emails?",
    answers: ["Yes", "No",],
    correct: 1
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [url, setUrl] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [sticker, setSticker] = useState('');

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
          <div className="search-section">
          <input
            type="text"
            placeholder="Enter website/Email URL..."
            value={url}
            onChange={e => setUrl(e.target.value)}
            className="url-input"
          />
          <button className="check-btn">Check Safety</button>
          </div>
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
export default App;
