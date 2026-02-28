"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, TrendingUp } from "lucide-react";

export default function StockPredictionPage() {
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
          Stock Prediction (LSTM)
        </span>
      </motion.div>

      {/* ===== TITLE (Normalized) ===== */}
      <motion.h1
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold mb-10"
      >
        Stock Price Prediction using LSTM
      </motion.h1>

      {/* ===== OVERVIEW ===== */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-slate-600 leading-relaxed">
          A deep learning-based stock price prediction system built using
          Long Short-Term Memory (LSTM) networks to model temporal
          dependencies in historical financial data. The model learns
          sequential patterns and forecasts future price movements
          based on past trends.
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
            "Time-series preprocessing & normalization",
            "Sliding window sequence generation",
            "LSTM-based sequential model architecture",
            "Train-test split for forward validation",
            "Loss optimization using MSE",
            "Prediction vs Actual price visualization",
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

      {/* ===== MODEL ARCHITECTURE ===== */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mb-14"
      >
        <h2 className="text-lg font-semibold mb-5">
          Model Architecture
        </h2>

        <p className="text-slate-600 leading-relaxed">
          The architecture consists of stacked LSTM layers followed by
          dense output layers to capture long-term dependencies and
          nonlinear market patterns. The model is trained on historical
          closing prices to predict future trends.
        </p>
      </motion.section>

      {/* ===== EXTERNAL RESOURCES ===== */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-lg font-semibold mb-5">
          Full Report & Code
        </h2>

        <div className="flex flex-col gap-5">

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/posts/apurbo-biswas23_pdf-and-graphs-activity-7334080464208412673-nKj1"
            target="_blank"
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-slate-300 hover:border-black transition group"
          >
            <TrendingUp size={18} />

            <span className="text-sm font-medium">
              Detailed Analysis & Visualizations
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

          {/* GitHub */}
          <motion.a
            href="https://github.com/BiswasApurbo/FUTURE_ML_02"
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