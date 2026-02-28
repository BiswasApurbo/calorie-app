"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "VirtualMouse-AI",
    slug: "virtual-mouse",
    img: "/projects/virtual-mouse/ss1.webp",
  },
  {
    title: "Real-Time Color Detection",
    slug: "color-detection",
    img: "/projects/color-detection/ss1.webp",
  },
  {
    title: "Sales Forecasting",
    slug: "sales-forecasting",
    img: "/projects/sales-forecasting/ss1.webp",
  },
  {
    title: "Stock Prediction",
    slug: "stock-prediction",
    img: "/projects/stock-prediction/ss1.webp",
  },
  {
    title: "DhakaConnect",
    slug: "dhaka-connect",
    img: "/projects/dhaka-connect/ss1.webp",
  },
  {
    title: "Car Rental System",
    slug: "car-rental",
    img: "/projects/car-rental/ss1.webp",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl w-full">

      {/* ===== PAGE TITLE ===== */}
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold mb-10"
      >
        Selected Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group block rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition duration-300"
            >

              {/* Card Title */}
              <div className="px-5 py-4 text-sm font-semibold border-b border-slate-200 bg-white">
                {project.title}
              </div>

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-52 object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                  <span className="text-white text-sm font-medium tracking-wide">
                    View Details →
                  </span>
                </div>
              </div>

            </Link>
          </motion.div>
        ))}

      </div>
    </div>
  );
}