"use client";

import "./globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Github, Linkedin, Facebook, Instagram, Mail, FileText } from "lucide-react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <html lang="en">
      <body className="bg-white text-slate-800">

        <div className="flex">

          {/* ================= LEFT SIDEBAR ================= */}
          <aside className="w-[28%] min-w-[340px] h-screen fixed left-0 top-0 border-r border-slate-200 px-10 py-14 flex flex-col">

            <div>
              <img
                src="/profile.jpeg"
                alt="Apurbo Biswas"
                className="w-44 h-44 rounded-2xl object-cover mb-8 shadow-sm"
              />

              <h1 className="text-3xl font-semibold tracking-tight">
                Apurbo Biswas
              </h1>

              <p className="text-base text-slate-600 mt-4 leading-relaxed">
                Undergraduate Student focused on Machine Learning & Deep Learning.
                <br />
                Aspiring Researcher and Academic Reviewer.
              </p>
            </div>

            <div className="mt-14">
              <h3 className="text-xs font-semibold mb-6 tracking-wider text-slate-500 uppercase">
                Connect
              </h3>

              <div className="flex items-center gap-6 text-slate-600">
                <SocialIcon href="https://github.com/BiswasApurbo" icon={<Github size={22} />} />
                <SocialIcon href="https://www.linkedin.com/in/apurbo-biswas23/" icon={<Linkedin size={22} />} />
                <SocialIcon href="https://www.facebook.com/apurbobiswas.apurbo1" icon={<Facebook size={22} />} />
                <SocialIcon href="https://www.instagram.com/biswas._.apurbo/" icon={<Instagram size={22} />} />
                <SocialIcon href="mailto:apurbobiswas.aiub@gmail.com" icon={<Mail size={22} />} />
              </div>
            </div>

            <div className="mt-auto text-xs text-slate-400 tracking-wide">
              © {new Date().getFullYear()} Apurbo Biswas
            </div>

          </aside>

          {/* ================= RIGHT SECTION ================= */}
          <div className="ml-[28%] w-[72%]">

            {/* ===== TRANSPARENT NAVBAR ===== */}
            <header
              className={`fixed top-0 left-[28%] w-[72%] px-20 py-8 flex justify-end items-center gap-6 text-sm font-medium transition-transform duration-300 ${
                showNav ? "translate-y-0" : "-translate-y-full"
              }`}
            >
              <NavLink href="/">About</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/publications">Publications</NavLink>
              <NavLink href="/reviewer">Reviewer</NavLink>
              <NavLink href="/education">Education</NavLink>
              <NavLink href="/awards">Awards</NavLink>
              <NavLink href="/certifications">Certifications</NavLink>
              <NavLink href="/skills">Skills</NavLink>
              <NavLink href="/resume">Resume</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </header>

            <main className="px-24 pt-32 pb-24 min-h-screen">
              {children}
            </main>

          </div>

        </div>

      </body>
    </html>
  );
}

/* ===== Components ===== */

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-slate-700 hover:text-black transition duration-200"
    >
      {children}
    </Link>
  );
}

function SocialIcon({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="hover:text-black transition duration-200 hover:scale-105"
    >
      {icon}
    </a>
  );
}