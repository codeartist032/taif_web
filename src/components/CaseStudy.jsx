const CaseStudy = () => {
  return (
    <div className="mt-20 border-t border-primary-mauve/30 pt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide">
            <span className="text-primary-old-burgundy">قبل وبعد</span> تطبيق
            الاستراتيجية
          </h2>
          <p className="mt-4 text-xl text-black/70">
            فرع نعومي مكة – طيف آل ظافر
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Before */}
          <div className="bg-primary-old-burgundy border border-primary-mauve/40 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-mauve/30 rounded-full flex items-center justify-center text-2xl">
                ✗
              </div>
              <h3 className="text-2xl font-bold mr-4 text-primary-cream">
                قبل التطبيق
              </h3>
            </div>
            <ul className="space-y-4 text-primary-cream">
              <li className="flex items-start">
                <span className="text-primary-mauve ml-3">•</span>
                <span>ضعف التفاعل الرقمي مقارنة ببقية الفروع</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-mauve ml-3">•</span>
                <span>ضعف الهوية البصرية على السوشيال</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-mauve ml-3">•</span>
                <span>فجوة واضحة بين توقعات العميلة والتجربة داخل الفرع</span>
              </li>
            </ul>
          </div>

          {/* After */}
          <div className="bg-gradient-to-r from-primary-burgundy/10 to-primary-mauve/10 border border-primary-burgundy rounded-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-burgundy/20 rounded-full flex items-center justify-center text-2xl">
                ✓
              </div>
              <h3 className="text-2xl font-bold mr-4 text-primary-burgundy">
                بعد التطبيق
              </h3>
            </div>
            <ul className="space-y-4 text-primary-black">
              <li className="flex items-start">
                <span className="text-primary-burgundy ml-3">•</span>
                <span>ارتفع التفاعل بشكل ملحوظ</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-burgundy ml-3">•</span>
                <span>زاد رضا العملاء بشكل كبير</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-burgundy ml-3">•</span>
                <span>أصبحت الموظفات يقدمن المنتجات بثقة أكبر</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-black ml-3">•</span>
                <span>ارتفاع تدريجي وواضح في المبيعات</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-black ml-3">•</span>
                <span>
                  الأنشطة التسويقية كانت فعّالة جداً وسبب رئيسي في تحسين صورة
                  الفرع
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-12 bg-gradient-to-r from-primary-burgundy to-primary-mauve rounded-lg p-1">
          <div className="bg-primary-old-burgundy rounded-lg p-8">
            <p className="text-2xl text-center italic text-primary-cream mb-4">
              "كان كل شيء ممتاز ونطمح للاستمرار بنفس الأسلوب وتطويره أكثر حقاً"
            </p>
            <p className="text-center text-primary-burgundy font-semibold">
              - مديرة فرع نعومي مكة
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
