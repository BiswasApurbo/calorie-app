"use client";

import { motion } from "framer-motion";

export default function PublicationsPage() {
  return (
    <div className="max-w-4xl w-full">

      {/* ===== PAGE TITLE (STANDARDIZED) ===== */}
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold mb-12"
      >
        Publications
      </motion.h2>

      <div className="space-y-12">

        {/* ===== Publication 1 ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-l-2 border-black pl-5"
        >
          <h3 className="text-lg font-semibold leading-snug">
            A Hybrid Deep Learning Framework for Real-Time Traffic Risk Prediction
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            IEEE QPAIN • 2026 • Chittagong
          </p>
        </motion.div>

        {/* ===== Publication 2 ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-l-2 border-slate-300 pl-5"
        >
          <h3 className="text-lg font-semibold leading-snug">
            Domain-Specific NLP for Personalized Radiation Treatment Pathways with LLM
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            IEEE WIECON-ECE • 2025 • Cox's Bazar
          </p>
        </motion.div>

        {/* ===== Publication 3 ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-l-2 border-slate-300 pl-5"
        >
          <h3 className="text-lg font-semibold leading-snug">
            Securing the Future: Enhancing Cybersecurity in Supply Chains
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            IGI Global • Book Chapter • 2025
          </p>
        </motion.div>

      </div>

    </div>
  );
}