"use client";

import { motion } from "framer-motion";
import Section from '../../components/Section';


export default function Extra() {
  return (
    <Section id="extra" title="My Favorite Lines" eyebrow="Quotes">
    <div className="quotes">
    <motion.blockquote
          style={{
            fontFamily: "'Playfair Display'",
            fontSize: "1.5rem",
            fontWeight: 500,
            lineHeight: "1.6",
            textAlign: "center",
          }}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          “What you get by achieving your goals is not as important as what you become by achieving your goals.”
          <footer
            style={{
              marginTop: "0.5rem",
              fontSize: "1rem",
              opacity: 0.7,
              fontFamily: "serif",
            }}
          >
            — Henry David Thoreau
          </footer>
        </motion.blockquote>

        <motion.blockquote
          style={{
            fontFamily: "'Playfair Display'",
            fontSize: "1.5rem",
            fontWeight: 500,
            lineHeight: "1.6",
            textAlign: "center",
          }}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          “Be regular and orderly in your life, so that you may be violent and original in your work.”
          <footer
            style={{
              marginTop: "0.5rem",
              fontSize: "1rem",
              opacity: 0.7,
              fontFamily: "serif",
            }}
          >
            — Gustave Flaubert
          </footer>
        </motion.blockquote>
        <motion.blockquote
          style={{
            fontFamily: "'Playfair Display'",
            fontSize: "1.5rem",
            fontWeight: 500,
            lineHeight: "1.6",
            textAlign: "center",
          }}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          "Be the change that you wish to see in the world."
          <footer
            style={{
              marginTop: "0.5rem",
              fontSize: "1rem",
              opacity: 0.7,
              fontFamily: "serif",
            }}
          >
            - Mahatma Gandhi
          </footer>
        </motion.blockquote>
    </div>
    </Section>
  );
}
