import { easeOut, easeIn, easeInOut, circOut, backOut } from "motion";

// Fade hacia arriba
export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: easeOut },
  viewport: { once: true, amount: 0.4 },
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
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: backOut },
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
  initial: { opacity: 0, rotate: -2 },
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

