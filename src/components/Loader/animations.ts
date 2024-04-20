import gsap from "gsap";

export const wordsAnimation = ({
  wordGroupRef,
}: {
  wordGroupRef: React.MutableRefObject<null>;
}) => {
  const tl = gsap.timeline();
  tl.to(wordGroupRef.current, {
    yPercent: -88,
    duration: 6,
    ease: "expo.inOut",
  });

  return tl;
};

export const firstDigitLoaingAnimation = () => {
  const tl = gsap.timeline();
  tl.to(".for-gsap-first-digit", {
    yPercent: -52,
    duration: 6.4,
    ease: "power4.inOut",
  });

  return tl;
};

export const secondDigitLoaingAnimation = () => {
  const tl = gsap.timeline();
  tl.to(".for-gsap-second-digit", {
    yPercent: -91,
    duration: 6.4,
    ease: "power4.inOut",
  });

  return tl;
};

export const thirdDigitLoaingAnimation = () => {
  const tl = gsap.timeline();
  tl.to(".for-gsap-third-digit", {
    yPercent: -99.1,
    duration: 6.4,
    ease: "power4.inOut",
  });

  return tl;
}


interface CollapseWordsAnimationProps {
  collapseWordsRef: React.MutableRefObject<null>;
}

export const collapseWordsAnimation = ({
  collapseWordsRef,
}: CollapseWordsAnimationProps) => {
  const tl = gsap.timeline();
  tl.to(collapseWordsRef.current, {
    clipPath: "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
    duration: 1,
    ease: "expo.inOut",
  });

  return tl;
};

interface ExitLoadingDigitAnimationProps {
  loadingNumberRefContainer: React.MutableRefObject<null>;
}

export const exitLoadingDigitAnimation = ({
  loadingNumberRefContainer,
}: ExitLoadingDigitAnimationProps) => {
  const tl = gsap.timeline();

  tl.to(loadingNumberRefContainer.current, {
    yPercent: -80,
  });
};
