
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Brain } from "lucide-react";
import { questions } from "@/data/questions";
import TestResults from "./TestResults";

interface PersonalityTestProps {
  onBack: () => void;
}

const PersonalityTest = ({ onBack }: PersonalityTestProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    return <TestResults answers={answers} onRestart={() => {
      setCurrentQuestion(0);
      setAnswers([]);
      setShowResults(false);
    }} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center mb-8 pt-8">
          <Button 
            onClick={onBack}
            variant="ghost" 
            className="text-white hover:bg-white/10 mr-4"
          >
            <ArrowLeft className="w-5 h-5 ml-2" />
            العودة
          </Button>
          <div className="flex items-center">
            <Brain className="w-6 h-6 text-white mr-3" />
            <h1 className="text-2xl font-bold text-white">اختبار الأنماط الشخصية</h1>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-white mb-2">
            <span>السؤال {currentQuestion + 1} من {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-3 bg-slate-700" />
        </div>

        {/* Question Card */}
        <Card className="bg-slate-800/50 backdrop-blur-md border-slate-600/50">
          <CardHeader>
            <CardTitle className="text-white text-center text-xl leading-relaxed">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswer(option.value)}
                variant="outline"
                className="w-full p-6 h-auto text-right justify-start border-slate-500/70 text-slate-100 bg-slate-700/30 hover:bg-blue-600/80 hover:border-blue-400/80 hover:text-white transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                <div className="text-right w-full">
                  <div className="font-medium text-base leading-relaxed">{option.text}</div>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Progress indicator */}
        <div className="text-center mt-6">
          <div className="inline-flex items-center bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-slate-300 text-sm">
              {currentQuestion + 1}/{questions.length} أسئلة مكتملة
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalityTest;
