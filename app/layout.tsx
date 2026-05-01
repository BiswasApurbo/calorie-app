"use client";

import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 min-h-screen">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-semibold text-slate-900">Calorie App</Link>
            <nav className="flex gap-4 text-sm text-slate-600">
              <Link href="/" className="hover:text-slate-900">Home</Link>
              <Link href="/calorie" className="rounded-full bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-700">Calorie Tracker</Link>
            </nav>
          </div>
        </header>
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
