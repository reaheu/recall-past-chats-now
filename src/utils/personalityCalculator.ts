
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

  // Get top 4 functions for better analysis
  const topFunctions = functionScores.slice(0, 4);
  const dominant = topFunctions[0].name;
  const auxiliary = topFunctions[1].name;
  const tertiary = topFunctions[2].name;
  const inferior = topFunctions[3].name;

  // Enhanced MBTI type determination with conflict resolution
  const typeMapping: { [key: string]: { type: string; description: string } } = {
    // NT combinations
    'Te-Ni': { type: 'ENTJ', description: 'القائد الاستراتيجي - يركز على تحقيق الأهداف بكفاءة عالية وله رؤية مستقبلية واضحة' },
    'Ni-Te': { type: 'INTJ', description: 'المهندس المعماري - استراتيجي ومستقل في التفكير مع رؤية طويلة المدى' },
    'Ti-Ne': { type: 'INTP', description: 'المفكر - يحب التحليل العميق واستكشاف الأفكار والنظريات المعقدة' },
    'Ne-Ti': { type: 'ENTP', description: 'المناقش - مبدع ومحب للجدل الفكري والاستكشاف الذهني' },
    
    // NF combinations
    'Fe-Ni': { type: 'ENFJ', description: 'المعلم الملهم - يهتم بنمو الآخرين وتطويرهم ولديه حدس قوي حول الناس' },
    'Ni-Fe': { type: 'INFJ', description: 'المحامي - يسعى لفهم الآخرين وتحقيق رؤيته المثالية للعالم' },
    'Fi-Ne': { type: 'INFP', description: 'الوسيط - مثالي ويسعى للأصالة والمعنى في كل ما يفعله' },
    'Ne-Fi': { type: 'ENFP', description: 'الناشط - متحمس ومبدع في العلاقات ولديه طاقة إيجابية معدية' },
    
    // ST combinations
    'Te-Si': { type: 'ESTJ', description: 'المدير التنفيذي - منظم وعملي في تحقيق النتائج ويؤمن بالنظام والتقاليد' },
    'Si-Te': { type: 'ISTJ', description: 'اللوجستي - منظم وموثوق في أداء المهام ويحترم الواجبات والالتزامات' },
    'Ti-Se': { type: 'ISTP', description: 'الحرفي - عملي ومرن في حل المشاكل ولديه مهارات تقنية متقدمة' },
    'Se-Ti': { type: 'ESTP', description: 'رجل الأعمال - عملي ومتكيف مع البيئة ولديه قدرة على التعامل مع الأزمات' },
    
    // SF combinations
    'Fe-Si': { type: 'ESFJ', description: 'المساعد - يهتم براحة الآخرين ويحافظ على التقاليد والانسجام الاجتماعي' },
    'Si-Fe': { type: 'ISFJ', description: 'المحامي - راعي ومهتم بخدمة الآخرين ولديه ذاكرة قوية للتفاصيل المهمة' },
    'Fi-Se': { type: 'ISFP', description: 'الفنان - حساس ومتكيف مع القيم الشخصية ولديه تقدير عميق للجمال' },
    'Se-Fi': { type: 'ESFP', description: 'المؤدي - اجتماعي ومتفاعل مع الحياة ولديه قدرة على إسعاد الآخرين' }
  };

  // Try primary combination first
  let typeKey = `${dominant}-${auxiliary}`;
  let personalityInfo = typeMapping[typeKey];

  // If not found, try reverse combination
  if (!personalityInfo) {
    typeKey = `${auxiliary}-${dominant}`;
    personalityInfo = typeMapping[typeKey];
  }

  // If still not found, use alternative logic based on function families
  if (!personalityInfo) {
    const thinkingFunctions = ['Te', 'Ti'];
    const feelingFunctions = ['Fe', 'Fi'];
    const intuitionFunctions = ['Ne', 'Ni'];
    const sensingFunctions = ['Se', 'Si'];

    // Check for mixed patterns and resolve conflicts
    if ((dominant === 'Ne' || auxiliary === 'Ne') && (dominant === 'Fi' || auxiliary === 'Fi')) {
      personalityInfo = { type: 'ENFP', description: 'الناشط - متحمس ومبدع في العلاقات ولديه طاقة إيجابية معدية' };
    } else if ((dominant === 'Ne' || auxiliary === 'Ne') && (dominant === 'Ti' || auxiliary === 'Ti')) {
      personalityInfo = { type: 'ENTP', description: 'المناقش - مبدع ومحب للجدل الفكري والاستكشاف الذهني' };
    } else if (thinkingFunctions.includes(dominant) && intuitionFunctions.includes(auxiliary)) {
      personalityInfo = { type: 'NT (مفكر بديهي)', description: 'شخصية تجمع بين التفكير المنطقي والحدس القوي - مبدع في حل المشاكل المعقدة' };
    } else if (feelingFunctions.includes(dominant) && intuitionFunctions.includes(auxiliary)) {
      personalityInfo = { type: 'NF (مثالي بديهي)', description: 'شخصية تجمع بين المشاعر والحدس - مهتم بالقيم الإنسانية والإمكانيات' };
    } else if (thinkingFunctions.includes(dominant) && sensingFunctions.includes(auxiliary)) {
      personalityInfo = { type: 'ST (مفكر عملي)', description: 'شخصية تجمع بين التفكير المنطقي والواقعية - ممتاز في التطبيق العملي للأفكار' };
    } else if (feelingFunctions.includes(dominant) && sensingFunctions.includes(auxiliary)) {
      personalityInfo = { type: 'SF (مهتم عملي)', description: 'شخصية تجمع بين المشاعر والواقعية - ممتاز في خدمة الآخرين بطرق عملية' };
    } else {
      personalityInfo = { type: 'نمط متوازن', description: 'شخصية متوازنة تجمع بين عدة خصائص بشكل متناغم' };
    }
  }

  return {
    type: personalityInfo.type,
    description: personalityInfo.description,
    functions: functionScores
  };
};
