import { Question } from "@/types/Questions"
import { use, useState } from "react";

type Props = {
    question: Question;
    count: number;
    onAnswer: (answer: number) => void
}

export const QuestionItem = ({ question, count, onAnswer }: Props) => {
    const [selectedAnsewer, setSelectedAnsewer] = useState<number | null>(null)

    const checkQuestion = (key: number) => {
        if(selectedAnsewer === null) {
            setSelectedAnsewer(key)

            setTimeout(() => {
                onAnswer(key)
                setSelectedAnsewer(null)
            }, 2000)

        }
    }

    return (
        <div>
            <div className="text-3xl font-bold mb-5">{count}. {question.question}</div>
            <div>
                {question.options.map((item, key) => (
                    <div
                    key={key}
                    onClick={() => checkQuestion(key)}
                    className={`p-3 bg-gray-400 border border-black rounded-lg m-3  transition-all duration-400 cursor-pointer text-white
                    
                    ${selectedAnsewer !== null ? ' cursor-auto' : 'hover:bg-sky-300'}
                    ${selectedAnsewer !== null && selectedAnsewer === question.answer && selectedAnsewer === key && 'bg-green-700 border-green-900'}
                    ${selectedAnsewer !== null && selectedAnsewer !== question.answer && selectedAnsewer === key && 'bg-red-700 border-red-900'}
                    `}
                    >{item}</div>
                ))}
            </div>
        </div>
    )
}