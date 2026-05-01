import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 text-slate-900">
      <div className="rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-sm">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Welcome to Calorie App</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">Track your daily food calories and get personalized calorie recommendations based on your age, height, weight, and activity level.</p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link href="/calorie" className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700">Go to Calorie Tracker</Link>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">Your calorie tracker is ready to use immediately.</div>
        </div>
      </div>
    </div>
  );
}
