import { useEffect, useRef } from "react";
import { PricingCard, TwinPricingCard, PlanProps } from "./PricingCard";

interface Props {
  plans: PlanProps[];
}

const PricingContainer = ({ plans }: Props) => {
  const cardsContainer = useRef<HTMLDivElement>(null);

  const applyOverlayMask = (e: PointerEvent) => {
    if (!cardsContainer.current) return;
    const rect = cardsContainer.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardsContainer.current.style.setProperty("--x", `${x}px`);
    cardsContainer.current.style.setProperty("--y", `${y}px`);
    cardsContainer.current.style.setProperty("--opacity", "1");
  };

  useEffect(() => {
    const container = cardsContainer.current;
    if (!container) return;

    const handlePointerMove = (e: PointerEvent) => applyOverlayMask(e);
    container.addEventListener("pointermove", handlePointerMove);

    return () => {
      container.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <main className="flex justify-center items-center mt-16 mx-auto">
      <div className="relative w-full" ref={cardsContainer}>
        <div className="flex justify-between">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan as PlanProps} />
          ))}
        </div>
        <div
          className="flex justify-between w-full flex-wrap gap-10 select-none pointer-events-none absolute inset-0"
          style={{
            opacity: "var(--opacity, 0)",
            mask: `radial-gradient(25rem 25rem at var(--x, 0) var(--y, 0), #000 1%, transparent 50%)`,
            WebkitMask: `radial-gradient(25rem 25rem at var(--x, 0) var(--y, 0), #000 1%, transparent 50%)`,
          }}
        >
          {plans.map((plan) => (
            <TwinPricingCard key={plan.id} plan={plan as PlanProps} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default PricingContainer;
