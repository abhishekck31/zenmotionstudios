export const duration = {
  micro: 0.2, // hover, tap feedback
  ui: 0.4, // button, nav, label
  component: 0.6, // card, modal, drawer
  section: 0.9, // scroll transitions, reveals
  cinematic: 1.4, // page transitions, hero
};

export const easing = {
  entrance: [0.16, 1, 0.3, 1] as const, // fast-out, strong deceleration
  exit: [0.7, 0, 1, 0.6] as const, // accelerate out
  expressive: [0.34, 1.56, 0.64, 1] as const, // slight overshoot for character
  smooth: [0.4, 0, 0.2, 1] as const, // material-like for UI elements
};

export const stagger = {
  fast: 0.04,
  base: 0.08,
  slow: 0.15,
};

export const variants = {
  lineMask: {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  fadeScale: {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
};
