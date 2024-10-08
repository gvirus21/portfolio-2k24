import PricingContainer from "@/app/(sections)/Services/pricing";
import Heading from "@/components/helpers/Heading";

const PLANS = [
  {
    id: "starter_plan",
    name: "Starter",
    subtitle: "Perfect for small businesses seeking an online presence.",
    price: 199.99,
    features: [
      "Beautiful & modern website design.",
      "Optimised SEO for higher conversion.",
      "A fully Mobile-Responsive Design tailored to multiple devices with different screen sizes.",
      "Social Media & Contact Form Integration.",
      "Quick delivery (5-7 days)",
      "Training for the platform.",
    ],
  },
  {
    id: "growth_plan",
    name: "Growth",
    is_popular: true,
    subtitle:
      "Best suited for Startups & growing businesses looking to expand.",
    price: 499.99,
    features: [
      "Modern Website with Sleek Animations",
      "Dedicated Notion Board",
      "Advanced SEO Optimisation for higher conversion",
      "Exclusive Features & enhancments",
      "Google Analytics Setup & Integration.",
      "Dedicated CMS Integration",
      "Deliverible within 2-4 weeks.",
      "Training for the platform.",
    ],
  },
  {
    id: "custom_plan",
    name: "Custom Website",
    subtitle:
      " We Will Create a Custom plan for you based on your Project's needs & requirements.",
    features: [
      "In Custom Plan, We can build you anything from a simple website, dashboard, E-commerce store or a SaaS product.",
      "Custom Notion Template to manage your project.",
      "Google Analytics Setup & Integration.",
      "Regular 1 on 1 Meeting, as per the project's requirements.",
    ],
  },
];

export const ServicesSection = () => {
  return (
    <div className="relative w-11/12 pt-32 mx-auto">
      <Heading
        id="services-header"
        className="h-[5.4rem] sm:h-[3.6rem] md:h-[4.41rem] lg:h-[4.4rem] xl:h-[5rem] w-[12rem] sm:w-[28rem] md:w-[36rem] lg:w-[35rem] xl:w-[42rem]"
      >
        Explore My Services
      </Heading>
      <div className="mt-6 mb-5 italic">
        <p className="text-">
          • I Offer a Various range of Services from building a Landing page
          Website to Build a Full On SaaS Product.
        </p>
        <p className="text- mt-1">
          • Mentioned Prices may vary based on the Project&apos;s requirements &
          complexity.
        </p>
      </div>
      <PricingContainer plans={PLANS} />
    </div>
  );
};

export default ServicesSection;
