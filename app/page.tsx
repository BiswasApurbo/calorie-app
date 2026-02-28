"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "Research Focus",
    content:
      "I am an undergraduate researcher working at the intersection of Machine Learning, Deep Learning, and applied Artificial Intelligence. My core interest lies in building systems that are not only high-performing in experimental settings but remain stable, reliable, and adaptable in real-world environments.",
  },
  {
    title: "Engineering Approach",
    content:
      "My work emphasizes robustness, generalization, and deployability. I approach every project from an end-to-end systems perspective — from data preprocessing and architecture design to evaluation, optimization, and practical implementation under real-world constraints.",
  },
  {
    title: "Academic Contribution",
    content:
      "I have authored peer-reviewed research publications and actively contribute to the academic community as a reviewer for international journals and publishers. My research experience spans real-time computer vision systems, sequential modeling, and domain-specific AI frameworks.",
  },
  {
    title: "Long-Term Vision",
    content:
      "My long-term objective is to contribute to advanced intelligent systems research while bridging the gap between theoretical AI development and high-impact industrial applications.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-5xl">

      {/* ===== TITLE ===== */}
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold mb-12"
      >
        About
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* ===== LEFT — TEXT (SECTIONED) ===== */}
        <div className="space-y-12">

          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
              className="relative pl-6"
            >
              {/* subtle vertical accent */}
              <div className="absolute left-0 top-1 w-[3px] h-6 bg-slate-800 rounded-full" />

              <h3 className="text-lg font-semibold mb-3">
                {section.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}

        </div>

        {/* ===== RIGHT — IMAGE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-lg border border-slate-200"
        >
          <img
            src="/about/presentation.webp"
            alt="Apurbo presenting research"
            className="w-full object-cover"
          />
        </motion.div>

      </div>

    </div>
  );
}