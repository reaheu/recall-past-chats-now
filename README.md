
# اختبار الأنماط الشخصية - MBTI Personality Test

موقع لاختبار الأنماط الشخصية مبني على الوظائف الإدراكية الثمانية لتحديد نمط الشخصية حسب مقياس مايرز-بريجز (MBTI).

## المميزات

- ✨ اختبار شامل من 60 سؤال متخصص
- 🧠 مبني على الوظائف الإدراكية الثمانية
- 📊 نتائج دقيقة لأنماط MBTI الـ16
- 🎨 تصميم عصري وجذاب
- 📱 متجاوب مع جميع الأجهزة
- 🌙 ألوان داكنة مريحة للعين

## التقنيات المستخدمة

- **React 18** - مكتبة واجهة المستخدم
- **TypeScript** - للكتابة الآمنة
- **Tailwind CSS** - للتصميم
- **Vite** - أداة البناء
- **Shadcn/ui** - مكونات واجهة المستخدم

## التشغيل المحلي

1. **استنسخ المشروع:**
```bash
git clone <repository-url>
cd personality-test
```

2. **ثبت المكتبات:**
```bash
npm install
```

3. **شغل المشروع:**
```bash
npm run dev
```

4. **افتح المتصفح:**
```
http://localhost:8080
```

## البناء للإنتاج

```bash
npm run build
```

## رفع على GitHub Pages

1. **ثبت gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **أضف للـ package.json:**
```json
{
  "homepage": "https://username.github.io/repository-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **ارفع:**
```bash
npm run deploy
```

## هيكل المشروع

```
src/
├── components/
│   ├── PersonalityTest.tsx    # صفحة الاختبار
│   ├── TestResults.tsx        # صفحة النتائج
│   ├── CognitiveFunctions.tsx # صفحة الوظائف الإدراكية
│   └── ui/                    # مكونات واجهة المستخدم
├── data/
│   └── questions.ts           # أسئلة الاختبار
├── utils/
│   └── personalityCalculator.ts # حساب نمط الشخصية
├── pages/
│   └── Index.tsx              # الصفحة الرئيسية
└── App.tsx                    # المكون الأساسي
```

## تخصيص الاختبار

### إضافة أسئلة جديدة

عدل ملف `src/data/questions.ts`:

```typescript
export const questions = [
  {
    question: "السؤال الجديد هنا؟",
    options: [
      { text: "الخيار الأول", value: "Te" },
      { text: "الخيار الثاني", value: "Fi" },
      // ...
    ]
  },
  // ...
];
```

### تعديل خوارزمية النتائج

عدل ملف `src/utils/personalityCalculator.ts` لتخصيص كيفية حساب النمط النهائي.

### تغيير الألوان والتصميم

- عدل `src/index.css` للألوان الأساسية
- عدل `tailwind.config.ts` للتخصيصات المتقدمة

## المساهمة

1. انسخ المشروع (Fork)
2. أنشئ فرع جديد (`git checkout -b feature/amazing-feature`)
3. اعمل التغييرات المطلوبة
4. ارفع التغييرات (`git commit -m 'Add amazing feature'`)
5. ادفع للفرع (`git push origin feature/amazing-feature`)
6. افتح Pull Request

## الترخيص

هذا المشروع مرخص تحت رخصة MIT - راجع ملف [LICENSE](LICENSE) للتفاصيل.

## التواصل

- TikTok: [@reatwiy](https://www.tiktok.com/@reatwiy)
- لأي استفسارات أو اقتراحات، لا تتردد في فتح Issue

## ملاحظات مهمة

- الاختبار لأغراض التعلم والاستكشاف وليس تشخيصاً علمياً دقيقاً
- النتائج قد تتأثر بالحالة المزاجية والظروف الشخصية
- ننصح بمراجعة مختصين لفهم أعمق للشخصية

---

صُنع بـ ❤️ لمساعدة الناس على فهم أنفسهم بشكل أفضل
