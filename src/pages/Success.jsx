import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import strategyPDF from "../assets/Soft-Touch Sensory Marketing Loop -.pdf";

const Success = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [downloading, setDownloading] = useState(false);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    // Check for session_id from Stripe
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      // No session ID means user didn't come from Stripe payment
      // Redirect to home page
      navigate("/");
      return;
    }

    // Session ID exists, mark as verified
    setVerified(true);
    setDownloading(true);

    // Automatically download the PDF
    const downloadPDF = () => {
      const link = document.createElement("a");
      link.href = strategyPDF;
      link.download = "Soft-Touch-Sensory-Marketing-Loop-Strategy.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloading(false);
    };

    // Start download after 1 second
    const timer = setTimeout(downloadPDF, 1000);

    return () => clearTimeout(timer);
  }, [searchParams, navigate]);

  // Don't show anything while verifying
  if (!verified) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-offwhite">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="bg-white border border-primary-mauve/40 rounded-xl p-12 shadow-lg">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold mb-4 text-primary-old-burgundy">
            تم الدفع بنجاح!
          </h1>

          <p className="text-xl text-black/80 mb-8">
            شكراً لشرائك استراتيجية Soft-Touch Sensory Marketing Loop
          </p>

          {/* Download Status */}
          {downloading ? (
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 text-primary-burgundy">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-burgundy"></div>
                <span>جاري تحميل الملف...</span>
              </div>
            </div>
          ) : (
            <div className="mb-8">
              <p className="text-green-400 mb-4">✓ تم تحميل الملف بنجاح</p>
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = strategyPDF;
                  link.download =
                    "Soft-Touch-Sensory-Marketing-Loop-Strategy.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="text-primary-burgundy hover:text-primary-mauve underline"
              >
                إعادة تحميل الملف
              </button>
            </div>
          )}

          {/* What's Next */}
          <div className="border-t border-primary-mauve/30 pt-8 mb-8">
            <h3 className="text-lg font-semibold mb-4">ماذا بعد؟</h3>
            <ul className="text-black/70 space-y-2 text-right">
              <li className="flex items-start gap-2">
                <span className="text-primary-burgundy">•</span>
                <span>افتح ملف PDF واقرأ الاستراتيجية بالكامل</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>ادرس دراسة حالة فرع نعومي مكة</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                <span>طبق العناصر الحسية الخمسة على مشروعك</span>
              </li>
            </ul>
          </div>

          {/* Return Home Button */}
          <button
            onClick={() => navigate("/")}
            className="bg-primary-old-burgundy text-white px-8 py-3 rounded-lg hover:bg-primary-burgundy transition-all duration-500"
          >
            العودة للصفحة الرئيسية
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
