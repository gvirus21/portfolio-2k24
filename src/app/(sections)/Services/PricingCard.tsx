import {
  PopularBadge,
  PlanHeader,
  FeatureList,
  ContactUsButton,
} from "./components";
import { cn } from "@/lib/utils";

export interface PlanProps {
  id: string;
  name: string;
  subtitle: string;
  is_popular?: boolean;
  price?: number;
  features: string[];
}

export const PricingCard = ({ plan }: { plan: PlanProps }) => {
  const { name, price, features, subtitle, is_popular } = plan;

  return (
    <div
      className={cn(
        "relative flex-1 flex flex-col items-start h-full max-w-[25rem] p-6 xl:p-10 gap-5 text-black border-[#eceff133] border border-solid rounded-xl transition-colors shadow-xl ",
        is_popular
          ? "bg-gradient-to-br from-violet-300/20 to-white/10 backdrop-blur-sm shadow-black/20 border-white/20 border-4 border-solid"
          : "bg-white/20 shadow-black/10"
      )}
    >
      {is_popular && <PopularBadge />}
      <PlanHeader name={name} price={price} subtitle={subtitle} />
      <FeatureList features={features} />
      <ContactUsButton is_popular={is_popular} />
    </div>
  );
};

export const TwinPricingCard = ({ plan }: { plan: PlanProps }) => {
  const { name, price, features, subtitle, is_popular } = plan;

  return (
    <div className="flex-1 flex flex-col items-start max-w-[25rem] p-10 gap-5 text-black border-white border border-solid rounded-xl transition-all bg-white/20 text-transparent duration-1000 ease-in-out">
    </div>
  );
};
