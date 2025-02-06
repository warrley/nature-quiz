import { Question } from "@/types/Questions"

type Props = {
    questions: Question[]
    answers: number[]
}

export const Results = ({ questions, answers }: Props) => {
    return (
        <div className="h-80 overflow-y-scroll">
            {questions.map((item, key) => (
                <div key={key} className="mb-3 text-lg">
                    <div className="font-bold">{key + 1}. {item.question}</div>
                    <div>
                        <span className={`${item.answer === answers[key] ? 'text-green-600' : 'text-red-600'} font-bold`}>{item.answer === answers[key] ? 'got it right' : "got the question wrong"} - </span>
                        {item.options[item.answer]}
                    </div>
                </div>
            ))}
        </div>
    )
}