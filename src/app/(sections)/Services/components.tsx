import { HiSparkles } from "react-icons/hi";
import { FaCheck } from "react-icons/fa6";
import { cn } from "@/lib/utils";

export const PlanHeader = ({
  name,
  price,
  subtitle,
}: {
  name: string;
  price?: number;
  subtitle: string;
}) => (
  <>
    <h2 className="text-4xl font-semibold">{name}</h2>
    {price ? (
      <div>
        <p className="text-sm text-black/80">
          <span className="text-2xl mr-1 font-medium">${price}</span>/month onwards
        </p>
        <p className="text-sm font-medium mt-3 capitalize">{subtitle}</p>
      </div>
    ) : (
      <p className="text-sm font-medium capitalize">{subtitle}</p>
    )}
  </>
);

export const FeatureList = ({ features }: { features: string[] }) => (
  <ul className="list-none">
    {features.map((feature, index) => (
      <FeatureItem key={`${feature}-${index}`} feature={feature} />
    ))}
  </ul>
);

export const PopularBadge = () => {
  return (
    <div className="absolute top-3 right-3 flex justify-between items-center py-2 px-4 rounded-full text-xs font-medium bg-gradient-to-br from-green-300/40 to-white/30 backdrop-blur-sm shadow-md">
      <HiSparkles className="mr-1" /> <span>Most Popular</span>
    </div>
  );
};

export const ContactUsButton = ({
  is_popular,
}: {
  is_popular: boolean | undefined;
}) => {
  return (
    <a
      href="#basic"
      className={cn(
        "block bg-white/50 rounded-lg p-4 w-full text-lg text-center mt-auto hover:-translate-y-1 transition-all duration-300",
        is_popular && "shadow-md"
      )}
    >
      Contact Us
    </a>
  );
};

export const FeatureItem = ({ feature }: { feature: string }) => (
  <li className="flex items-center text-[12px] my-3">
    <FaCheck className="h-3 min-w-3 mr-4" />
    {feature}
  </li>
);
