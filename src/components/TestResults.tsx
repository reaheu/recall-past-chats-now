
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Brain, AlertTriangle, Users, ChevronRight } from "lucide-react";
import { calculatePersonalityType } from "@/utils/personalityCalculator";

interface TestResultsProps {
  answers: string[];
  onRestart: () => void;
}

const TestResults = ({ answers, onRestart }: TestResultsProps) => {
  const result = calculatePersonalityType(answers);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center mb-8 pt-8">
          <Button 
            onClick={onRestart}
            variant="ghost" 
            className="text-white hover:bg-white/10 mr-4"
          >
            <ArrowLeft className="w-5 h-5 ml-2" />
            إعادة الاختبار
          </Button>
          <div className="flex items-center">
            <Brain className="w-6 h-6 text-white mr-3" />
            <h1 className="text-2xl font-bold text-white">نتائج اختبار الشخصية</h1>
          </div>
        </div>

        {/* Main Result */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
          <CardHeader className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-white mb-2">
              نمطك الشخصي: {result.type}
            </CardTitle>
            <p className="text-blue-200 text-lg">{result.description}</p>
          </CardHeader>
        </Card>

        {/* Cognitive Functions */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
          <CardHeader>
            <CardTitle className="text-white text-center">ترتيب الوظائف الإدراكية</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {result.functions.map((func, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{func.name}</h4>
                    <p className="text-blue-200 text-sm">{func.description}</p>
                  </div>
                </div>
                <div className="text-white font-bold text-lg">
                  {func.percentage}%
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Warning */}
        <Card className="bg-red-500/10 backdrop-blur-md border-red-400/20 mb-8">
          <CardContent className="p-6">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-red-300 font-semibold mb-2">تنبيه مهم</h4>
                <p className="text-red-200 text-sm leading-relaxed">
                  هذا الاختبار هو أداة استكشافية وليس تشخيصاً نهائياً. النتائج قد لا تعكس شخصيتك بدقة كاملة. 
                  ننصح بالاستعانة بمختصين في علم النفس للحصول على تقييم أكثر دقة ومراجعة مصادر متعددة لفهم الأنماط الشخصية.
                  الهدف من الاختبار هو زيادة الوعي الذاتي وليس وضع تصنيفات نهائية.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Follow Section */}
        <Card className="bg-white/5 backdrop-blur-md border-white/10">
          <CardContent className="p-6 text-center">
            <h4 className="text-xl font-semibold text-white mb-3">تابعنا لمزيد من المحتوى المتخصص</h4>
            <p className="text-blue-200 mb-4">
              نشارك محتوى متعمق عن الأنماط الشخصية والوظائف الإدراكية وكيفية تطبيقها في الحياة اليومية
            </p>
            <Button 
              asChild
              className="bg-black hover:bg-gray-800 text-white font-semibold mb-4"
            >
              <a 
                href="https://www.tiktok.com/@reatwiy?_t=ZS-8xfyr92oGP9&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                تابع على TikTok
                <ChevronRight className="w-4 h-4 mr-2" />
              </a>
            </Button>
            <div className="text-blue-300 text-sm">
              @reatwiy - محتوى متخصص في الأنماط الشخصية
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TestResults;
