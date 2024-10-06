import { HiSparkles } from "react-icons/hi";
import { FaCheck } from "react-icons/fa6";
import { cn } from "@/lib/utils";

interface PlanHeaderProps {
  name: string;
  price?: number;
  subtitle: string;
}

export const PlanHeader: React.FC<PlanHeaderProps> = ({ name, price, subtitle }) => (
  <div className="flex flex-col">
    <h2 className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">{name}</h2>
    {price ? (
      <>
        <p className="text-xs xl:text-sm text-black/80 mt-2 xl:mt-3">
          <span className="text-xl xl:text-2xl mr-1 font-medium">${price}</span>
          /month onwards
        </p>
        <p className="text-xs 2xl:text-sm font-medium mt-2 capitalize">
          {subtitle}
        </p>
      </>
    ) : (
      <p className="text-xs 2xl:text-sm font-medium capitalize mt-2">
        {subtitle}
      </p>
    )}
  </div>
);

interface FeatureListProps {
  features: string[];
}

export const FeatureList: React.FC<FeatureListProps> = ({ features }) => (
  <ul className="list-none">
    {features.map((feature, index) => (
      <FeatureItem key={`feature-${index}`} feature={feature} />
    ))}
  </ul>
);

export const PopularBadge: React.FC = () => (
  <div className="absolute top-3 right-3 flex justify-between items-center py-2 px-4 rounded-full text-[10px] xl:text-[12px] 2xl:text-xs font-medium bg-gradient-to-br from-green-300/40 to-white/30 backdrop-blur-sm shadow-md">
    <HiSparkles className="mr-1" /> <span>Most Popular</span>
  </div>
);

interface ContactUsButtonProps {
  isPopular?: boolean;
}

export const ContactUsButton: React.FC<ContactUsButtonProps> = ({ isPopular }) => (
  <a
    href="#basic"
    className={cn(
      "block bg-white/50 rounded-lg p-4 w-full text-sm xl:text-lg text-center mt-auto hover:-translate-y-1 transition-all duration-300",
      isPopular && "shadow-md"
    )}
  >
    Contact Us
  </a>
);

interface FeatureItemProps {
  feature: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ feature }) => (
  <li className="flex items-center text-[10px] xl:text-[12px] my-3">
    <FaCheck className="min-w-2 xl:min-w-3 mr-4" />
    {feature}
  </li>
);
