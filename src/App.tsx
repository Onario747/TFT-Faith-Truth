import { useCallback, useState } from "react";
import { QuizStart } from "./components/QuizStart";
import { Question } from "./components/Question";
import { Results } from "./components/Results";
import { questions as allQuestions } from "./data/questions";

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function App() {
  const [playerName, setPlayerName] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [randomizedQuestions, setRandomizedQuestions] = useState(allQuestions);

  const handleStart = useCallback((name: string) => {
    setPlayerName(name);
    setRandomizedQuestions(shuffleArray(allQuestions));
    setQuizStarted(true);
  }, []);

  const handleAnswer = useCallback(
    (answerId: number) => {
      if (randomizedQuestions[currentQuestion].correctAnswer === answerId) {
        setScore((score) => score + 1);
      }

      if (currentQuestion + 1 < randomizedQuestions.length) {
        setCurrentQuestion((curr) => curr + 1);
      } else {
        setQuizCompleted(true);
      }
    },
    [currentQuestion, randomizedQuestions]
  );

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizStarted(false);
    setQuizCompleted(false);
    setPlayerName("");
    setRandomizedQuestions(shuffleArray(allQuestions));
  };

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
      <div className="min-h-screen bg-amber-900/20 backdrop-blur-sm flex items-center justify-center p-4">
        {!quizStarted && <QuizStart onStart={handleStart} />}

        {quizStarted && !quizCompleted && (
          <Question
            question={randomizedQuestions[currentQuestion]}
            onAnswer={handleAnswer}
            currentQuestion={currentQuestion + 1}
            totalQuestions={randomizedQuestions.length}
          />
        )}

        {quizCompleted && (
          <Results
            score={score}
            totalQuestions={randomizedQuestions.length}
            playerName={playerName}
            onRestart={handleRestart}
            gameLink="https://tft-faith-game.vercel.app"
          />
        )}
      </div>
    </div>
  );
}

export default App;
