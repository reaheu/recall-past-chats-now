
# إعداد المشروع في Visual Studio Code

## متطلبات النظام
- Node.js (الإصدار 18 أو أحدث)
- npm أو yarn
- Visual Studio Code

## خطوات الإعداد

### 1. تحميل المشروع
احفظ جميع ملفات المشروع في مجلد جديد على جهازك.

### 2. تثبيت المكتبات
افتح Terminal في VS Code واكتب:
```bash
npm install
```

### 3. تشغيل المشروع محلياً
```bash
npm run dev
```
المشروع سيعمل على: http://localhost:8080

### 4. البناء للإنتاج
```bash
npm run build
```

## ملاحظات مهمة
- المشروع مبني باستخدام React + TypeScript + Vite
- يستخدم Tailwind CSS للتصميم
- جميع المكونات موجودة في مجلد src/components
- الصفحات في مجلد src/pages

## البنية الأساسية للمشروع
```
src/
├── components/           # مكونات الواجهة
│   ├── PersonalityTest.tsx
│   ├── TestResults.tsx
│   └── ui/              # مكونات النظام الأساسي
├── pages/
│   └── Index.tsx        # الصفحة الرئيسية
├── data/
│   └── questions.ts     # أسئلة الاختبار
├── utils/
│   └── personalityCalculator.ts
└── index.css           # الأنماط الأساسية
```

## للتعديل على المشروع
1. افتح VS Code
2. افتح مجلد المشروع (File > Open Folder)
3. افتح Terminal (Terminal > New Terminal)
4. شغل `npm install` ثم `npm run dev`
5. ابدأ التعديل على الملفات

## نشر المشروع
يمكنك نشر المشروع على:
- Vercel
- Netlify  
- GitHub Pages
- أي خدمة استضافة أخرى تدعم React

تأكد من تشغيل `npm run build` قبل النشر.
