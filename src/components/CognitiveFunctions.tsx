
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Brain, Lightbulb, Eye, Heart, Target } from "lucide-react";

interface CognitiveFunctionsProps {
  onBack: () => void;
}

const CognitiveFunctions = ({ onBack }: CognitiveFunctionsProps) => {
  const functions = [
    {
      name: "الإدراك الخارجي المهيمن (Te)",
      description: "التركيز على تنظيم العالم الخارجي والكفاءة في تحقيق الأهداف",
      icon: Target,
      color: "from-red-400 to-red-600"
    },
    {
      name: "الإدراك الداخلي المهيمن (Ti)", 
      description: "التحليل المنطقي الداخلي والسعي لفهم كيفية عمل الأشياء",
      icon: Brain,
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "الشعور الخارجي المهيمن (Fe)",
      description: "الاهتمام بمشاعر الآخرين والسعي لخلق الانسجام الاجتماعي",
      icon: Heart,
      color: "from-green-400 to-green-600"
    },
    {
      name: "الشعور الداخلي المهيمن (Fi)",
      description: "القيم الشخصية العميقة والأصالة في التعبير عن الذات",
      icon: Heart,
      color: "from-purple-400 to-purple-600"
    },
    {
      name: "الحدس الخارجي المهيمن (Ne)",
      description: "رؤية الإمكانيات والاتصالات في العالم الخارجي",
      icon: Lightbulb,
      color: "from-yellow-400 to-orange-600"
    },
    {
      name: "الحدس الداخلي المهيمن (Ni)",
      description: "البصيرة الداخلية والقدرة على رؤية الأنماط المستقبلية",
      icon: Eye,
      color: "from-indigo-400 to-indigo-600"
    },
    {
      name: "الإحساس الخارجي المهيمن (Se)",
      description: "الوعي باللحظة الحالية والاستجابة للبيئة المحيطة",
      icon: Eye,
      color: "from-pink-400 to-pink-600"
    },
    {
      name: "الإحساس الداخلي المهيمن (Si)",
      description: "الاعتماد على التجارب السابقة والتفاصيل المألوفة",
      icon: Brain,
      color: "from-teal-400 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex items-center mb-8 pt-8">
          <Button 
            onClick={onBack}
            variant="ghost" 
            className="text-slate-200 hover:bg-slate-700/50 hover:text-white mr-4 border-slate-600/50"
          >
            <ArrowLeft className="w-5 h-5 ml-2" />
            العودة
          </Button>
          <div className="flex items-center">
            <Brain className="w-6 h-6 text-slate-200 mr-3" />
            <h1 className="text-3xl font-bold text-slate-100">الوظائف الإدراكية الثمانية</h1>
          </div>
        </div>

        {/* Introduction */}
        <Card className="bg-slate-800/40 backdrop-blur-md border-slate-600/50 mb-8 shadow-xl">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-slate-100 mb-4">ما هي الوظائف الإدراكية؟</h2>
            <p className="text-slate-300 leading-relaxed">
              الوظائف الإدراكية هي العمليات العقلية الأساسية التي نستخدمها لمعالجة المعلومات واتخاذ القرارات. 
              وفقاً لنظرية كارل يونغ، هناك ثماني وظائف إدراكية أساسية تشكل أساس الأنماط الشخصية المختلفة. 
              كل شخص يستخدم جميع هذه الوظائف ولكن بدرجات متفاوتة وترتيب مختلف.
            </p>
          </CardContent>
        </Card>

        {/* Functions Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {functions.map((func, index) => {
            const IconComponent = func.icon;
            return (
              <Card key={index} className="bg-slate-800/40 backdrop-blur-md border-slate-600/50 hover:bg-slate-700/50 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <CardHeader>
                  <div className="flex items-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${func.color} rounded-full flex items-center justify-center mr-4 shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-slate-100 text-lg">{func.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed">{func.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Understanding Section */}
        <Card className="bg-slate-800/30 backdrop-blur-md border-slate-600/40 shadow-xl">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-slate-100 mb-4">كيف تعمل الوظائف الإدراكية؟</h3>
            <div className="space-y-4 text-slate-300">
              <p>
                • <strong className="text-slate-200">الوظيفة المهيمنة:</strong> هي الوظيفة الأقوى والأكثر تطوراً، وتظهر في سن مبكرة وتكون مصدر قوتنا الأساسي.
              </p>
              <p>
                • <strong className="text-slate-200">الوظيفة المساعدة:</strong> تدعم الوظيفة المهيمنة وتوازنها، وتتطور في سن المراهقة والشباب.
              </p>
              <p>
                • <strong className="text-slate-200">الوظيفة الثالثة:</strong> تظهر في منتصف العمر وقد تكون مصدر تحدي أو نمو شخصي.
              </p>
              <p>
                • <strong className="text-slate-200">الوظيفة الأدنى:</strong> هي الأضعف والأقل تطوراً، وقد تظهر تحت الضغط أو في حالات التوتر.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CognitiveFunctions;
