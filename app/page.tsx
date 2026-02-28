"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="max-w-5xl">

      {/* ===== TITLE (UNCHANGED SIZE) ===== */}
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold mb-10"
      >
        About
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* ===== LEFT — TEXT ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6 text-slate-600 leading-relaxed"
        >
          {[
            "I’m Apurbo — an undergraduate researcher working at the intersection of Machine Learning, Deep Learning, and applied Artificial Intelligence.",
            "My focus lies in building reliable and deployable AI systems that move beyond experimental prototypes. I am particularly interested in robustness, generalization, and the practical constraints that shape real-world machine learning solutions.",
            "I have authored peer-reviewed research publications and actively serve as a reviewer for international journals and academic publishers. My research experience includes real-time computer vision systems, sequential modeling, and domain-specific AI frameworks.",
            "I approach problems from an end-to-end perspective — from data preprocessing and model design to evaluation, optimization, and system-level implementation.",
            "My long-term objective is to contribute to advanced research in intelligent systems while bridging the gap between theoretical AI and high-impact industrial applications."
          ].map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

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