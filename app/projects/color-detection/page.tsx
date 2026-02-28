"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function ColorDetectionPage() {
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
          Real-Time Color Detection
        </span>
      </motion.div>

      {/* ===== TITLE (Normalized) ===== */}
      <motion.h1
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold mb-10"
      >
        Real-Time Color Detection
      </motion.h1>

      {/* ===== OVERVIEW ===== */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-slate-600 leading-relaxed">
          A real-time computer vision system that detects and classifies object
          colors using OpenCV and MediaPipe. The system processes live webcam
          input and identifies dominant color regions with low-latency response.
        </p>
      </motion.section>

      {/* ===== CORE WORKFLOW ===== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-14"
      >
        <h2 className="text-lg font-semibold mb-5">
          Core Workflow
        </h2>

        <ul className="list-disc list-inside text-slate-600 space-y-2 text-sm">
          {[
            "Live webcam capture via OpenCV",
            "Region of interest detection",
            "Color space conversion (BGR → HSV)",
            "Threshold-based color classification",
            "Real-time bounding box visualization",
          ].map((step, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.08 }}
            >
              {step}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* ===== SCREENSHOTS ===== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mb-14"
      >
        <h2 className="text-lg font-semibold mb-6">
          System Preview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["ss1.webp", "ss2.webp"].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3 }}
              className="rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition duration-300"
            >
              <img
                src={`/projects/color-detection/${img}`}
                alt="Color Detection Preview"
                className="w-full h-52 object-cover transition duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== DEMO ===== */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mb-14"
      >
        <h2 className="text-lg font-semibold mb-5">
          Demo
        </h2>

        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-sm">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/3_dZHbLU8es"
            title="Color Detection Demo"
            allowFullScreen
          />
        </div>
      </motion.section>

      {/* ===== REPOSITORY ===== */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-lg font-semibold mb-5">
          Repository
        </h2>

        <motion.a
          href="https://github.com/BiswasApurbo/RealTime-Color-Detection"
          target="_blank"
          whileHover={{ y: -2 }}
          className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-slate-300 hover:border-black transition group"
        >
          <Github size={18} />

          <span className="text-sm font-medium">
            View on GitHub
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
      </motion.section>

    </div>
  );
}