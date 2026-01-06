import QuizWrapper from "./QuizWrapper";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-6">
          Tailwind CSS Interview Quiz
        </h1>

        <QuizWrapper />;
      </div>
    </div>
  );
}

export default App;
