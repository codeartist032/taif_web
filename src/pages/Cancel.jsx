import { useNavigate } from "react-router-dom";

const Cancel = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-offwhite">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="bg-white border border-primary-mauve/40 rounded-xl p-12 shadow-lg">
          {/* Cancel Icon */}
          <div className="w-20 h-20 bg-primary-mauve/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-primary-old-burgundy"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          {/* Cancel Message */}
          <h1 className="text-3xl font-bold mb-4 text-primary-old-burgundy">
            تم إلغاء عملية الدفع
          </h1>

          <p className="text-xl text-black/80 mb-8">
            لم يتم إكمال عملية الشراء. يمكنك المحاولة مرة أخرى في أي وقت.
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate("/")}
              className="bg-primary-old-burgundy text-white px-8 py-3 rounded-lg hover:bg-primary-burgundy transition-all duration-500"
            >
              العودة للصفحة الرئيسية
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cancel;
