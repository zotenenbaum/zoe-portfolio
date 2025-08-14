"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -40]); 
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section id="intro" className="hero">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ y, opacity }}
          className="hero__title"
        >
          Zoe Tenenbaum
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="hero__lead"
        >
          Electrical Engingeering and Computer Science @ UC Berkeley <br/>
          Full-stack Engineer
        </motion.p>
      </div>
    </section>
  );
}