"use client";

import { useState } from "react";
import Link from "next/link";
import { QuestionIcon, ChevronRightIcon, RefreshIcon } from "@/components/icons/GameIcons";
import { CLASS_FINDER_QUESTIONS, CLASSES } from "@/data/gameData";

type ClassId = "berserker" | "mage" | "hunter" | "shield-guard" | "useless-person";

interface ClassScore {
  classId: ClassId;
  score: number;
  percentage: number;
}

export default function ClassFinderPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = CLASS_FINDER_QUESTIONS;
  const progress = (Object.keys(answers).length / questions.length) * 100;

  const handleAnswer = (questionId: string, optionId: string) => {
    const newAnswers = { ...answers, [questionId]: optionId };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const calculateResults = (): ClassScore[] => {
    const scores: Record<ClassId, number> = {
      berserker: 0,
      mage: 0,
      hunter: 0,
      "shield-guard": 0,
      "useless-person": 0,
    };

    Object.entries(answers).forEach(([questionId, optionId]) => {
      const question = questions.find((q) => q.id === questionId);
      if (!question) return;

      const option = question.options.find((o) => o.label === optionId);
      if (!option) return;

      Object.entries(option.scores).forEach(([classId, score]) => {
        scores[classId as ClassId] += score;
      });
    });

    const maxPossible = questions.length * 3; // Max score per class per question is 3
    return Object.entries(scores)
      .map(([classId, score]) => ({
        classId: classId as ClassId,
        score,
        percentage: Math.round((score / maxPossible) * 100),
      }))
      .sort((a, b) => b.score - a.score);
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const results = showResults ? calculateResults() : [];
  const topResult = results[0];
  const topClass = CLASSES.find((c) => c.id === topResult?.classId);

  return (
    <div className="min-h-screen bg-[#0a0a12] pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-purple-400 transition-colors">Tools</Link>
          <span>/</span>
          <span className="text-purple-400">Class Finder</span>
        </nav>

        {/* Header */}
        <header className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <QuestionIcon size={48} className="text-purple-500" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-100">Class Finder</h1>
          <p className="text-gray-500 mt-2">Answer a few questions to find your perfect class</p>
        </header>

        {!showResults ? (
          <>
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>{Math.round(progress)}% complete</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-purple-500 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="p-6 bg-[#12121f] border border-purple-900/30 rounded-xl">
              <h2 className="text-xl font-bold text-gray-100 mb-6">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(questions[currentQuestion].id, option.label)}
                    className={`
                      w-full p-4 text-left rounded-lg border transition-all
                      ${
                        answers[questions[currentQuestion].id] === option.label
                          ? "bg-purple-900/30 border-purple-500"
                          : "bg-[#0a0a12] border-purple-900/30 hover:border-purple-700"
                      }
                    `}
                  >
                    <p className="font-medium text-gray-200">{option.label}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
                className="px-4 py-2 text-gray-400 hover:text-purple-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                ← Previous
              </button>
              <button
                onClick={restart}
                className="px-4 py-2 text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2"
              >
                <RefreshIcon size={16} />
                Restart
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Results */}
            <div className="p-6 bg-gradient-to-br from-purple-900/20 to-violet-900/20 border border-purple-900/30 rounded-xl mb-6">
              <h2 className="text-lg font-bold text-gray-100 mb-4 text-center">Your Best Match</h2>

              {topClass && (
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-purple-900/30 flex items-center justify-center text-4xl">
                    {topClass.id === "berserker" && "⚔️"}
                    {topClass.id === "mage" && "🔮"}
                    {topClass.id === "hunter" && "🏹"}
                    {topClass.id === "shield-guard" && "🛡️"}
                    {topClass.id === "useless-person" && "👤"}
                  </div>
                  <h3 className="text-2xl font-black text-purple-400">{topClass.name}</h3>
                  <p className="text-gray-500">{topClass.title}</p>
                  <div className="mt-2">
                    <span className="text-3xl font-black text-green-400">{topResult.percentage}%</span>
                    <span className="text-gray-500 ml-2">match</span>
                  </div>
                </div>
              )}

              <p className="text-sm text-gray-400 text-center">{topClass?.description}</p>

              <Link
                href={`/classes/${topResult?.classId}`}
                className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
              >
                View {topClass?.name} Guide
                <ChevronRightIcon size={16} />
              </Link>
            </div>

            {/* All Results */}
            <div className="p-6 bg-[#12121f] border border-purple-900/30 rounded-xl mb-6">
              <h3 className="font-bold text-gray-200 mb-4">All Results</h3>
              <div className="space-y-3">
                {results.map((result, index) => {
                  const cls = CLASSES.find((c) => c.id === result.classId);
                  return (
                    <div
                      key={result.classId}
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        index === 0 ? "bg-purple-900/20" : "bg-[#0a0a12]"
                      }`}
                    >
                      <span className="text-lg font-bold text-gray-500 w-6">#{index + 1}</span>
                      <div className="flex-1">
                        <p className="font-medium text-gray-200">{cls?.name}</p>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden mt-1">
                          <div
                            className="h-full bg-purple-500 rounded-full transition-all"
                            style={{ width: `${result.percentage}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-sm font-bold text-purple-400">{result.percentage}%</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Restart Button */}
            <button
              onClick={restart}
              className="w-full px-4 py-3 bg-[#12121f] hover:bg-purple-900/20 border border-purple-900/30 text-gray-300 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <RefreshIcon size={16} />
              Take Quiz Again
            </button>
          </>
        )}
      </div>
    </div>
  );
}
