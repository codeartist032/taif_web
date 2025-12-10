import { pricingOptions } from "../constants";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
   رحلة صُنْعَة:
 
        <span className="text-primary-dark">
          {" "}
حيث تتحول مشاعرك إلى بصمة وتصنع من إحساسك فخامة تسويقي
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-black/100 max-w-4xl">
        استراتيجية تسويقية مبتكرة تمنح مشروعك طابعاً فريداً
      </p>
      <div className="flex justify-center my-10">
        <button
          onClick={() => window.open(pricingOptions[0].paymentLink, "_blank")}
          className="bg-primary-old-burgundy py-3 px-6 mx-3 rounded-md text-white font-semibold hover:bg-primary-burgundy hover:shadow-lg hover:shadow-primary-burgundy/50 transition-all duration-500 cursor-pointer"
        >
        احصل على الكتيّب الآن واكتشف تميّز صُنْعَة
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
