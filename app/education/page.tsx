"use client";

import { motion } from "framer-motion";

export default function EducationPage() {
  return (
    <div className="max-w-4xl">

      {/* ===== PAGE TITLE ===== */}
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold mb-12"
      >
        Education
      </motion.h2>

      <div className="space-y-12">

        {/* ================= BSc ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="group border-l-4 border-black pl-6 py-3 transition-all duration-300 hover:bg-slate-50 hover:shadow-sm"
        >
          <h3 className="text-lg font-semibold group-hover:text-black transition">
            BSc in Computer Science & Engineering
          </h3>

          <p className="text-sm text-slate-500">
            American International University–Bangladesh (AIUB)
          </p>

          <p className="text-sm text-black font-medium mt-1">
            2023 – Present | CGPA: 3.86
          </p>
        </motion.div>

        {/* ================= HSC ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="group border-l-2 border-slate-300 pl-6 py-3 transition-all duration-300 hover:border-black hover:bg-slate-50 hover:shadow-sm"
        >
          <h3 className="text-lg font-semibold group-hover:text-black transition">
            Higher Secondary Certificate (HSC)
          </h3>

          <p className="text-sm text-slate-500">
            Rajshahi City College, Rajshahi
          </p>

          <p className="text-sm text-slate-700 font-medium mt-1">
            2019 – 2020 | GPA: 5.00
          </p>
        </motion.div>

        {/* ================= SSC ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="group border-l-2 border-slate-300 pl-6 py-3 transition-all duration-300 hover:border-black hover:bg-slate-50 hover:shadow-sm"
        >
          <h3 className="text-lg font-semibold group-hover:text-black transition">
            Secondary School Certificate (SSC)
          </h3>

          <p className="text-sm text-slate-500">
            Rajshahi Collegiate School, Rajshahi
          </p>

          <p className="text-sm text-slate-700 font-medium mt-1">
            2017 – 2018 | GPA: 5.00
          </p>
        </motion.div>

        {/* ================= JSC ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="group border-l-2 border-slate-300 pl-6 py-3 transition-all duration-300 hover:border-black hover:bg-slate-50 hover:shadow-sm"
        >
          <h3 className="text-lg font-semibold group-hover:text-black transition">
            Junior School Certificate (JSC)
          </h3>

          <p className="text-sm text-slate-500">
            Seroil Government High School, Rajshahi
          </p>

          <p className="text-sm text-slate-700 font-medium mt-1">
            2014 – 2016 | GPA: 5.00
          </p>
        </motion.div>

      </div>

    </div>
  );
}