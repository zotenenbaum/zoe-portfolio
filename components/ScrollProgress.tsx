'use client';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 90, damping: 20, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX: width, transformOrigin: '0% 50%' }}
      className="bg-gold h-0.5"
      aria-hidden
    />
  );
}
