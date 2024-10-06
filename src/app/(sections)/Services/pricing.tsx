import { useEffect, useRef } from "react";
import { PricingCard, TwinPricingCard, PlanProps } from "./PricingCard";

interface Props {
  plans: PlanProps[];
}

const PricingContainer: React.FC<Props> = ({ plans }) => {
  const cardsContainer = useRef<HTMLDivElement>(null);

  const applyOverlayMask = (e: React.PointerEvent<HTMLDivElement>) => {
    const container = cardsContainer.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    container.style.setProperty("--x", `${x}px`);
    container.style.setProperty("--y", `${y}px`);
    container.style.setProperty("--opacity", "1");
  };

  useEffect(() => {
    const container = cardsContainer.current;
    if (!container) return;

    const handlePointerMove = (e: PointerEvent) => applyOverlayMask(e as unknown as React.PointerEvent<HTMLDivElement>);
    container.addEventListener("pointermove", handlePointerMove);

    return () => {
      container.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  const renderPricingCards = (isOverlay: boolean) => (
    <div className={`flex flex-col lg:flex-row gap-6 lg:gap-8 ${isOverlay ? "select-none pointer-events-none absolute inset-0" : ""}`}
         style={isOverlay ? {
           opacity: "var(--opacity, 0)",
           mask: `radial-gradient(25rem 25rem at var(--x, 0) var(--y, 0), #000 1%, transparent 50%)`,
           WebkitMask: `radial-gradient(25rem 25rem at var(--x, 0) var(--y, 0), #000 1%, transparent 50%)`,
         } : undefined}>
      {plans.map((plan) => (
        <div key={plan.id} className="w-full lg:w-1/3">
          {isOverlay ? <TwinPricingCard plan={plan} /> : <PricingCard plan={plan} />}
        </div>
      ))}
    </div>
  );

  return (
    <main className="flex justify-center items-center mt-8 sm:mt-12 md:mt-20 2xl:mt-24 mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className="flex justify-center items-center relative w-full max-w-7xl 2xl:max-w-[90rem]"
        ref={cardsContainer}
      >
        {renderPricingCards(false)}
        {renderPricingCards(true)}
      </div>
    </main>
  );
};

export default PricingContainer;
