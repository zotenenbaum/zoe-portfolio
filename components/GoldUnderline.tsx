'use client';
import { MotionSpan } from './motion';

export default function GoldUnderline({ className = '' }: { className?: string }) {
  return (
    <MotionSpan
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`bg-gold ml-3 inline-block h-1 w-16 origin-left rounded-full align-middle ${className}`}
    />
  );
}
