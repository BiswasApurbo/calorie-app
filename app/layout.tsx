import Link from "next/link";
import type { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-slate-900">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-base font-semibold text-slate-950"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-600 text-sm font-bold text-white shadow-sm">
                C
              </span>
              Calorie App
            </Link>
            <nav className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <Link
                href="/"
                className="rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-slate-950"
              >
                Home
              </Link>
              <Link
                href="/calorie"
                className="rounded-lg bg-slate-950 px-3 py-2 text-white shadow-sm transition hover:bg-slate-800"
              >
                Tracker
              </Link>
            </nav>
          </div>
        </header>
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
