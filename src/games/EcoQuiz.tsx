import React, { useState } from 'react';
import { motion } from 'framer-motion';

const questions = [
  {
    question: "What is e-waste?",
    options: [
      "Electronic waste like old phones and computers",
      "Food waste",
      "Paper waste",
      "Plastic waste"
    ],
    correct: 0
  },
  {
    question: "Why is recycling e-waste important?",
    options: [
      "It saves space in landfills",
      "It protects the environment from toxic materials",
      "It conserves valuable resources",
      "All of the above"
    ],
    correct: 3
  },
  {
    question: "Which of these is NOT e-waste?",
    options: [
      "Old laptop",
      "Banana peel",
      "Broken phone",
      "Used battery"
    ],
    correct: 1
  },
  {
    question: "What can we make from recycled e-waste?",
    options: [
      "New electronic devices",
      "Jewelry",
      "Building materials",
      "All of the above"
    ],
    correct: 3
  },
  {
    question: "How can you help reduce e-waste?",
    options: [
      "Repair broken devices",
      "Donate working electronics",
      "Recycle old devices properly",
      "All of the above"
    ],
    correct: 3
  }
];

export function EcoQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleAnswer = (selectedIndex: number) => {
    setSelectedAnswer(selectedIndex);
    
    if (selectedIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  if (showResult) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
          <p className="text-xl mb-4">
            You scored {score} out of {questions.length}
          </p>
          <button
            onClick={resetQuiz}
            className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span>Question {currentQuestion + 1}/{questions.length}</span>
          <span>Score: {score}</span>
        </div>
        <h2 className="text-xl font-bold mb-4">
          {questions[currentQuestion].question}
        </h2>
      </div>

      <div className="space-y-4">
        {questions[currentQuestion].options.map((option, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => handleAnswer(index)}
            disabled={selectedAnswer !== null}
            className={`w-full p-4 text-left rounded-lg transition-colors ${
              selectedAnswer === null
                ? 'bg-white hover:bg-gray-50'
                : index === questions[currentQuestion].correct
                ? 'bg-green-100'
                : selectedAnswer === index
                ? 'bg-red-100'
                : 'bg-white'
            }`}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </div>
  );
}