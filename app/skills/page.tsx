"use client";

import { motion } from "framer-motion";
import {
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiPython,
  SiOpencv,
  SiGit,
  SiGooglecolab,
  SiNumpy,
  SiPandas,
} from "react-icons/si";

export default function SkillsPage() {
  return (
    <div className="max-w-4xl w-full">

      {/* ===== PAGE TITLE ===== */}
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold mb-12"
      >
        Technical Expertise
      </motion.h2>

      <div className="space-y-14">

        {/* ================= ML & DL ================= */}
        <Section title="Machine Learning & Deep Learning">
          <Skill icon={<SiPytorch />} label="PyTorch" />
          <Skill icon={<SiTensorflow />} label="TensorFlow" />
          <Skill icon={<SiScikitlearn />} label="Scikit-learn" />
          <Skill icon={<SiPython />} label="Model Evaluation" />
          <Skill icon={<SiPython />} label="LSTM" />
          <Skill icon={<SiPython />} label="CNN" />
          <Skill icon={<SiPython />} label="Transfer Learning" />
          <Skill icon={<SiPython />} label="Time-Series Forecasting" />
        </Section>

        {/* ================= AI DOMAINS ================= */}
        <Section title="AI Domains">
          <Skill icon={<SiOpencv />} label="Computer Vision" />
          <Skill icon={<SiPython />} label="Natural Language Processing" />
          <Skill icon={<SiPython />} label="Predictive Modeling" />
          <Skill icon={<SiOpencv />} label="Real-Time Vision Systems" />
          <Skill icon={<SiPython />} label="Trustworthy AI" />
        </Section>

        {/* ================= PROGRAMMING ================= */}
        <Section title="Programming & Tools">
          <Skill icon={<SiPython />} label="Python" />
          <Skill icon={<SiNumpy />} label="NumPy" />
          <Skill icon={<SiPandas />} label="Pandas" />
          <Skill icon={<SiOpencv />} label="OpenCV" />
          <Skill icon={<SiGit />} label="Git" />
          <Skill icon={<SiGooglecolab />} label="Google Colab" />
        </Section>

      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-lg font-semibold mb-5">
        {title}
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {children}
      </div>
    </motion.div>
  );
}

function Skill({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="flex items-center gap-3 border border-slate-200 rounded-lg px-4 py-3 bg-white hover:shadow-sm transition duration-300"
    >
      <div className="text-lg text-slate-700">
        {icon}
      </div>
      <span className="text-sm font-medium text-slate-700">
        {label}
      </span>
    </motion.div>
  );
}