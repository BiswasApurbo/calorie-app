"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CertificationsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="max-w-5xl">

      {/* ===== PAGE TITLE (NORMALIZED) ===== */}
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold mb-12"
      >
        Certifications & Professional Development
      </motion.h2>

      <div className="space-y-20">

        <ImageCertificate
          title="WIECON-ECE Conference Presenter"
          subtitle="IEEE International Conference"
          image="/certifications/wiecon.webp"
          onClick={setSelectedImage}
        />

        <ImageCertificate
          title="Machine Learning Internship (3 Months)"
          subtitle="DataKothon"
          image="/certifications/datakothon.webp"
          onClick={setSelectedImage}
        />

        <ImageCertificate
          title="Machine Learning Internship (1 Month)"
          subtitle="Future Intern"
          image="/certifications/future-intern.webp"
          onClick={setSelectedImage}
        />

        <ImageCertificate
          title="IEEE Recognition Certificate"
          subtitle="IEEE"
          image="/certifications/ieee.webp"
          onClick={setSelectedImage}
        />

      </div>

      {/* ===== ADDITIONAL CERTIFICATIONS ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-20 border-t border-slate-200 pt-12"
      >
        <h3 className="text-lg font-semibold mb-8">
          Additional Certifications
        </h3>

        <div className="space-y-6">

          <TextCertificate
            title="Machine Learning Specialization"
            provider="Coursera"
            link="https://drive.google.com/file/d/1sqEFNbaweNLbqV4pA5u8gEkL8lFTjvJt/view?usp=drive_link"
          />

          <TextCertificate
            title="Deep Learning & AI Training"
            provider="UniAthena"
            link="https://drive.google.com/file/d/17WOdbz9TvDfd0-NEj71nFkCmdOEiUzuq/view?usp=drive_link"
          />

          <TextCertificate
            title="Professional Development Certification"
            provider="LinkedIn Learning"
            link="https://drive.google.com/file/d/1sB-MCTjfAD6nB0mpoXcf04GIQ3KZqvrm/view?usp=drive_link"
          />

        </div>
      </motion.div>

      {/* ===== MODAL ===== */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-8"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl w-full"
          >
            <img
              src={selectedImage}
              alt="Certificate Preview"
              className="w-full rounded-xl shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}

    </div>
  );
}

function ImageCertificate({
  title,
  subtitle,
  image,
  onClick,
}: {
  title: string;
  subtitle: string;
  image: string;
  onClick: (img: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >

      <motion.h3
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-lg font-semibold mb-2"
      >
        {title}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        className="text-sm text-slate-500 mb-5"
      >
        {subtitle}
      </motion.p>

      <div className="flex justify-center">
        <div
          className="w-[65%] overflow-hidden rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition duration-300 cursor-pointer"
          onClick={() => onClick(image)}
        >
          <img
            src={image}
            alt={title}
            className="w-full object-cover hover:scale-105 transition duration-500"
          />
        </div>
      </div>

    </motion.div>
  );
}

function TextCertificate({
  title,
  provider,
  link,
}: {
  title: string;
  provider: string;
  link: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition bg-white"
    >
      <h4 className="font-semibold text-base">
        {title}
      </h4>

      <p className="text-sm text-slate-500 mt-1">
        {provider}
      </p>

      <a
        href={link}
        target="_blank"
        className="inline-block mt-4 text-sm text-blue-600 hover:underline"
      >
        View Certificate →
      </a>
    </motion.div>
  );
}