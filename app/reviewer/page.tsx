"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function ReviewerPage() {
  return (
    <div className="max-w-4xl w-full">

      {/* ===== PAGE TITLE ===== */}
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold mb-12"
      >
        Academic Reviewer
      </motion.h2>

      {/* ===== INTRO ===== */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-slate-600 leading-relaxed mb-14"
      >
        I actively contribute to the academic community by serving as a peer
        reviewer for international journals and publishers in Machine Learning,
        Deep Learning, and applied AI research.
      </motion.p>

      <div className="space-y-14">

        {/* ===== IEEE ACCESS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-l-2 border-black pl-5"
        >
          <h3 className="text-lg font-semibold">
            IEEE Access
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Journal Reviewer
          </p>

          <p className="text-slate-600 mt-4 leading-relaxed">
            Conducted structured peer reviews assessing novelty, technical rigor,
            experimental validation, and reproducibility of AI-driven research.
          </p>

          <motion.a
            href="https://drive.google.com/drive/folders/16DryrTHQdm_0CUdq2gAPynleDBPF6XUF?usp=drive_link"
            target="_blank"
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-slate-700 hover:text-black transition"
          >
            View Certifications
            <ExternalLink size={14} />
          </motion.a>
        </motion.div>

        {/* ===== PLOS ONE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-l-2 border-slate-300 pl-5"
        >
          <h3 className="text-lg font-semibold">
            PLOS ONE
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Journal Reviewer
          </p>

          <p className="text-slate-600 mt-4 leading-relaxed">
            Reviewed interdisciplinary computational research integrating
            machine learning methodologies with real-world applications.
          </p>

          <motion.a
            href="https://drive.google.com/drive/folders/1BpxekP8Clpt-GF_u3GVDfhFnCbXdIkub?usp=drive_link"
            target="_blank"
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-slate-700 hover:text-black transition"
          >
            View Certification
            <ExternalLink size={14} />
          </motion.a>
        </motion.div>

        {/* ===== IGI GLOBAL ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-l-2 border-slate-300 pl-5"
        >
          <h3 className="text-lg font-semibold">
            IGI Global
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Book Chapter Reviewer
          </p>

          <p className="text-slate-600 mt-4 leading-relaxed">
            Evaluated scholarly book chapters in emerging technologies,
            cybersecurity, and applied artificial intelligence systems.
          </p>

          <div className="mt-5 text-sm text-emerald-600 font-medium">
            ✔ Acknowledged Reviewer
          </div>
        </motion.div>

      </div>

    </div>
  );
}