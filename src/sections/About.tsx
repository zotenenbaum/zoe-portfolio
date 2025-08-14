import Section from '../../components/Section';
import { MotionDiv, fadeUp } from '../../components/motion';

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="about__body">
        <p>
          Hi! I am <strong>Zoe Tenenbaum</strong> — an EECS senior at UC Berkeley. I am passionate about fun and clean software development and have experience across electrical systems and full-stack development.
        </p>
        <p>
          Recently: shipped internal UX improvements, prototyped NLP-driven analysis, and am activly taking classes on algorithms and systems.
        </p>
      </div>

      <div className="about__skills">
        <p><strong>Languages:</strong> Python, JavaScript/TypeScript, C, Java, SQL (PostgreSQL), HTML/CSS</p>
        <p><strong>Frameworks:</strong> Django, React, Node.js</p>
        <p><strong>Developer Tools:</strong> Git, Docker, Storybook, VS Code, Postman, IntelliJ, Figma, react2angular</p>
        <p><strong>Libraries:</strong> spaCy, pandas, NumPy, React Hook Form</p>
      </div>
    </Section>
  );
}
