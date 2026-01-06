import { useState } from "react";
import Quiz from "./components/Quiz";


const QuizWrapper = () => {
  const [studentName, setStudentName] = useState("");
  const [started, setStarted] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      {!started ? (
        <div className="bg-white p-6 rounded shadow-md w-80">
          <h2 className="text-xl font-bold mb-4 text-center">Enter Your Name</h2>
          <input
            type="text"
            placeholder="Your Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />
          <button
            onClick={() => studentName && setStarted(true)}
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Start Quiz
          </button>
        </div>
      ) : (
        <Quiz studentName={studentName} />
      )}
    </div>
  );
};

export default QuizWrapper;
