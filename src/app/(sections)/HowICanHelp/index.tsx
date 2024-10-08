import Heading from "@/components/helpers/Heading";
import React from "react";

const Points = [
  "Your brand will shine with a stunning landing page that attracts more potential clients.",
  "Your website visitors will become paying customers through easy-to-use designs and effective call-to-action strategies, boosting your sales.",
  "I will Ensure your website looks great and functions flawlessly across all devices, be it Mobile, Tablet or Desktop.",
  "Your business will rank higher in search results, attracting more organic traffic with search engine optimized websites.",
  "Your website will stay up-to-date, secure, and perform at its best with ongoing support, letting you focus on growing your business.",
];

export const HowICanHelpSection = () => {
  return (
    <section className="relative left-1/2 -translate-x-1/2 flex flex-col lg:flex-row justify-between items-center pt-10 sm:pt-16 md:pt-20 pb-14 sm:pb-20 md:pb-28 w-11/12 lg:w-10/12 xl:w-11/12 max-w-[140rem]">
      <div className="flex flex-col justify-between w-full lg:w-auto">
        <Heading id="how-i-can-help-header">
          Here&apos;s how I can help you
        </Heading>
        <article className="flex flex-col justify-between w-full lg:w-11/12 mt-8 sm:mt-12 md:mt-16">
          {Points.map((point, index) => (
            <p key={index} className="flex items-start mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
              <span className="text-primary font-bold text-xl sm:text-2xl md:text-3xl mr-2 sm:mr-3 flex-shrink-0">• </span>
              {point}
            </p>
          ))}
        </article>
      </div>
    </section>
  );
};

export default HowICanHelpSection;
