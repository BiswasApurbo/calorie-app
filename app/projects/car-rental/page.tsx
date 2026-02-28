"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CarRentalPage() {
  return (
    <div className="max-w-4xl">

      {/* ===== BREADCRUMB ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-sm text-slate-500 mb-6"
      >
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
        <span className="mx-2">›</span>
        <span className="text-slate-700">
          Car Rental System
        </span>
      </motion.div>

      {/* ===== TITLE (NORMALIZED) ===== */}
      <motion.h1
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold mb-10"
      >
        Car Rental System
      </motion.h1>

      {/* ===== OVERVIEW ===== */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="text-slate-600 leading-relaxed">
          A web-based car rental platform featuring user booking,
          vehicle management, and administrative control. The system
          enables customers to browse available vehicles, make reservations,
          and manage rental history through an interactive interface.
        </p>
      </motion.section>

      {/* ===== CORE FEATURES ===== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-lg font-semibold mb-5">
          Core Features
        </h2>

        <ul className="list-disc list-inside text-slate-600 space-y-2 text-sm">
          {[
            "User registration and authentication",
            "Car listing and availability tracking",
            "Booking and reservation system",
            "Admin dashboard for vehicle management",
            "Responsive web interface",
          ].map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              {feature}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* ===== SCREENSHOTS ===== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <h2 className="text-lg font-semibold mb-6">
          System Preview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {["ss1.webp", "ss2.webp", "ss3.webp"].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3 }}
              className="rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition duration-300"
            >
              <img
                src={`/projects/car-rental/${img}`}
                alt="Car Rental Preview"
                className="w-full h-52 object-cover transition duration-500 hover:scale-105"
              />
            </motion.div>
          ))}

        </div>
      </motion.section>

      {/* ===== DEMO ===== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <h2 className="text-lg font-semibold mb-5">
          Demo
        </h2>

        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-sm">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/uuKPmHdUp0E"
            title="Car Rental System Demo"
            allowFullScreen
          />
        </div>
      </motion.section>

      {/* ===== REPOSITORY ===== */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-lg font-semibold mb-5">
          Repository
        </h2>

        <motion.a
          href="https://github.com/BiswasApurbo/car_rental_system-wt_project"
          target="_blank"
          whileHover={{ y: -2 }}
          className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-slate-300 hover:border-black transition group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.85 10.91.57.1.78-.25.78-.55v-2.03c-3.19.69-3.86-1.38-3.86-1.38-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.07 0 0 .96-.31 3.15 1.18a10.94 10.94 0 012.87-.39c.97 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.6.23 2.78.11 3.07.73.81 1.18 1.84 1.18 3.1 0 4.44-2.69 5.41-5.25 5.7.41.36.77 1.08.77 2.18v3.23c0 .3.21.66.79.55A10.52 10.52 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/>
          </svg>

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