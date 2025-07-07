import { easeOut, easeIn, easeInOut, circOut, backOut } from "motion";

// Fade hacia arriba
export const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: easeOut },
  viewport: { once: true, amount: 0.1},
};

// Fade hacia abajo
export const fadeDown = {
  initial: { opacity: 0, y: -20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: circOut },
  viewport: { once: true, amount: 0.4 },
};

// Fade con easeIn
export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.5, ease: easeIn },
  viewport: { once: true, amount: 0.3 },
};

// Blur + Fade
export const blurIn = {
  initial: { opacity: 0, filter: "blur(8px)" },
  whileInView: { opacity: 1, filter: "blur(0px)" },
  transition: { duration: 0.7, ease: easeOut },
  viewport: { once: true, amount: 0.3 },
};

// Slide desde la izquierda
export const slideInLeft = {
  initial: { opacity: 0, x: -80 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: backOut },
  viewport: { once: true, amount: 0.3 },
};

// Slide desde la derecha
export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: easeInOut },
  viewport: { once: true, amount: 0.4 },
};

// Pulso infinito (para badges, íconos, etc)
export const pulseLoop = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.9, 1],
  },
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: easeInOut,
  },
};

// Variantes para stagger group
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: backOut },
};

// Zoom suave desde el centro
export const zoomIn = {
  initial: { opacity: 0, scale: 0.1 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: easeOut },
  viewport: { once: true, amount: 0.4 },
};

// Fade in con leve rotación
export const fadeRotate = {
  initial: { opacity: 0, rotate: 0 },
  whileInView: { opacity: 1, rotate: 0 },
  transition: { duration: 0.5, ease: easeOut },
  viewport: { once: true, amount: 0.4 },
};

// Navbar que baja desde arriba con blur suave
export const navEnter = {
  initial: { opacity: 0, y: -20, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 1, ease: easeOut },
};

export const fadeRotate3D = {
  initial: { opacity: 0, scale: 0.8, rotateX: -90 },
  animate: { opacity: 1, scale: 1, rotateX: 0 },
  exit: { opacity: 0, scale: 0.8, rotateX: 90 },
  transition: { duration: 0.6, ease: easeInOut },
};

export const parallax = (distance = 50) => ({
  initial: { y: distance, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: easeOut },
  viewport: { once: true, amount: 0.4 },
});

/**
 * ============================
 * GESTURES & HOVER EFFECTS
 * ============================
 */

// Hover scale up
export const hoverScale = {
  whileHover: { scale: 0.9 },
  transition: { duration: 0.3, ease: easeOut },
};

// Tap scale down
export const tapScale = {
  whileTap: { scale: 0.95 },
  transition: { duration: 0.2, ease: easeInOut },
};

// Hover opacity flash
export const hoverOpacity = {
  whileHover: { opacity: 0.8 },
  transition: { duration: 0.2, ease: easeOut },
};

// Ripple effect simulated with scale + opacity
export const rippleEffect = {
  whileTap: {
    scale: [1, 1.4, 1],
    opacity: [1, 0.5, 1],
  },
  transition: { duration: 0.6, ease: easeOut },
};

// Combined hover + tap for interactive cards
export const interactiveCard = {
  whileHover: { scale: 1.05, rotate: 360 },
  whileTap: { scale: 0.98, rotate: -180 },
  transition: { duration: 0.1, ease: easeOut },
};

// Wiggle animation for attention
export const wiggle = {
  animate: {
    rotate: [-1, 1, -1, 1, 0],
  },
  transition: {
    duration: 0.5,
    ease: easeInOut,
  },
};

// En tu archivo de animaciones
export const flipY = {
  initial: { rotateY: 0 },
  animate: { rotateY: 180, transition: { duration: 0.7 } },
  reset: { rotateY: 0, transition: { duration: 0.7 } }
};