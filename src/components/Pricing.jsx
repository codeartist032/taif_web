import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        منتجاتنا
      </h2>
      <div className="flex flex-wrap justify-center">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-primary-mauve/40 rounded-xl items-center bg-primary-old-burgundy">
              <p className="text-4xl mb-8 text-primary-cream">
                {option.title}
                {option.title === "Pro" && (
                  <span className="text-primary-old-burgundy text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2 text-primary-cream">
                  {option.price}
                </span>
                <span className="text-primary-cream/60 tracking-tight">
                  ريال
                </span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li
                    key={index}
                    className="mt-8 flex items-center text-primary-cream"
                  >
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => window.open(option.paymentLink, "_blank")}
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl bg-primary-old-burgundy text-white hover:opacity-90 border-2 border-primary-peach rounded-lg transition duration-500 cursor-pointer"
              >
                شراء
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
