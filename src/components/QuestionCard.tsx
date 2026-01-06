import type { Question } from "../types/quiz";

interface Props {
  question: Question;
  onAnswer: (answer: string) => void;
  selectedAnswer?: string;
}

const QuestionCard = ({ question, onAnswer, selectedAnswer }: Props) => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">{question.question}</h2>

      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option}
            disabled={!!selectedAnswer}
            onClick={() => onAnswer(option)}
            className={`w-full p-3 rounded border
              ${
                selectedAnswer === option
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100"
              }
            `}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
