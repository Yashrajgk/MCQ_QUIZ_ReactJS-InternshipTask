import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Which of the following is used in React.js to increase performance?",
      options: [
        { id: 0, text: "Original DOM", isCorrect: false },
        { id: 1, text: "Virtual DOM", isCorrect: true },
        { id: 2, text: "Both A and B", isCorrect: false },
        { id: 3, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "What is ReactJS?",
      options: [
        { id: 0, text: "User Interface framework", isCorrect: true },
        { id: 1, text: "Server-side framework", isCorrect: false },
        { id: 2, text: "both a and b", isCorrect: false },
        { id: 3, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "Identify the one which is used to pass data to components from outside",
      options: [
        { id: 0, text: "props", isCorrect: true },
        { id: 1, text: "PropTypes", isCorrect: false },
        { id: 2, text: "setState", isCorrect: false },
        { id: 3, text: "Render with arguments", isCorrect: false },
      ],
    },
    {
      text: "In which language is React.js written?",
      options: [
        { id: 0, text: "C#", isCorrect: false },
        { id: 1, text: "JavaScript", isCorrect: true },
        { id: 2, text: "Python", isCorrect: false },
        { id: 3, text: "Java", isCorrect: false },
      ],
    },
    {
      text: "What is Babel?",
      options: [
        { id: 0, text: "JavaScript interpreter", isCorrect: false },
        { id: 1, text: "JavaScript compiler", isCorrect: true },
        { id: 2, text: "JavaScript transpiler", isCorrect: true },
        { id: 3, text: "None of the above", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>ReactJs Quiz </h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
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

export default App;
