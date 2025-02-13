"use client"

import { QuestionItem } from "@/components/QuestionItem";
import { Results } from "@/components/Results";
import { ToggleTheme } from "@/components/toggle-theme";
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
    <div className={`w-full bg-sky-500 dark:bg-zinc-900 flex items-center justify-center h-screen`}>
      <div className="my-6 w-5/6 md:w-auto dark:text-white rounded-md bg-white dark:bg-sky-800 text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border-b border-gray-300 flex justify-between">
          <p>{title}</p>
          <ToggleTheme/>
        </div>
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
            <button onClick={handleReset} className="dark:bg-white dark:text-black px-3 py-2 rounded-md bg-blue-800 text-white"> reset quiz</button>
          }
        </div>
      </div>
    </div>
  );
}
