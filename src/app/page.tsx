"use client"

import { QuestionItem } from "@/components/QuestionItem";
import { Results } from "@/components/Results";
import { questions } from "@/data/questions";
import { useState } from "react";

export default function Home() {
  const [answers, setAnswers] = useState<number[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const title = "nature quiz"
  const [showResult, setShowResult] = useState(false)

  const loadNextQuestion = () => {
    if(questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const handleAnsewered = (answer: number) => {
    setAnswers([...answers, answer])
    loadNextQuestion()
  }

  const handleReset = () => {
    setAnswers([])
    setCurrentQuestion(0)
    setShowResult(false)
  }

  return (
    <div className={`w-full bg-sky-500 flex items-center justify-center ${!showResult ? 'h-screen' : '' }`}>
      <div className="my-6 w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border-b border-gray-300">{title}</div>
        <div className="p-5">
          {!showResult && 
            <QuestionItem 
            question={questions[currentQuestion]}
            count={currentQuestion + 1}
            onAnswer={handleAnsewered}
          />
          }
          {showResult && 
            <Results questions={questions} answers={answers}/>
          }
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          {!showResult &&
          `${currentQuestion + 1} de ${questions.length} pergunta${questions.length > 1 ? "s" : ""}`
          }
          {showResult &&
            <button onClick={handleReset} className="px-3 py-2 rounded-md bg-blue-800 text-white"> reset quiz</button>
          }
        </div>
      </div>
    </div>
  );
}
