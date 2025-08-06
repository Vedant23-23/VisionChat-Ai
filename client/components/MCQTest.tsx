import { useState } from "react";
import { CheckCircle, XCircle, Brain, RotateCcw, Eye } from "lucide-react";

interface MCQOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface MCQQuestion {
  id: string;
  question: string;
  options: MCQOption[];
  explanation: string;
  timestamp?: string;
}

const MCQTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [questionId: string]: string;
  }>({});
  const [showResults, setShowResults] = useState<{
    [questionId: string]: boolean;
  }>({});
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);

  const questions: MCQQuestion[] = [
    {
      id: "1",
      question: "At what timestamp did the pedestrian first enter the roadway?",
      timestamp: "0:03",
      options: [
        { id: "a", text: "0:01", isCorrect: false },
        { id: "b", text: "0:03", isCorrect: true },
        { id: "c", text: "0:05", isCorrect: false },
        { id: "d", text: "0:07", isCorrect: false },
      ],
      explanation:
        "The pedestrian first enters the roadway at the 0:03 timestamp, creating an immediate hazard for the oncoming motorcycle.",
    },
    {
      id: "2",
      question:
        "What was the primary traffic violation observed in this video?",
      options: [
        { id: "a", text: "Speeding by the motorcycle", isCorrect: false },
        { id: "b", text: "Running a red light", isCorrect: false },
        { id: "c", text: "Jaywalking by the pedestrian", isCorrect: true },
        { id: "d", text: "Illegal lane change", isCorrect: false },
      ],
      explanation:
        "The primary violation was jaywalking - the pedestrian crossed the road without checking for traffic and outside of a designated crosswalk area.",
    },
    {
      id: "3",
      question:
        "How did the motorcycle driver respond to the pedestrian's sudden appearance?",
      options: [
        { id: "a", text: "Swerved into oncoming traffic", isCorrect: false },
        { id: "b", text: "Applied emergency braking", isCorrect: true },
        {
          id: "c",
          text: "Accelerated to avoid the pedestrian",
          isCorrect: false,
        },
        { id: "d", text: "Honked the horn only", isCorrect: false },
      ],
      explanation:
        "The motorcycle driver showed excellent defensive driving by immediately applying emergency braking, successfully avoiding a collision.",
    },
    {
      id: "4",
      question:
        "What environmental factor contributed to the visibility in this incident?",
      options: [
        { id: "a", text: "Heavy rain and poor visibility", isCorrect: false },
        {
          id: "b",
          text: "Nighttime with inadequate lighting",
          isCorrect: false,
        },
        { id: "c", text: "Clear daytime conditions", isCorrect: true },
        { id: "d", text: "Dense fog", isCorrect: false },
      ],
      explanation:
        "The incident occurred during clear daytime conditions with excellent visibility, making the pedestrian's failure to check for traffic more concerning.",
    },
    {
      id: "5",
      question: "What safety measure could have best prevented this incident?",
      options: [
        { id: "a", text: "Installing speed bumps", isCorrect: false },
        {
          id: "b",
          text: "Better pedestrian awareness and crosswalk usage",
          isCorrect: true,
        },
        { id: "c", text: "Reducing speed limits", isCorrect: false },
        { id: "d", text: "Adding more traffic lights", isCorrect: false },
      ],
      explanation:
        "The most effective prevention would be better pedestrian education about road safety and proper use of designated crosswalks with traffic signals.",
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (questionId: string, optionId: string) => {
    if (showResults[questionId]) return; // Prevent changing answer after showing result

    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const handleSubmitAnswer = () => {
    const selectedOptionId = selectedAnswers[currentQuestion.id];
    if (!selectedOptionId) return;

    const selectedOption = currentQuestion.options.find(
      (opt) => opt.id === selectedOptionId,
    );

    setShowResults((prev) => ({ ...prev, [currentQuestion.id]: true }));

    if (!showResults[currentQuestion.id]) {
      setTotalAnswered((prev) => prev + 1);
      if (selectedOption?.isCorrect) {
        setScore((prev) => prev + 1);
      }
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const resetTest = () => {
    setSelectedAnswers({});
    setShowResults({});
    setScore(0);
    setTotalAnswered(0);
    setCurrentQuestionIndex(0);
  };

  const getOptionStatus = (option: MCQOption) => {
    const isSelected = selectedAnswers[currentQuestion.id] === option.id;
    const showResult = showResults[currentQuestion.id];

    if (!showResult) {
      return isSelected ? "selected" : "default";
    }

    if (option.isCorrect) return "correct";
    if (isSelected && !option.isCorrect) return "incorrect";
    return "default";
  };

  const getOptionClasses = (status: string) => {
    const baseClasses =
      "w-full text-left p-4 rounded-lg border transition-all-smooth";

    switch (status) {
      case "selected":
        return `${baseClasses} border-neon-blue bg-neon-blue/10 text-white`;
      case "correct":
        return `${baseClasses} border-green-500 bg-green-500/20 text-green-400`;
      case "incorrect":
        return `${baseClasses} border-red-500 bg-red-500/20 text-red-400`;
      default:
        return `${baseClasses} border-border bg-muted/50 text-foreground hover:border-neon-blue/50 hover:bg-neon-blue/5`;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
                Test Your Understanding
              </span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Test your comprehension of the traffic analysis with AI-generated
              multiple-choice questions based on the video content.
            </p>
          </div>

          {/* Progress and Score */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-neon-purple" />
                <span className="text-foreground/80">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </span>
              </div>
              {currentQuestion.timestamp && (
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-neon-blue" />
                  <span className="text-neon-blue font-mono text-sm">
                    {currentQuestion.timestamp}
                  </span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-foreground/70">Score</div>
                <div className="text-lg font-bold text-neon-cyan">
                  {score}/{totalAnswered}
                </div>
              </div>
              <button
                onClick={resetTest}
                className="p-2 glass-card rounded-lg hover:bg-white/5 transition-colors"
                title="Reset Test"
              >
                <RotateCcw className="h-4 w-4 text-foreground/70" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-muted rounded-full h-2 mb-8">
            <div
              className="bg-gradient-to-r from-neon-purple to-neon-pink h-2 rounded-full transition-all-smooth"
              style={{
                width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
              }}
            />
          </div>

          {/* Question Card */}
          <div className="glass-card rounded-xl p-8 mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 leading-relaxed">
              {currentQuestion.question}
            </h3>

            <div className="space-y-3 mb-6">
              {currentQuestion.options.map((option) => {
                const status = getOptionStatus(option);
                return (
                  <button
                    key={option.id}
                    onClick={() =>
                      handleAnswerSelect(currentQuestion.id, option.id)
                    }
                    disabled={showResults[currentQuestion.id]}
                    className={getOptionClasses(status)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center font-semibold text-sm">
                        {option.id.toUpperCase()}
                      </span>
                      <span className="flex-1">{option.text}</span>
                      {showResults[currentQuestion.id] && option.isCorrect && (
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      )}
                      {showResults[currentQuestion.id] &&
                        selectedAnswers[currentQuestion.id] === option.id &&
                        !option.isCorrect && (
                          <XCircle className="h-5 w-5 text-red-400" />
                        )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Submit/Show Answer Button */}
            {!showResults[currentQuestion.id] && (
              <button
                onClick={handleSubmitAnswer}
                disabled={!selectedAnswers[currentQuestion.id]}
                className="bg-gradient-to-r from-neon-purple to-neon-pink text-white px-6 py-3 rounded-lg font-medium transition-all-smooth hover:shadow-neon disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Answer
              </button>
            )}

            {/* Explanation */}
            {showResults[currentQuestion.id] && (
              <div className="neomorphic-inset rounded-lg p-4 mt-6">
                <h4 className="font-semibold text-white mb-2">Explanation:</h4>
                <p className="text-foreground/80 leading-relaxed">
                  {currentQuestion.explanation}
                </p>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={prevQuestion}
              disabled={currentQuestionIndex === 0}
              className="px-6 py-3 glass-card rounded-lg font-medium transition-all-smooth hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            <div className="flex gap-2">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestionIndex(index)}
                  className={`w-10 h-10 rounded-lg font-medium transition-all-smooth ${
                    index === currentQuestionIndex
                      ? "bg-gradient-to-r from-neon-purple to-neon-pink text-white"
                      : showResults[questions[index].id]
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "glass-card hover:bg-white/5"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={nextQuestion}
              disabled={currentQuestionIndex === questions.length - 1}
              className="px-6 py-3 glass-card rounded-lg font-medium transition-all-smooth hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>

          {/* Final Score */}
          {totalAnswered === questions.length && (
            <div className="mt-8 text-center">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Test Complete!
                </h3>
                <p className="text-lg text-neon-cyan mb-4">
                  Your Score: {score}/{questions.length} (
                  {Math.round((score / questions.length) * 100)}%)
                </p>
                <div className="text-foreground/70">
                  {score === questions.length &&
                    "Perfect! You have excellent understanding of traffic safety."}
                  {score >= questions.length * 0.8 &&
                    score < questions.length &&
                    "Great job! You have a good grasp of traffic analysis."}
                  {score >= questions.length * 0.6 &&
                    score < questions.length * 0.8 &&
                    "Good work! Consider reviewing traffic safety principles."}
                  {score < questions.length * 0.6 &&
                    "Keep learning! Traffic safety awareness is crucial for everyone."}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MCQTest;
