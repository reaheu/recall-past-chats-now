
interface FunctionScore {
  name: string;
  description: string;
  score: number;
  percentage: number;
}

interface PersonalityResult {
  type: string;
  description: string;
  functions: FunctionScore[];
}

export const calculatePersonalityType = (answers: string[]): PersonalityResult => {
  // Count occurrences of each cognitive function
  const functionCounts = {
    Te: 0, Ti: 0, Fe: 0, Fi: 0,
    Ne: 0, Ni: 0, Se: 0, Si: 0
  };

  answers.forEach(answer => {
    if (functionCounts.hasOwnProperty(answer)) {
      functionCounts[answer as keyof typeof functionCounts]++;
    }
  });

  // Calculate percentages
  const totalAnswers = answers.length;
  const functionDescriptions = {
    Te: "التفكير الخارجي - تنظيم العالم الخارجي والكفاءة",
    Ti: "التفكير الداخلي - التحليل المنطقي والفهم العميق", 
    Fe: "الشعور الخارجي - الاهتمام بمشاعر الآخرين والانسجام",
    Fi: "الشعور الداخلي - القيم الشخصية والأصالة",
    Ne: "الحدس الخارجي - رؤية الإمكانيات والأفكار الجديدة",
    Ni: "الحدس الداخلي - البصيرة والرؤية المستقبلية",
    Se: "الإحساس الخارجي - الوعي باللحظة الحالية والتفاعل",
    Si: "الإحساس الداخلي - الاعتماد على التجارب والتفاصيل"
  };

  // Create function scores array
  const functionScores: FunctionScore[] = Object.entries(functionCounts).map(([key, count]) => ({
    name: key,
    description: functionDescriptions[key as keyof typeof functionDescriptions],
    score: count,
    percentage: Math.round((count / totalAnswers) * 100)
  }));

  // Sort by score (highest first)
  functionScores.sort((a, b) => b.score - a.score);

  // Determine personality type based on dominant functions
  const dominant = functionScores[0].name;
  const auxiliary = functionScores[1].name;
  
  // Simplified MBTI type determination
  const typeMapping: { [key: string]: { type: string; description: string } } = {
    'Te-Ni': { type: 'ENTJ', description: 'القائد الاستراتيجي - يركز على تحقيق الأهداف بكفاءة عالية' },
    'Te-Si': { type: 'ESTJ', description: 'المدير التنفيذي - منظم وعملي في تحقيق النتائج' },
    'Ti-Ne': { type: 'INTP', description: 'المفكر - يحب التحليل العميق واستكشاف الأفكار' },
    'Ti-Se': { type: 'ISTP', description: 'الحرفي - عملي ومرن في حل المشاكل' },
    'Fe-Ni': { type: 'ENFJ', description: 'المعلم الملهم - يهتم بنمو الآخرين وتطويرهم' },
    'Fe-Si': { type: 'ESFJ', description: 'المساعد - يهتم براحة الآخرين ويحافظ على التقاليد' },
    'Fi-Ne': { type: 'INFP', description: 'الوسيط - مثالي ويسعى للأصالة والمعنى' },
    'Fi-Se': { type: 'ISFP', description: 'الفنان - حساس ومتكيف مع القيم الشخصية' },
    'Ne-Ti': { type: 'ENTP', description: 'المناقش - مبدع ومحب للجدل الفكري' },
    'Ne-Fi': { type: 'ENFP', description: 'الناشط - متحمس ومبدع في العلاقات' },
    'Ni-Te': { type: 'INTJ', description: 'المهندس المعماري - استراتيجي ومستقل في التفكير' },
    'Ni-Fe': { type: 'INFJ', description: 'المحامي - يسعى لفهم الآخرين وتحقيق رؤيته' },
    'Se-Ti': { type: 'ESTP', description: 'رجل الأعمال - عملي ومتكيف مع البيئة' },
    'Se-Fi': { type: 'ESFP', description: 'المؤدي - اجتماعي ومتفاعل مع الحياة' },
    'Si-Te': { type: 'ISTJ', description: 'اللوجستي - منظم وموثوق في أداء المهام' },
    'Si-Fe': { type: 'ISFJ', description: 'المحامي - راعي ومهتم بخدمة الآخرين' }
  };

  const typeKey = `${dominant}-${auxiliary}`;
  const personalityInfo = typeMapping[typeKey] || { 
    type: 'نمط مختلط', 
    description: 'نمط شخصي فريد يجمع بين عدة خصائص' 
  };

  return {
    type: personalityInfo.type,
    description: personalityInfo.description,
    functions: functionScores
  };
};
