import React, { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

// ─────────────────────────────────────────────
// TUNE YOUR TRANSITIONS HERE
// ─────────────────────────────────────────────

/** How long each phase takes in seconds */
const DURATION = {
  exit: 0.35,
  enter: 0.5,
};

/** Easing curves — accepts any CSS easing or cubic-bezier array */
const EASING = {
  exit: [0.4, 0, 1, 1] as const,    // accelerate out
  enter: [0, 0, 0.2, 1] as const,   // decelerate in
};

/** How far the page travels vertically (px). Positive = down, negative = up */
const SLIDE = {
  exitTo: -40,    // outgoing page slides up
  enterFrom: 60,  // incoming page arrives from below
};

/** Opacity at the start/end of each phase (0–1) */
const OPACITY = {
  exit: 0,
  enter: 0,
};

// ─────────────────────────────────────────────

const pageVariants: Variants = {
  enter: {
    opacity: OPACITY.enter,
    y: SLIDE.enterFrom,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.enter,
      ease: EASING.enter,
    },
  },
  exit: {
    opacity: OPACITY.exit,
    y: SLIDE.exitTo,
    transition: {
      duration: DURATION.exit,
      ease: EASING.exit,
    },
  },
};

interface PageTransitionProps {
  children: React.ReactNode;
  routeKey: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, routeKey }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      key={routeKey}
      variants={pageVariants}
      initial="enter"
      animate="visible"
      exit="exit"
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
