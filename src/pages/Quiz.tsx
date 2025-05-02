/*import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSpeech } from '../contexts/SpeechContext';
import { useCourse } from '../contexts/CourseContext';
import { useUser } from '../contexts/UserContext';
import AccessibleButton from '../components/AccessibleButton';
import { CheckCircle, XCircle } from 'lucide-react';

const Quiz: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { speak } = useSpeech();
  const { getQuiz, getCourse } = useCourse();
  const { completeQuiz } = useUser();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [liveMessage, setLiveMessage] = useState('');

  const quiz = courseId ? getQuiz(courseId) : undefined;
  const course = courseId ? getCourse(courseId) : undefined;
  const question = quiz?.questions[currentQuestion];

  useEffect(() => {
    if (!quiz || !course) {
      speak("Quiz not found. Redirecting to course selection.");
      navigate('/courses');
      return;
    }

    if (question && !quizCompleted) {
      const optionsText = question.options.map((option, index) => `Option ${index + 1}: ${option}`).join(". ");
      speak(`Question ${currentQuestion + 1} of ${quiz.questions.length}. ${question.text}. ${optionsText}`);
    }
  }, [quiz, course, question, currentQuestion, speak, navigate, quizCompleted]);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    const correct = optionIndex === question?.correctOption;
    setIsCorrect(correct);

    if (correct) {
      speak("Correct answer.");
      setLiveMessage("Correct answer.");
      setScore(prev => prev + 1);
    } else {
      const correctAnswerNumber = (question?.correctOption ?? 0) + 1;
      speak(`Incorrect answer. The correct answer is option ${correctAnswerNumber}.`);
      setLiveMessage(`Incorrect answer. The correct answer is option ${correctAnswerNumber}.`);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < (quiz?.questions.length || 0) - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
      setIsCorrect(null);
      setLiveMessage('');
    } else {
      setQuizCompleted(true);
      if (courseId) completeQuiz(courseId);

      const totalQuestions = quiz?.questions.length || 0;
      const finalScore = score + (isCorrect ? 1 : 0);
      const percentage = Math.round((finalScore / totalQuestions) * 100);
      speak(`Quiz completed! Your score is ${finalScore} out of ${totalQuestions}, which is ${percentage}%. You can now view your certificate.`);
    }
  };

  if (!quiz || !question) return null;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {!quizCompleted ? (
          <>
            <header className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2 text-white">
                Call Center Communication - Quiz
              </h1>
              <p className="text-gray-400">
                Question {currentQuestion + 1} of {quiz.questions.length}
              </p>
            </header>

            <div className="bg-gray-900 rounded-lg p-8 shadow-lg mb-8">
              <h2 className="text-xl font-semibold mb-6 text-white">{question.text}</h2>

              <div className="space-y-4">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    className={`w-full text-left p-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      selectedOption === index
                        ? index === question.correctOption
                          ? 'bg-green-800/20 border border-green-500'
                          : 'bg-red-800/20 border border-red-500'
                        : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                    disabled={selectedOption !== null}
                    aria-pressed={selectedOption === index}
                  >
                    <div className="flex items-center">
                      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 mr-3">
                        {index + 1}
                      </span>
                      <span className="flex-1">{option}</span>
                      {selectedOption === index && (
                        index === question.correctOption ? (
                          <CheckCircle className="text-green-500 ml-2" size={20} />
                        ) : (
                          <XCircle className="text-red-500 ml-2" size={20} />
                        )
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {selectedOption !== null && (
                <p
                  className={`text-center mt-4 text-lg font-semibold ${
                    isCorrect ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {isCorrect
                    ? 'Correct answer.'
                    : `Incorrect answer. The correct answer is Option ${(question?.correctOption ?? 0) + 1}.`}
                </p>
              )}

              <div className="sr-only" aria-live="polite">
                {liveMessage}
              </div>
            </div>

            {selectedOption !== null && (
              <div className="text-center">
                <AccessibleButton
                  onClick={handleNextQuestion}
                  ariaLabel={currentQuestion === quiz.questions.length - 1 ? "Complete quiz" : "Next question"}
                  className="px-8"
                >
                  {currentQuestion === quiz.questions.length - 1 ? "Complete Quiz" : "Next Question"}
                </AccessibleButton>
              </div>
            )}
          </>
        ) : (
          <div className="bg-gray-900 rounded-lg p-8 shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Quiz Completed!</h2>
            <p className="text-xl mb-6 text-gray-300">
              Your score: <span className="text-purple-400 font-bold">{score}</span> out of <span>{quiz.questions.length}</span>
            </p>
            <p className="text-gray-400 mb-8">
              {score === quiz.questions.length
                ? "Perfect score! Excellent work!"
                : score >= Math.ceil(quiz.questions.length / 2)
                ? "Good job! You've passed the quiz."
                : "Keep practicing. You can retake the quiz to improve your score."}
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <AccessibleButton
                onClick={() => navigate(`/certificate/${courseId}`)}
                ariaLabel="View your certificate"
              >
                View Certificate
              </AccessibleButton>
              <AccessibleButton
                onClick={() => navigate('/courses')}
                ariaLabel="Return to course selection"
                className="bg-gray-800 hover:bg-gray-700"
              >
                Back to Courses
              </AccessibleButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;

*/

/*import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSpeech } from '../contexts/SpeechContext';
import { useCourse } from '../contexts/CourseContext';
import { useUser } from '../contexts/UserContext';
import AccessibleButton from '../components/AccessibleButton';
import { CheckCircle, XCircle } from 'lucide-react';
//new code snippet from here
import { speakText } from '../utils/speakText'; // adjust path if needed

<button
  onFocus={(e) => speakText((e.target as HTMLButtonElement).innerText)}
>
  Start Quiz
</button>
//till here

const Quiz: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { speak } = useSpeech();
  const { getQuiz, getCourse } = useCourse();
  const { completeQuiz } = useUser();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [liveMessage, setLiveMessage] = useState('');

  const quiz = courseId ? getQuiz(courseId) : undefined;
  const course = courseId ? getCourse(courseId) : undefined;
  const question = quiz?.questions[currentQuestion];

  useEffect(() => {
    if (!quiz || !course) {
      speak("Quiz not found. Redirecting to course selection.");
      navigate('/courses');
      return;
    }

    if (question && !quizCompleted) {
      const optionsText = question.options.map((option, index) => `Option ${index + 1}: ${option}`).join(". ");
      speak(`Question ${currentQuestion + 1} of ${quiz.questions.length}. ${question.text}. ${optionsText}`);
    }
  }, [quiz, course, question, currentQuestion, speak, navigate, quizCompleted]);

  // Handle option selection by key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;

      // Handle 1, 2, 3, 4 for selecting options
      if (key >= '1' && key <= '4') {
        const optionIndex = parseInt(key, 10) - 1;
        setSelectedOption(optionIndex);

        const correct = optionIndex === question?.correctOption;
        setIsCorrect(correct);

        if (correct) {
          speak("Correct answer.");
          setLiveMessage("Correct answer.");
          setScore(prev => prev + 1);
        } else {
          const correctAnswerNumber = (question?.correctOption ?? 0) + 1;
          speak(`Incorrect answer. The correct answer is option ${correctAnswerNumber}.`);
          setLiveMessage(`Incorrect answer. The correct answer is option ${correctAnswerNumber}.`);
        }
      }

      // Handle Enter to go to next question
      if (key === 'Enter' && selectedOption !== null) {
        handleNextQuestion();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedOption, question, speak]);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    const correct = optionIndex === question?.correctOption;
    setIsCorrect(correct);

    if (correct) {
      speak("Correct answer.");
      setLiveMessage("Correct answer.");
      setScore(prev => prev + 1);
    } else {
      const correctAnswerNumber = (question?.correctOption ?? 0) + 1;
      speak(`Incorrect answer. The correct answer is option ${correctAnswerNumber}.`);
      setLiveMessage(`Incorrect answer. The correct answer is option ${correctAnswerNumber}.`);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < (quiz?.questions.length || 0) - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
      setIsCorrect(null);
      setLiveMessage('');
    } else {
      setQuizCompleted(true);
      if (courseId) completeQuiz(courseId);

      const totalQuestions = quiz?.questions.length || 0;
      const finalScore = score + (isCorrect ? 1 : 0);
      const percentage = Math.round((finalScore / totalQuestions) * 100);
      speak(`Quiz completed! Your score is ${finalScore} out of ${totalQuestions}, which is ${percentage}%. You can now view your certificate.`);
    }
  };

  if (!quiz || !question) return null;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {!quizCompleted ? (
          <>
            <header className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2 text-white">
                Call Center Communication - Quiz
              </h1>
              <p className="text-gray-400">
                Question {currentQuestion + 1} of {quiz.questions.length}
              </p>
            </header>

            <div className="bg-gray-900 rounded-lg p-8 shadow-lg mb-8">
              <h2 className="text-xl font-semibold mb-6 text-white">{question.text}</h2>

              <div className="space-y-4">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    className={`w-full text-left p-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      selectedOption === index
                        ? index === question.correctOption
                          ? 'bg-green-800/20 border border-green-500'
                          : 'bg-red-800/20 border border-red-500'
                        : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                    disabled={selectedOption !== null}
                    aria-pressed={selectedOption === index}
                  >
                    <div className="flex items-center">
                      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 mr-3">
                        {index + 1}
                      </span>
                      <span className="flex-1">{option}</span>
                      {selectedOption === index && (
                        index === question.correctOption ? (
                          <CheckCircle className="text-green-500 ml-2" size={20} />
                        ) : (
                          <XCircle className="text-red-500 ml-2" size={20} />
                        )
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {selectedOption !== null && (
                <p
                  className={`text-center mt-4 text-lg font-semibold ${
                    isCorrect ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {isCorrect
                    ? 'Correct answer.'
                    : `Incorrect answer. The correct answer is Option ${(question?.correctOption ?? 0) + 1}.`}
                </p>
              )}

              <div className="sr-only" aria-live="polite">
                {liveMessage}
              </div>
            </div>

            {selectedOption !== null && (
              <div className="text-center">
                <AccessibleButton
                  onClick={handleNextQuestion}
                  ariaLabel={currentQuestion === quiz.questions.length - 1 ? "Complete quiz" : "Next question"}
                  className="px-8"
                >
                  {currentQuestion === quiz.questions.length - 1 ? "Complete Quiz" : "Next Question"}
                </AccessibleButton>
              </div>
            )}
          </>
        ) : (
          <div className="bg-gray-900 rounded-lg p-8 shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Quiz Completed!</h2>
            <p className="text-xl mb-6 text-gray-300">
              Your score: <span className="text-purple-400 font-bold">{score}</span> out of <span>{quiz.questions.length}</span>
            </p>
            <p className="text-gray-400 mb-8">
              {score === quiz.questions.length
                ? "Perfect score! Excellent work!"
                : score >= Math.ceil(quiz.questions.length / 2)
                ? "Good job! You've passed the quiz."
                : "Keep practicing. You can retake the quiz to improve your score."}
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <AccessibleButton
                onClick={() => navigate(`/certificate/${courseId}`)}
                ariaLabel="View your certificate"
              >
                View Certificate
              </AccessibleButton>
              <AccessibleButton
                onClick={() => navigate('/courses')}
                ariaLabel="Return to course selection"
                className="bg-gray-800 hover:bg-gray-700"
              >
                Back to Courses
              </AccessibleButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
*/

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSpeech } from '../contexts/SpeechContext';
import { useCourse } from '../contexts/CourseContext';
import { useUser } from '../contexts/UserContext';
import AccessibleButton from '../components/AccessibleButton';
import { CheckCircle, XCircle } from 'lucide-react';
import { speakText } from '../utils/speakText';

const PASSING_SCORE = 13;

const Quiz: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { speak } = useSpeech();
  const { getQuiz, getCourse } = useCourse();
  const { completeQuiz } = useUser();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [liveMessage, setLiveMessage] = useState('');

  const quiz = courseId ? getQuiz(courseId) : undefined;
  const course = courseId ? getCourse(courseId) : undefined;
  const question = quiz?.questions[currentQuestion];

  useEffect(() => {
    if (!quiz || !course) {
      speak("Quiz not found. Redirecting to course selection.");
      navigate('/courses');
      return;
    }

    if (question && !quizCompleted) {
      const optionsText = question.options.map((option, index) => `Option ${index + 1}: ${option}`).join(". ");
      speak(`Question ${currentQuestion + 1} of ${quiz.questions.length}. ${question.text}. ${optionsText}`);
    }
  }, [quiz, course, question, currentQuestion, speak, navigate, quizCompleted]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;

      if (key >= '1' && key <= '4') {
        const optionIndex = parseInt(key, 10) - 1;
        setSelectedOption(optionIndex);

        const correct = optionIndex === question?.correctOption;
        setIsCorrect(correct);

        if (correct) {
          speak("Correct answer.");
          setLiveMessage("Correct answer.");
          setScore(prev => prev + 1);
        } else {
          const correctAnswerNumber = (question?.correctOption ?? 0) + 1;
          speak(`Incorrect answer. The correct answer is option ${correctAnswerNumber}.`);
          setLiveMessage(`Incorrect answer. The correct answer is option ${correctAnswerNumber}.`);
        }
      }

      if (key === 'Enter' && selectedOption !== null) {
        handleNextQuestion();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedOption, question, speak]);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    const correct = optionIndex === question?.correctOption;
    setIsCorrect(correct);

    if (correct) {
      speak("Correct answer.");
      setLiveMessage("Correct answer.");
      setScore(prev => prev + 1);
    } else {
      const correctAnswerNumber = (question?.correctOption ?? 0) + 1;
      speak(`Incorrect answer. The correct answer is option ${correctAnswerNumber}.`);
      setLiveMessage(`Incorrect answer. The correct answer is option ${correctAnswerNumber}.`);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < (quiz?.questions.length || 0) - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
      setIsCorrect(null);
      setLiveMessage('');
    } else {
      setQuizCompleted(true);
      if (courseId) completeQuiz(courseId);

      const totalQuestions = quiz?.questions.length || 0;
      const finalScore = score + (isCorrect ? 1 : 0);
      const percentage = Math.round((finalScore / totalQuestions) * 100);

      if (finalScore >= PASSING_SCORE) {
        speak(`Quiz completed! Your score is ${finalScore} out of ${totalQuestions}, which is ${percentage}%. You passed the quiz and can now view your certificate.`);
      } else {
        speak(`Quiz completed! Your score is ${finalScore} out of ${totalQuestions}, which is ${percentage}%. You did not pass. Please retake the quiz to earn your certificate.`);
      }

      setScore(finalScore);
    }
  };

  if (!quiz || !question) return null;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {!quizCompleted ? (
          <>
            <header className="text-center mb-8">
              <h1 className="text-3xl font-extrabold text-white inline-block border-b-4 border-purple-500 pb-2">
                {course?.name} - Quiz
              </h1>
              <p className="text-gray-400 mt-2">
                Question {currentQuestion + 1} of {quiz.questions.length}
              </p>
            </header>

            <div className="bg-gray-900 rounded-lg p-8 shadow-lg mb-8">
              <h2 className="text-xl font-semibold mb-6 text-white">{question.text}</h2>

              <div className="space-y-4">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    onFocus={(e) => speakText((e.target as HTMLButtonElement).innerText)}
                    className={`w-full text-left p-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                      selectedOption === index
                        ? index === question.correctOption
                          ? 'bg-green-800/20 border border-green-500'
                          : 'bg-red-800/20 border border-red-500'
                        : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                    disabled={selectedOption !== null}
                    aria-pressed={selectedOption === index}
                  >
                    <div className="flex items-center">
                      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 mr-3">
                        {index + 1}
                      </span>
                      <span className="flex-1">{option}</span>
                      {selectedOption === index && (
                        index === question.correctOption ? (
                          <CheckCircle className="text-green-500 ml-2" size={20} />
                        ) : (
                          <XCircle className="text-red-500 ml-2" size={20} />
                        )
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {selectedOption !== null && (
                <p
                  className={`text-center mt-4 text-lg font-semibold ${
                    isCorrect ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {isCorrect
                    ? 'Correct answer.'
                    : `Incorrect answer. The correct answer is Option ${(question?.correctOption ?? 0) + 1}.`}
                </p>
              )}

              <div className="sr-only" aria-live="polite">
                {liveMessage}
              </div>
            </div>

            {selectedOption !== null && (
              <div className="text-center">
                <AccessibleButton
                  onClick={handleNextQuestion}
                  ariaLabel={currentQuestion === quiz.questions.length - 1 ? "Complete quiz" : "Next question"}
                  className="px-8"
                >
                  {currentQuestion === quiz.questions.length - 1 ? "Complete Quiz" : "Next Question"}
                </AccessibleButton>
              </div>
            )}
          </>
        ) : (
          <div className="bg-gray-900 rounded-lg p-8 shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Quiz Completed!</h2>
            <p className="text-xl mb-6 text-gray-300">
              Your score: <span className="text-purple-400 font-bold">{score}</span> out of <span>{quiz.questions.length}</span>
            </p>
            <p className="text-gray-400 mb-8">
              {score === quiz.questions.length
                ? "Perfect score! Excellent work!"
                : score >= PASSING_SCORE
                ? "Good job! You've passed the quiz."
                : "You did not pass. Please try again to earn your certificate."}
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              {score >= PASSING_SCORE ? (
                <>
                  <AccessibleButton
                    onClick={() => navigate(`/certificate/${courseId}`)}
                    ariaLabel="View your certificate"
                  >
                    View Certificate
                  </AccessibleButton>
                  <AccessibleButton
                    onClick={() => navigate('/courses')}
                    ariaLabel="Return to course selection"
                    className="bg-gray-800 hover:bg-gray-700"
                  >
                    Back to Courses
                  </AccessibleButton>
                </>
              ) : (
                <AccessibleButton
                  onClick={() => window.location.reload()}
                  ariaLabel="Retake the quiz"
                  className="bg-red-700 hover:bg-red-600"
                >
                  Retake Quiz
                </AccessibleButton>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
