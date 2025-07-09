
# تعليمات إعداد مشروع اختبار الأنماط الشخصية

## نظرة عامة على المشروع
هذا مشروع اختبار شخصية شامل يحتوي على 80 سؤال لتحديد نمط الشخصية وفقاً للوظائف الإدراكية الثمانية.

## المتطلبات الأساسية
- Node.js (الإصدار 18 أو أحدث)
- npm أو yarn أو pnpm
- Visual Studio Code (اختياري ولكن موصى به)

## خطوات الإعداد

### 1. إنشاء مشروع جديد
```bash
# إنشاء مجلد جديد للمشروع
mkdir personality-test-app
cd personality-test-app

# تهيئة مشروع React جديد باستخدام Vite
npm create vite@latest . -- --template react-ts
```

### 2. تثبيت المكتبات المطلوبة
```bash
npm install @radix-ui/react-progress @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react
npm install -D tailwindcss postcss autoprefixer @types/node
```

### 3. إعداد Tailwind CSS
```bash
npx tailwindcss init -p
```

### 4. نسخ ملفات المشروع
انسخ جميع الملفات من المشروع الحالي إلى المجلد الجديد:

**الملفات الأساسية:**
- `src/components/PersonalityTest.tsx` - مكون الاختبار الرئيسي (80 سؤال)
- `src/components/CognitiveFunctions.tsx` - صفحة شرح الوظائف الإدراكية
- `src/components/TestResults.tsx` - صفحة عرض النتائج
- `src/pages/Index.tsx` - الصفحة الرئيسية
- `src/data/questions.ts` - بيانات الأسئلة (80 سؤال)
- `src/utils/personalityCalculator.ts` - حساب نتائج الشخصية

**مكونات الواجهة:**
- `src/components/ui/button.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/progress.tsx`

**ملفات التصميم:**
- `src/index.css` - أنماط CSS الأساسية
- `tailwind.config.ts` - إعدادات Tailwind

### 5. تشغيل المشروع
```bash
npm run dev
```
سيعمل المشروع على: http://localhost:5173

### 6. بناء المشروع للإنتاج
```bash
npm run build
```

## خصائص المشروع

### الاختبار
- **80 سؤال شامل** لتحديد نمط الشخصية
- **تصميم متجاوب** يعمل على جميع الأجهزة
- **ألوان داكنة مريحة** للعين
- **واجهة عربية** بالكامل

### الوظائف الإدراكية
- شرح مفصل للوظائف الثمانية
- **ألوان محسنة** بدون إرهاق بصري
- تصميم كارت أنيق لكل وظيفة

### النتائج
- تحليل مفصل لنمط الشخصية
- توصيات شخصية
- إمكانية إعادة الاختبار

## البنية التفصيلية

```
src/
├── components/
│   ├── PersonalityTest.tsx      # الاختبار الرئيسي - 80 سؤال
│   ├── CognitiveFunctions.tsx   # شرح الوظائف الإدراكية
│   ├── TestResults.tsx          # عرض النتائج
│   └── ui/                      # مكونات الواجهة الأساسية
│       ├── button.tsx
│       ├── card.tsx
│       └── progress.tsx
├── pages/
│   └── Index.tsx               # الصفحة الرئيسية
├── data/
│   └── questions.ts            # 80 سؤال للاختبار
├── utils/
│   └── personalityCalculator.ts # حساب نتائج الشخصية
├── index.css                   # الأنماط الأساسية
└── main.tsx                    # نقطة دخول التطبيق
```

## التخصيص والتطوير

### إضافة أسئلة جديدة
عدل ملف `src/data/questions.ts` وأضف أسئلة جديدة بنفس التنسيق.

### تغيير الألوان
عدل ملف `src/index.css` أو استخدم فئات Tailwind في المكونات.

### إضافة أنماط شخصية جديدة
عدل ملف `src/utils/personalityCalculator.ts` لإضافة أنماط جديدة.

## النشر

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# ارفع مجلد dist إلى Netlify
```

### GitHub Pages
```bash
npm install -D gh-pages
# أضف للـ package.json:
# "homepage": "https://username.github.io/repository-name"
# "deploy": "gh-pages -d dist"
npm run build
npm run deploy
```

## الدعم الفني
إذا واجهت أي مشكلة في الإعداد، تأكد من:
- تثبيت Node.js الإصدار الصحيح
- تشغيل `npm install` في المجلد الصحيح
- فحص ملف `package.json` للتأكد من وجود جميع المكتبات

## ميزات حديثة
- ✅ 80 سؤال شامل للاختبار
- ✅ تصميم داكن مريح للعين
- ✅ واجهة عربية كاملة
- ✅ تصميم متجاوب
- ✅ ألوان محسنة بدون إرهاق بصري
- ✅ تحليل مفصل للنتائج
