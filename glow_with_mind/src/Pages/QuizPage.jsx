import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

// Quiz Questions
const questions = {
  1: [
    { question: "Do you often feel nervous?", correctAnswer: "Yes" },
    { question: "Do you avoid crowded places?", correctAnswer: "Yes" },
    { question: "Do you feel restless frequently?", correctAnswer: "Yes" },
    { question: "Do you overthink simple tasks?", correctAnswer: "Yes" },
    { question: "Do you feel anxious before events?", correctAnswer: "Yes" },
    { question: "Do you experience sweating without reason?", correctAnswer: "Yes" },
    { question: "Do you feel uncomfortable talking to strangers?", correctAnswer: "Yes" },
    { question: "Do you find it hard to relax?", correctAnswer: "Yes" },
    { question: "Do you feel tired due to stress?", correctAnswer: "Yes" },
    { question: "Do you get irritated easily?", correctAnswer: "Yes" },
  ],
  2: [
    { question: "Do you experience racing thoughts daily?", correctAnswer: "Yes" },
    { question: "Do you have frequent nightmares?", correctAnswer: "Yes" },
    { question: "Do you struggle to breathe when anxious?", correctAnswer: "Yes" },
    { question: "Do you fear embarrassment constantly?", correctAnswer: "Yes" },
    { question: "Do you often seek reassurance?", correctAnswer: "Yes" },
    { question: "Do you feel helpless or trapped?", correctAnswer: "Yes" },
    { question: "Do you avoid important opportunities due to fear?", correctAnswer: "Yes" },
    { question: "Do you have digestive problems linked to anxiety?", correctAnswer: "Yes" },
    { question: "Do you fear losing control in public?", correctAnswer: "Yes" },
    { question: "Do you get muscle tension during stress?", correctAnswer: "Yes" },
  ],
  3: [
    { question: "Do you experience chest pain during anxiety attacks?", correctAnswer: "Yes" },
    { question: "Do you feel detached from reality when panicking?", correctAnswer: "Yes" },
    { question: "Do you avoid daily activities out of fear?", correctAnswer: "Yes" },
    { question: "Do you suffer from frequent flashbacks?", correctAnswer: "Yes" },
    { question: "Do you fear death during panic attacks?", correctAnswer: "Yes" },
    { question: "Do you experience blurred vision when anxious?", correctAnswer: "Yes" },
    { question: "Do you experience tingling sensations or numbness?", correctAnswer: "Yes" },
    { question: "Do you fear going crazy?", correctAnswer: "Yes" },
    { question: "Do you struggle swallowing when stressed?", correctAnswer: "Yes" },
    { question: "Do you have trouble focusing because of anxiety?", correctAnswer: "Yes" },
  ],
  4: [
    { question: "Do you fear losing your identity or sense of self?", correctAnswer: "Yes" },
    { question: "Do you have suicidal thoughts linked to anxiety?", correctAnswer: "Yes" },
    { question: "Do you isolate yourself completely?", correctAnswer: "Yes" },
    { question: "Do you feel you cannot survive without therapy?", correctAnswer: "Yes" },
    { question: "Do you often cry uncontrollably?", correctAnswer: "Yes" },
    { question: "Do you constantly fear abandonment?", correctAnswer: "Yes" },
    { question: "Do you struggle daily with hopelessness?", correctAnswer: "Yes" },
    { question: "Do you avoid leaving home completely?", correctAnswer: "Yes" },
    { question: "Do you fear there's no escape from your thoughts?", correctAnswer: "Yes" },
    { question: "Do you feel broken permanently?", correctAnswer: "Yes" },
  ],
};

// Background colors for each level
const backgroundColors = {
  1: "bg-[#A8E6CF]",
  2: "bg-[#FFF600]",
  3: "bg-[#FF8C42]",
  4: "bg-[#FF0400]",
};

// Styles for each level
const levelStyles = {
  1: {
    textColor: "text-[#2e7d32]",
    yesButton: "bg-[#81c784] border-[#388e3c] text-white hover:bg-[#66bb6a]",
    noButton: "border-[#81c784] text-[#2e7d32] hover:bg-[#c8e6c9]",
    submitButton: "bg-[#66bb6a] hover:bg-[#4caf50] text-white",
  },
  2: {
    textColor: "text-[#ff6f00]",
    yesButton: "bg-[#ffcc80] border-[#ff9800] text-white hover:bg-[#ffb74d]",
    noButton: "border-[#ffcc80] text-[#e65100] hover:bg-[#ffe0b2]",
    submitButton: "bg-[#ffb74d] hover:bg-[#fb8c00] text-white",
  },
  3: {
    textColor: "text-[#d84315]",
    yesButton: "bg-[#ff8a65] border-[#e64a19] text-white hover:bg-[#ff7043]",
    noButton: "border-[#ffab91] text-[#bf360c] hover:bg-[#ffccbc]",
    submitButton: "bg-[#ff7043] hover:bg-[#d84315] text-white",
  },
  4: {
    textColor: "text-[#b71c1c]",
    yesButton: "bg-[#ef5350] border-[#c62828] text-white hover:bg-[#e53935]",
    noButton: "border-[#ef9a9a] text-[#b71c1c] hover:bg-[#ffcdd2]",
    submitButton: "bg-[#e53935] hover:bg-[#c62828] text-white",
  },
};

const QuizPage = () => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (index, answer) => {
    setUserAnswers({ ...userAnswers, [index]: answer });
  };

  const handleSubmit = async () => {
    const currentQuestions = questions[currentLevel];
    let correct = 0;
    currentQuestions.forEach((q, index) => {
      if (userAnswers[index] === q.correctAnswer) {
        correct++;
      }
    });
    setScore(correct);
    setSubmitted(true);

    try {
      await axios.post("http://localhost:3000/api/quiz/submit", {
        level: currentLevel,
        answers: userAnswers,
        score: correct,
      });
    } catch (error) {
      console.error("Error submitting quiz:", error.message);
    }

    if (correct >= 7 && currentLevel < 4) {
      setTimeout(() => {
        setCurrentLevel((prev) => prev + 1);
        setUserAnswers({});
        setSubmitted(false);
      }, 2500);
    }
  };

  const allAnswered = questions[currentLevel].every((_, index) =>
    userAnswers.hasOwnProperty(index)
  );

  return (
    <motion.div
      className={`min-h-screen ${backgroundColors[currentLevel]} p-10 flex flex-col items-center justify-center transition-colors duration-1000`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="w-full max-w-4xl bg-white p-10 rounded-3xl shadow-2xl"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className={`text-4xl font-extrabold text-center mb-10 ${levelStyles[currentLevel].textColor}`}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
           Level {currentLevel}
        </motion.h1>

        {!submitted ? (
          <div className="space-y-8">
            {questions[currentLevel].map((q, index) => (
              <motion.div
                key={index}
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-lg font-semibold text-gray-800">{q.question}</p>
                <div className="flex gap-5">
                  <motion.button
                    className={`px-6 py-2 rounded-lg font-semibold border-2 transition duration-300 transform hover:scale-105 ${
                      userAnswers[index] === "Yes"
                        ? levelStyles[currentLevel].yesButton
                        : levelStyles[currentLevel].noButton
                    }`}
                    onClick={() => handleAnswer(index, "Yes")}
                    whileHover={{ scale: 1.1 }}
                  >
                    Yes
                  </motion.button>
                  <motion.button
                    className={`px-6 py-2 rounded-lg font-semibold border-2 transition duration-300 transform hover:scale-105 ${
                      userAnswers[index] === "No"
                        ? levelStyles[currentLevel].yesButton
                        : levelStyles[currentLevel].noButton
                    }`}
                    onClick={() => handleAnswer(index, "No")}
                    whileHover={{ scale: 1.1 }}
                  >
                    No
                  </motion.button>
                </div>
              </motion.div>
            ))}
            <motion.button
              onClick={handleSubmit}
              className={`w-full mt-10 py-3 rounded-lg font-bold transition duration-300 transform hover:scale-105 ${levelStyles[currentLevel].submitButton}`}
              whileHover={{ scale: 1.1 }}
              disabled={!allAnswered}
            >
              Submit Answers
            </motion.button>
          </div>
        ) : (
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {score >= 7 ? (
              currentLevel < 4 ? (
                <motion.h2
                  className="text-2xl font-bold text-[#6a8f8d] animate-pulse"
                  animate={{ opacity: 1 }}
                >
                  Great Job! Moving to Level {currentLevel + 1}...
                </motion.h2>
              ) : (
                <motion.h2
                  className="text-2xl font-bold text-[#4d6967] animate-pulse"
                  animate={{ opacity: 1 }}
                >
                  You've Completed All Levels! Please consider professional support.
                </motion.h2>
              )
            ) : (
              <motion.h2
                className="text-2xl font-bold text-[#6a8f8d]"
                animate={{ opacity: 1 }}
              >
                You’re doing well! Stay healthy and positive!
              </motion.h2>
            )}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default QuizPage;
