import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "مميزات", href: "#" },
  { label: "الية التحسين", href: "#" },
  { label: "منتجاتنا", href: "#" },
  { label: "اراء الزبائن", href: "#" },
  { label: "من نحن", href: "#" },
];

export const testimonials = [
  {
    user: "أحمد العلي",
    company: "شركة النمو السريع",
    image: user1,
    text: "حققت استراتيجياتكم نمواً ملحوظاً في مبيعاتنا وزادت نسبة العائد على الاستثمار بنسبة 40% خلال الربع الأول.",
  },
  {
    user: "سارة محمد",
    company: "إبداع تك",
    image: user2,
    text: "ساعدتنا خطة المحتوى المحكمة على بناء جمهور حقيقي ومشارك، مما عزز من مصداقية علامتنا التجارية في السوق.",
  },
  {
    user: "خالد يوسف",
    company: "حلول التسويق",
    image: user3,
    text: "تصدرنا نتائج البحث بفضل جهودكم في تحسين محركات البحث، مما جلب لنا عدداً كبيراً من الزيارات العضوية المجانية.",
  },
  {
    user: "منى عبدالله",
    company: "رؤية المستقبل",
    image: user4,
    text: "تضاعف عدد العملاء المحتملين خلال شهرين فقط بفضل حملاتكم الإعلانية المستهدفة بدقة عالية.",
  },
  {
    user: "فيصل العمر",
    company: "القمة للخدمات",
    image: user5,
    text: "أصبحت علامتنا التجارية أكثر قوة وتأثيراً في السوق بفضل استراتيجياتكم المبتكرة في تحديد التموضع.",
  },
  {
    user: "ليلى حسن",
    company: "تقنية الغد",
    image: user6,
    text: "التقارير التحليلية الدورية ساعدتنا على فهم السوق بشكل أفضل واتخاذ قرارات استراتيجية صائبة.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "حملات البريد الإلكتروني",
    description:
      "أنشئ حملات بريد إلكتروني مخصصة ومؤتمتة لزيادة التفاعل وتحقيق التحويلات مع أدواتنا المتطورة.",
  },
  {
    icon: <Fingerprint />,
    text: "تعزيز الحضور الرقمي",
    description:
      "أدر جميع منصات التواصل الاجتماعي من مكان واحد، وجدول المنشورات لتوسيع نطاق وصولك وبناء جمهورك.",
  },
  {
    icon: <ShieldHalf />,
    text: "تحسين محركات البحث",
    description:
      "حسن ترتيب موقعك باستخدام أدوات SEO متقدمة لضمان وصول عملائك المستهدفين إليك بسهولة وفعالية.",
  },
  {
    icon: <BatteryCharging />,
    text: "إدارة وتسويق المحتوى",
    description:
      "خطط، أنشئ، وانشر محتوى جذاب عبر قنوات متعددة لبناء علاقة قوية ومستدامة مع جمهورك.",
  },
  {
    icon: <PlugZap />,
    text: "جذب واستقطاب العملاء",
    description:
      "استخدم نماذج مخصصة وصفحات هبوط فعالة لتحويل الزوار إلى عملاء محتملين ثم إلى عملاء دائمين.",
  },
  {
    icon: <GlobeLock />,
    text: "تحليلات وقرارات ذكية",
    description:
      "تتبع أداء حملاتك بتقارير شاملة واتخذ قرارات مبنية على البيانات لزيادة العائد على الاستثمار.",
  },
];

export const checklistItems = [
  {
    title: "تحليل الأداء الحالي",
    description:
      "قم بتحليل شامل لأداء مشروعك الحالي لتحديد الفجوات وفرص التحسين المتاحة.",
  },
  {
    title: "تحديد الجمهور المستهدف",
    description:
      "افهم جمهورك بعمق لإنشاء رسائل تسويقية موجهة ومؤثرة تلبي احتياجاتهم.",
  },
  {
    title: "تحسين استراتيجية المحتوى",
    description:
      "طور استراتيجية محتوى قوية تجذب الانتباه وتعزز مكانة علامتك التجارية.",
  },
  {
    title: "التنفيذ والمتابعة",
    description:
      "ابدأ تنفيذ حملاتك وتابع النتائج باستمرار لضمان تحقيق أقصى عائد ممكن.",
  },
];

export const pricingOptions = [
  {
    title: "Soft-Touch Sensory Marketing Loop",
    price: "99",
    features: [
      "ارتفاع ملحوظ في التفاعل",
      "زيادة كبيرة في رضا العملاء",
      "ارتفاع تدريجي وواضح في المبيعات",
      "استراتيجية قابلة للتطبيق فوراً",
    ],
    paymentLink: "https://buy.stripe.com/test_aFa9AUc2CbZi5Vk8Yk8og00",
  },
];

export const resourcesLinks = [
  { href: "#", text: "دليل البدء" },
  { href: "#", text: "المدونة" },
  { href: "#", text: "دراسات الحالة" },
  { href: "#", text: "دليل الاستراتيجيات" },
  { href: "#", text: "الأسئلة الشائعة" },
];

export const platformLinks = [
  { href: "#", text: "الاستراتيجيات" },
  { href: "#", text: "التسويق الحسي" },
  { href: "#", text: "تحسين التفاعل" },
  { href: "#", text: "دراسة الحالة" },
  { href: "#", text: "الشهادات" },
];

export const communityLinks = [
  { href: "#", text: "تواصل معنا" },
  { href: "#", text: "واتساب" },
  { href: "#", text: "إنستقرام" },
  { href: "#", text: "سناب شات" },
  { href: "#", text: "تويتر" },
];
