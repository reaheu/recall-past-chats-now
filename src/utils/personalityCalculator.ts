
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

  // Get top functions for analysis
  const dominant = functionScores[0].name;
  const auxiliary = functionScores[1].name;

  // MBTI type determination - always returns a valid 16 personality type
  const mbtiTypes = {
    // NT types
    'Te-Ni': { type: 'ENTJ', description: 'القائد الاستراتيجي - يركز على تحقيق الأهداف بكفاءة عالية وله رؤية مستقبلية واضحة' },
    'Ni-Te': { type: 'INTJ', description: 'المهندس المعماري - استراتيجي ومستقل في التفكير مع رؤية طويلة المدى' },
    'Ti-Ne': { type: 'INTP', description: 'المفكر - يحب التحليل العميق واستكشاف الأفكار والنظريات المعقدة' },
    'Ne-Ti': { type: 'ENTP', description: 'المناقش - مبدع ومحب للجدل الفكري والاستكشاف الذهني' },
    
    // NF types
    'Fe-Ni': { type: 'ENFJ', description: 'المعلم الملهم - يهتم بنمو الآخرين وتطويرهم ولديه حدس قوي حول الناس' },
    'Ni-Fe': { type: 'INFJ', description: 'المحامي - يسعى لفهم الآخرين وتحقيق رؤيته المثالية للعالم' },
    'Fi-Ne': { type: 'INFP', description: 'الوسيط - مثالي ويسعى للأصالة والمعنى في كل ما يفعله' },
    'Ne-Fi': { type: 'ENFP', description: 'الناشط - متحمس ومبدع في العلاقات ولديه طاقة إيجابية معدية' },
    
    // ST types
    'Te-Si': { type: 'ESTJ', description: 'المدير التنفيذي - منظم وعملي في تحقيق النتائج ويؤمن بالنظام والتقاليد' },
    'Si-Te': { type: 'ISTJ', description: 'اللوجستي - منظم وموثوق في أداء المهام ويحترم الواجبات والالتزامات' },
    'Ti-Se': { type: 'ISTP', description: 'الحرفي - عملي ومرن في حل المشاكل ولديه مهارات تقنية متقدمة' },
    'Se-Ti': { type: 'ESTP', description: 'رجل الأعمال - عملي ومتكيف مع البيئة ولديه قدرة على التعامل مع الأزمات' },
    
    // SF types
    'Fe-Si': { type: 'ESFJ', description: 'المساعد - يهتم براحة الآخرين ويحافظ على التقاليد والانسجام الاجتماعي' },
    'Si-Fe': { type: 'ISFJ', description: 'المحامي - راعي ومهتم بخدمة الآخرين ولديه ذاكرة قوية للتفاصيل المهمة' },
    'Fi-Se': { type: 'ISFP', description: 'الفنان - حساس ومتكيف مع القيم الشخصية ولديه تقدير عميق للجمال' },
    'Se-Fi': { type: 'ESFP', description: 'المؤدي - اجتماعي ومتفاعل مع الحياة ولديه قدرة على إسعاد الآخرين' }
  };

  // Try primary combination first
  let typeKey = `${dominant}-${auxiliary}`;
  let personalityInfo = mbtiTypes[typeKey as keyof typeof mbtiTypes];

  // If not found, try reverse combination
  if (!personalityInfo) {
    typeKey = `${auxiliary}-${dominant}`;
    personalityInfo = mbtiTypes[typeKey as keyof typeof mbtiTypes];
  }

  // Fallback logic - determine by dominant function patterns
  if (!personalityInfo) {
    const allTypes = Object.values(mbtiTypes);
    
    // Assign based on strongest function patterns
    if (dominant === 'Te' || (dominant === 'Ti' && auxiliary === 'Se')) {
      personalityInfo = dominant === 'Te' ? 
        (auxiliary === 'Ni' ? mbtiTypes['Te-Ni'] : mbtiTypes['Te-Si']) :
        mbtiTypes['Ti-Se'];
    } else if (dominant === 'Fe' || dominant === 'Fi') {
      personalityInfo = dominant === 'Fe' ?
        (auxiliary === 'Ni' ? mbtiTypes['Fe-Ni'] : mbtiTypes['Fe-Si']) :
        (auxiliary === 'Ne' ? mbtiTypes['Fi-Ne'] : mbtiTypes['Fi-Se']);
    } else if (dominant === 'Ne') {
      personalityInfo = auxiliary === 'Ti' ? mbtiTypes['Ne-Ti'] : mbtiTypes['Ne-Fi'];
    } else if (dominant === 'Ni') {
      personalityInfo = auxiliary === 'Te' ? mbtiTypes['Ni-Te'] : mbtiTypes['Ni-Fe'];
    } else if (dominant === 'Se') {
      personalityInfo = auxiliary === 'Ti' ? mbtiTypes['Se-Ti'] : mbtiTypes['Se-Fi'];
    } else if (dominant === 'Si') {
      personalityInfo = auxiliary === 'Te' ? mbtiTypes['Si-Te'] : mbtiTypes['Si-Fe'];
    } else {
      // Final fallback - assign ENFP as default
      personalityInfo = mbtiTypes['Ne-Fi'];
    }
  }

  return {
    type: personalityInfo.type,
    description: personalityInfo.description,
    functions: functionScores
  };
};
