
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PersonalityTest from "@/components/PersonalityTest";
import CognitiveFunctions from "@/components/CognitiveFunctions";
import { Brain, Users, Target, ChevronRight } from "lucide-react";

const Index = () => {
  const [showTest, setShowTest] = useState(false);
  const [showFunctions, setShowFunctions] = useState(false);

  if (showTest) {
    return <PersonalityTest onBack={() => setShowTest(false)} />;
  }

  if (showFunctions) {
    return <CognitiveFunctions onBack={() => setShowFunctions(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            اكتشف نمطك الشخصي
          </h1>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            اختبار شامل مبني على الوظائف الإدراكية الثمانية لتحديد نمط شخصيتك بدقة عالية
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
              <Target className="w-5 h-5 text-blue-300 mr-2" />
              <span className="text-white">60 سؤال متخصص</span>
            </div>
            <div className="flex items-center bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
              <Users className="w-5 h-5 text-blue-300 mr-2" />
              <span className="text-white">8 وظائف إدراكية</span>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">ابدأ الاختبار</h3>
              <p className="text-blue-200 mb-6">
                اختبار شامل من 60 سؤال لتحديد نمطك الشخصي والوظائف الإدراكية
              </p>
              <Button 
                onClick={() => setShowTest(true)}
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold py-3"
              >
                ابدأ الآن
                <ChevronRight className="w-5 h-5 mr-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">الوظائف الإدراكية</h3>
              <p className="text-blue-200 mb-6">
                تعرف على الوظائف الإدراكية الثمانية وكيف تؤثر على شخصيتك
              </p>
              <Button 
                onClick={() => setShowFunctions(true)}
                variant="outline" 
                className="w-full border-white/30 text-white hover:bg-white/10 font-semibold py-3"
              >
                اقرأ المزيد
                <ChevronRight className="w-5 h-5 mr-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* TikTok Section */}
        <div className="text-center mt-16">
          <Card className="bg-white/5 backdrop-blur-md border-white/10 max-w-md mx-auto">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-white mb-3">تابعنا لمزيد من المحتوى</h4>
              <p className="text-blue-200 text-sm mb-4">محتوى متخصص في الأنماط الشخصية والوظائف الإدراكية</p>
              <Button 
                asChild
                className="bg-black hover:bg-gray-800 text-white font-semibold"
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
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
