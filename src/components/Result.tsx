import type { QuizResult } from "../types/quiz";

const Result = ({ studentName,score, total, status }: QuizResult) => {
  return (
    <div className="text-center p-6">
      <h2 className="text-2xl font-bold mb-2">Student Name: {studentName}</h2>

      <h2 className="text-2xl font-bold mb-2">Result: {status}</h2>
      <p className="text-lg">
        Score: {score} / {total}
      </p>
    </div>
  );
};

export default Result;
