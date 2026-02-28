"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function VirtualMousePage() {
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
          VirtualMouse-AI
        </span>
      </motion.div>

      {/* ===== TITLE (Normalized) ===== */}
      <motion.h1
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold mb-10"
      >
        VirtualMouse-AI
      </motion.h1>

      {/* ===== OVERVIEW ===== */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-slate-600 leading-relaxed">
          A real-time computer vision system enabling gesture-based mouse
          control using MediaPipe and OpenCV. Hand landmarks are mapped
          directly to cursor movements with smoothing and low-latency interaction.
        </p>
      </motion.section>

      {/* ===== SYSTEM PIPELINE ===== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-14"
      >
        <h2 className="text-lg font-semibold mb-5">
          System Pipeline
        </h2>

        <ul className="list-disc list-inside text-slate-600 space-y-2 text-sm">
          {[
            "Webcam frame capture (OpenCV)",
            "Hand landmark detection (MediaPipe)",
            "Gesture interpretation logic",
            "Cursor coordinate mapping & smoothing",
            "Optional voice-triggered actions",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.08 }}
            >
              {item}
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
          System in Action
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {["ss1.webp", "ss2.webp"].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3 }}
              className="rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition duration-300"
            >
              <img
                src={`/projects/virtual-mouse/${img}`}
                alt="VirtualMouse preview"
                className="w-full object-cover transition duration-500 hover:scale-105"
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
            src="https://www.youtube.com/embed/-KJHIsubhEI"
            title="VirtualMouse Demo"
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
          href="https://github.com/BiswasApurbo/VirtualMouse-AI"
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