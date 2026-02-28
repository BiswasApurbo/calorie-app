"use client";

import { motion } from "framer-motion";

export default function AwardsPage() {
  return (
    <div className="max-w-4xl">

      {/* ===== PAGE TITLE (NORMALIZED) ===== */}
      <h2 className="text-2xl font-semibold mb-12">
        Academic Awards
      </h2>

      <div className="space-y-20">

        {/* ================= FALL 2024-2025 ================= */}
        <div>

          <motion.h3
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg font-semibold mb-3"
          >
            Dean’s Award — Fall 2024–2025
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-slate-600 leading-relaxed mb-6 text-sm"
          >
            Awarded in recognition of outstanding academic excellence and
            consistent top-tier performance during the Fall 2024–2025 semester.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-[70%] overflow-hidden rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition duration-300">
              <img
                src="/awards/deans-fall-2024.webp"
                alt="Dean’s Award Fall 2024-2025"
                className="w-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </motion.div>

        </div>

        {/* ================= SPRING 2023-2024 ================= */}
        <div>

          <motion.h3
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg font-semibold mb-3"
          >
            Dean’s Award — Spring 2023–2024
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-slate-600 leading-relaxed mb-6 text-sm"
          >
            Recognized for academic distinction and strong analytical
            performance during the Spring 2023–2024 semester.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-[70%] overflow-hidden rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition duration-300">
              <img
                src="/awards/deans-spring-2023.webp"
                alt="Dean’s Award Spring 2023-2024"
                className="w-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </motion.div>

        </div>

      </div>

    </div>
  );
}