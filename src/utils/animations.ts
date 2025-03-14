
import { useEffect, useState } from "react";

export const useAnimatedEntrance = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return shouldAnimate;
};

export const getStaggeredDelay = (index: number, baseDelay: number = 100) => {
  return {
    animationDelay: `${index * baseDelay}ms`,
  };
};

export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1],
    },
  }),
};
