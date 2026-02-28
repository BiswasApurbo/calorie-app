"use client";

import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xreadjky", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      setStatus("Message sent successfully.");
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl">

      {/* ===== PAGE TITLE ===== */}
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold mb-10"
      >
        Let’s Connect
      </motion.h2>

      {/* ===== DESCRIPTION ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="space-y-5 text-slate-600 mb-16 leading-relaxed"
      >
        <p>
          I’m open to collaborations in Machine Learning, Deep Learning,
          Computer Vision, and NLP. If you're working on impactful AI research
          or innovative projects, I’d be glad to connect.
        </p>

        <p>
          I am currently seeking research and industry internships where I can
          contribute meaningfully and continue developing as a researcher.
        </p>

        <p className="text-sm text-slate-500">
          I try to respond to serious inquiries, though I may not be able to
          provide individual technical troubleshooting via email.
        </p>
      </motion.div>

      {/* ===== DIRECT CONTACT ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-lg font-semibold mb-6">
          Direct Contact
        </h3>

        <div className="space-y-6 text-slate-700">

          <motion.a
            whileHover={{ scale: 1.02 }}
            href="mailto:apurbobiswas.aiub@gmail.com"
            className="flex items-center gap-4 hover:text-black transition"
          >
            <Mail size={20} />
            <span className="hover:underline">
              apurbobiswas.aiub@gmail.com
            </span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.02 }}
            href="https://wa.me/8801713929165"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:text-black transition"
          >
            <FaWhatsapp size={20} className="text-green-600" />
            <span className="hover:underline">
              01713929165
            </span>
          </motion.a>

          <div className="flex items-center gap-4">
            <MapPin size={20} />
            <span>Dhaka, Bangladesh</span>
          </div>

        </div>
      </motion.div>

      {/* ===== CONTACT FORM ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg font-semibold mb-8">
          Send a Message
        </h3>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black transition"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject (e.g., Research Collaboration / Internship Inquiry)"
            required
            className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black transition"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={6}
            className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black transition"
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-lg hover:opacity-80 transition"
          >
            Send Message
          </motion.button>

          {status && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-emerald-600 font-medium"
            >
              {status}
            </motion.p>
          )}
        </form>
      </motion.div>

    </div>
  );
}