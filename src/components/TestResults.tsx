
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Brain, AlertTriangle, Users, ChevronRight, RotateCcw } from "lucide-react";
import { calculatePersonalityType } from "@/utils/personalityCalculator";

interface TestResultsProps {
  answers: string[];
  onRestart: () => void;
}

const TestResults = ({ answers, onRestart }: TestResultsProps) => {
  const result = calculatePersonalityType(answers);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pt-8">
          <div className="flex items-center">
            <Brain className="w-6 h-6 text-white mr-3" />
            <h1 className="text-2xl font-bold text-white">نتائج اختبار الشخصية</h1>
          </div>
          <Button 
            onClick={onRestart}
            variant="ghost" 
            className="text-white hover:bg-white/10"
          >
            <RotateCcw className="w-5 h-5 ml-2" />
            إعادة الاختبار
          </Button>
        </div>

        {/* Main Result */}
        <Card className="bg-slate-800/70 backdrop-blur-md border-slate-600/50 mb-8 shadow-2xl">
          <CardHeader className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Users className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-white mb-2">
              نمطك الشخصي: {result.type}
            </CardTitle>
            <p className="text-slate-200 text-lg leading-relaxed">{result.description}</p>
          </CardHeader>
        </Card>

        {/* Cognitive Functions */}
        <Card className="bg-slate-800/70 backdrop-blur-md border-slate-600/50 mb-8 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-white text-center">ترتيب الوظائف الإدراكية الثمانية</CardTitle>
            <p className="text-slate-300 text-center text-sm">
              الوظائف مرتبة من الأقوى إلى الأضعف حسب إجاباتك
            </p>
          </CardHeader>
          <CardContent className="space-y-3">
            {result.functions.map((func, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg border border-slate-600/40 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 shadow-md ${
                    index < 2 ? 'bg-gradient-to-r from-emerald-500 to-green-600' :
                    index < 4 ? 'bg-gradient-to-r from-blue-500 to-cyan-600' :
                    index < 6 ? 'bg-gradient-to-r from-amber-600 to-orange-700' :
                    'bg-gradient-to-r from-red-600 to-pink-700'
                  }`}>
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{func.name}</h4>
                    <p className="text-slate-300 text-sm">{func.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold text-lg">
                    {func.percentage}%
                  </div>
                  <div className="text-slate-400 text-xs">
                    {func.score} إجابة
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Enhanced Warning */}
        <Card className="bg-amber-900/40 backdrop-blur-md border-amber-700/60 mb-8 shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-amber-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-amber-200 font-semibold mb-3">تنبيه مهم حول دقة النتائج</h4>
                <div className="text-slate-200 text-sm leading-relaxed space-y-2">
                  <p>• هذا الاختبار أداة استكشافية تقدم نظرة عامة على شخصيتك وليس تشخيصاً نهائياً أو علمياً دقيقاً</p>
                  <p>• النتائج قد تتأثر بحالتك المزاجية الحالية، تجاربك الأخيرة، أو فهمك للأسئلة</p>
                  <p>• الأنماط الشخصية أكثر تعقيداً من أي اختبار، والإنسان يمتلك جوانب متعددة من شخصيته</p>
                  <p>• للحصول على فهم أعمق وأكثر دقة، ننصح بالاستعانة بمختصين في علم النفس ومراجعة مصادر متعددة</p>
                  <p>• الهدف الأساسي هو زيادة الوعي الذاتي وفهم طرق تفكيرك وتفاعلك مع العالم</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Follow Section */}
        <Card className="bg-gradient-to-r from-indigo-800/60 to-purple-800/60 backdrop-blur-md border-indigo-600/50 shadow-2xl">
          <CardContent className="p-6 text-center">
            <h4 className="text-xl font-semibold text-white mb-3">🎯 تابعنا لمحتوى متخصص في الأنماط الشخصية</h4>
            <p className="text-slate-200 mb-4 leading-relaxed">
              نشارك شروحات عميقة للوظائف الإدراكية، تحليلات للأنماط المختلفة، ونصائح عملية 
              لتطبيق هذه المعرفة في الحياة اليومية والعلاقات والعمل
            </p>
            <Button 
              asChild
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold mb-4 px-8 py-3 shadow-lg hover:shadow-xl transition-all"
            >
              <a 
                href="https://www.tiktok.com/@reatwiy?_t=ZS-8xfyr92oGP9&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                🎬 تابع على TikTok
                <ChevronRight className="w-4 h-4 mr-2" />
              </a>
            </Button>
            <div className="text-slate-300 text-sm">
              @reatwiy - محتوى متخصص يساعدك على فهم نفسك والآخرين بشكل أفضل
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TestResults;
