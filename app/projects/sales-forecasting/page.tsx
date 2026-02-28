"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, BarChart3 } from "lucide-react";

export default function SalesForecastingPage() {
  return (
    <div className="max-w-4xl w-full">

      {/* ===== BREADCRUMB ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-sm text-slate-500 mb-6"
      >
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
        <span className="mx-2">›</span>
        <span className="text-slate-700">
          Sales Forecasting
        </span>
      </motion.div>

      {/* ===== TITLE (Normalized) ===== */}
      <motion.h1
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold mb-10"
      >
        Retail Sales Forecasting using Facebook Prophet
      </motion.h1>

      {/* ===== DESCRIPTION ===== */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-slate-600 leading-relaxed">
          Built a time-series forecasting model using Facebook Prophet to
          predict future retail sales based on historical transaction data.
          The system performs daily aggregation, trend modeling, seasonality
          analysis, and 30-day forward forecasting with uncertainty intervals.
        </p>
      </motion.section>

      {/* ===== TECHNICAL HIGHLIGHTS ===== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-14"
      >
        <h2 className="text-lg font-semibold mb-5">
          Technical Highlights
        </h2>

        <ul className="list-disc list-inside text-slate-600 space-y-2 text-sm">
          {[
            "Data preprocessing & datetime normalization",
            "Daily sales aggregation (2823 records)",
            "Prophet model training (ds, y format)",
            "30-day future forecast generation",
            "Trend & seasonality decomposition",
            "Confidence interval estimation",
          ].map((point, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.08 }}
            >
              {point}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* ===== EXTERNAL RESOURCES ===== */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-lg font-semibold mb-5">
          Full Report & Code
        </h2>

        <div className="flex flex-col gap-5">

          {/* LinkedIn Analysis */}
          <motion.a
            href="https://www.linkedin.com/posts/apurbo-biswas23_codes-and-graphs-activity-7323635511850401792-Ymgd"
            target="_blank"
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-slate-300 hover:border-black transition group"
          >
            <BarChart3 size={18} />

            <span className="text-sm font-medium">
              Detailed Analysis & Graphs
            </span>

            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-slate-500 group-hover:text-black"
            >
              →
            </motion.span>
          </motion.a>

          {/* GitHub Repo */}
          <motion.a
            href="https://github.com/BiswasApurbo/FUTURE_ML_01"
            target="_blank"
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-slate-300 hover:border-black transition group"
          >
            <Github size={18} />

            <span className="text-sm font-medium">
              Source Code (GitHub)
            </span>

            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-slate-500 group-hover:text-black"
            >
              →
            </motion.span>
          </motion.a>

        </div>
      </motion.section>

    </div>
  );
}