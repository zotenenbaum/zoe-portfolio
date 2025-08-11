'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MotionH1, MotionDiv } from '../../components/motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -40]); // gentle parallax
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]); // fades slightly on scroll

  return (
    <section
      id="intro"
      className="to-pearl dark:from-navy relative overflow-hidden bg-gradient-to-b from-blue-50 pb-20 pt-10 dark:to-[#0b1424]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionH1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ y, opacity }}
          className="font-display text-5xl font-semibold sm:text-6xl"
        >
          Zoe Tenenbaum
        </MotionH1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-2xl text-blue-900/80 dark:text-blue-100/80"
        >
          EECS @ Berkeley • Full-stack • IC design enjoyer • Clean UX + tiny delights.
        </motion.p>
      </div>

      {/* Gold speck field */}
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="pointer-events-none absolute inset-0 [background-size:18px_18px] [background:radial-gradient(#d4af3722_1px,transparent_1px)]"
        aria-hidden
      />
    </section>
  );
}
