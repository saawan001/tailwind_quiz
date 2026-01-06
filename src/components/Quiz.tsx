import { useState, useEffect } from "react";
import { quizData } from "../data/quizData";
import Result from "./Result";
import QuestionCard from "./QuestionCard";
import { sendResultEmail } from "../services/emailService";

const PASS_PERCENTAGE = 60;

interface QuizProps {
  studentName: string;
}

const Quiz = ({ studentName }: QuizProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = quizData[currentIndex];

  const handleAnswer = (answer: string) => {
    if (answers[currentIndex]) return; // prevent change

    const isCorrect = answer === currentQuestion.correctAnswer;
    const updatedScore = isCorrect ? score + 1 : score - 0.25;

    setScore(updatedScore);
    setAnswers([...answers, answer]);

    setTimeout(() => {
      if (currentIndex + 1 < quizData.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setShowResult(true);
      }
    }, 500);
  };
  useEffect(() => {
    if (!showResult) return;

    const percentage = (score / quizData.length) * 100;
    const status = percentage >= PASS_PERCENTAGE ? "PASS" : "FAIL";

    sendResultEmail({
      studentName,
      score,
      total: quizData.length,
      status,
    })
      .then(() => console.log("✅ Result email sent"))
      .catch((error) => console.error("❌ Email sending failed", error));
  }, [showResult]);

  if (showResult) {
    const percentage = (score / quizData.length) * 100;
    return (
      <Result
        score={score}
        total={quizData.length}
        status={percentage >= PASS_PERCENTAGE ? "PASS" : "FAIL"}
        studentName={studentName}
      />
    );
  }

  return (
    <QuestionCard
      question={currentQuestion}
      onAnswer={handleAnswer}
      selectedAnswer={answers[currentIndex]}
    />
  );
};

export default Quiz;
