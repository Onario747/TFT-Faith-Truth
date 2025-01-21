import { useState } from 'react';
import { QuizStart } from './components/QuizStart';
import { Question } from './components/Question';
import { Results } from './components/Results';
import { questions } from './data/questions';

function App() {
  const [playerName, setPlayerName] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleStart = (name: string) => {
    setPlayerName(name);
    setQuizStarted(true);
  };

  const handleAnswer = (answerId: number) => {
    if (questions[currentQuestion].correctAnswer === answerId) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizStarted(false);
    setQuizCompleted(false);
    setPlayerName('');
  };

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
      <div className="min-h-screen bg-amber-900/20 backdrop-blur-sm flex items-center justify-center p-4">
        {!quizStarted && (
          <QuizStart onStart={handleStart} />
        )}
        
        {quizStarted && !quizCompleted && (
          <Question
            question={questions[currentQuestion]}
            onAnswer={handleAnswer}
            currentQuestion={currentQuestion + 1}
            totalQuestions={questions.length}
          />
        )}
        
        {quizCompleted && (
          <Results
            score={score}
            totalQuestions={questions.length}
            playerName={playerName}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
}

export default App;