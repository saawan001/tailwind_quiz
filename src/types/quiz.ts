export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface QuizResult {
  studentName: string;
  score: number;
  total: number;
  status: "PASS" | "FAIL";
}
