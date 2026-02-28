"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="max-w-4xl w-full">

      {/* ===== TITLE ===== */}
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold mb-6"
      >
        Resume
      </motion.h2>

      {/* ===== SHORT DESCRIPTION ===== */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-slate-600 leading-relaxed mb-8"
      >
        A concise overview of my academic background, research involvement,
        technical expertise, and professional experience.
      </motion.p>

      {/* ===== DOWNLOAD LINK (Minimal Style) ===== */}
      <motion.a
        href="/Apurbo_Biswas_Resume.pdf"
        download
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-black transition mb-10"
      >
        <Download size={16} />
        Download PDF
      </motion.a>

      {/* ===== PDF PREVIEW ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full h-[950px] border border-slate-200 rounded-md overflow-hidden shadow-sm"
      >
        <iframe
          src="/Apurbo_Biswas_Resume.pdf"
          className="w-full h-full"
        />
      </motion.div>

    </div>
  );
}