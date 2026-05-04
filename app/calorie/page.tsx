"use client";

import { motion } from "framer-motion";
import { startTransition, useEffect, useMemo, useState } from "react";

type Sex = "male" | "female";
type Goal = "maintain" | "lose" | "gain";
type MealType = "breakfast" | "lunch" | "dinner" | "snack";
type FoodMode = "preset" | "custom";

type Profile = {
  sex: Sex;
  age: number;
  weight: number;
  height: number;
  activity: number;
  goal: Goal;
};

type FoodEntry = {
  id: string;
  date: string;
  name: string;
  meal: MealType;
  quantity: number;
  unit: string;
  caloriesPerServing: number;
  calories: number;
};

type StoredState = {
  profile: Profile;
  selectedDate: string;
  entriesByDate: Record<string, FoodEntry[]>;
};

const storageKey = "calorie-app:v1";

const defaultProfile: Profile = {
  sex: "male",
  age: 25,
  weight: 70,
  height: 170,
  activity: 1.55,
  goal: "maintain",
};

const foodOptions: Record<
  string,
  { caloriesPerServing: number; unit: string }
> = {
  "Apple": { caloriesPerServing: 95, unit: "medium" },
  "Banana": { caloriesPerServing: 105, unit: "medium" },
  "Oatmeal": { caloriesPerServing: 158, unit: "cup cooked" },
  "Brown rice": { caloriesPerServing: 216, unit: "cup cooked" },
  "Chicken breast": { caloriesPerServing: 165, unit: "100g" },
  "Salmon": { caloriesPerServing: 206, unit: "100g" },
  "Broccoli": { caloriesPerServing: 55, unit: "cup" },
  "Egg": { caloriesPerServing: 78, unit: "large" },
  "Greek yogurt": { caloriesPerServing: 100, unit: "cup" },
  "Avocado": { caloriesPerServing: 120, unit: "half" },
  "Sweet potato": { caloriesPerServing: 103, unit: "medium" },
  "Whole wheat bread": { caloriesPerServing: 79, unit: "slice" },
  "Almonds": { caloriesPerServing: 164, unit: "ounce" },
  "Protein shake": { caloriesPerServing: 120, unit: "scoop" },
  "Milk": { caloriesPerServing: 150, unit: "cup" },
};

const activityLevels = [
  { label: "Sedentary", detail: "Little or no exercise", value: 1.2 },
  { label: "Light", detail: "Exercise 1-3 days/week", value: 1.375 },
  { label: "Moderate", detail: "Exercise 3-5 days/week", value: 1.55 },
  { label: "Active", detail: "Hard exercise 6-7 days/week", value: 1.725 },
  { label: "Very active", detail: "Physical job or intense training", value: 1.9 },
];

const goalOptions: Record<
  Goal,
  {
    label: string;
    description: string;
    adjustment: string;
    activeClass: string;
    badgeClass: string;
    summaryClass: string;
    progressClass: string;
  }
> = {
  maintain: {
    label: "Maintain",
    description: "Stay close to maintenance calories.",
    adjustment: "TDEE",
    activeClass: "border-emerald-600 bg-emerald-600 text-white shadow-sm",
    badgeClass: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
    summaryClass: "from-emerald-600 to-slate-900",
    progressClass: "bg-emerald-500",
  },
  lose: {
    label: "Lose",
    description: "Aim for a moderate calorie deficit.",
    adjustment: "-500 kcal",
    activeClass: "border-amber-500 bg-amber-500 text-slate-950 shadow-sm",
    badgeClass: "bg-amber-50 text-amber-800 ring-1 ring-amber-200",
    summaryClass: "from-amber-500 to-slate-900",
    progressClass: "bg-amber-500",
  },
  gain: {
    label: "Gain",
    description: "Aim for a steady calorie surplus.",
    adjustment: "+300 kcal",
    activeClass: "border-sky-600 bg-sky-600 text-white shadow-sm",
    badgeClass: "bg-sky-50 text-sky-700 ring-1 ring-sky-200",
    summaryClass: "from-sky-600 to-slate-900",
    progressClass: "bg-sky-500",
  },
};

const mealTypes: Array<{ value: MealType; label: string }> = [
  { value: "breakfast", label: "Breakfast" },
  { value: "lunch", label: "Lunch" },
  { value: "dinner", label: "Dinner" },
  { value: "snack", label: "Snack" },
];

const inputClass =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-900 shadow-[0_1px_0_rgba(15,23,42,0.03)] outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100";

const buttonClass =
  "rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none";

function getToday() {
  return new Date().toISOString().slice(0, 10);
}

function createId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function formatCalories(value: number) {
  return Math.max(0, Math.round(Number.isFinite(value) ? value : 0));
}

function calculateBmr(profile: Profile) {
  if (profile.age <= 0 || profile.weight <= 0 || profile.height <= 0) {
    return 0;
  }

  const base = 10 * profile.weight + 6.25 * profile.height - 5 * profile.age;
  return profile.sex === "male" ? base + 5 : base - 161;
}

function calculateTarget(profile: Profile, maintenanceCalories: number) {
  if (maintenanceCalories <= 0) return 0;

  if (profile.goal === "lose") {
    const floor = profile.sex === "female" ? 1200 : 1500;
    return Math.max(floor, maintenanceCalories - 500);
  }

  if (profile.goal === "gain") {
    return maintenanceCalories + 300;
  }

  return maintenanceCalories;
}

function readStoredState(): StoredState | null {
  try {
    const raw = window.localStorage.getItem(storageKey);
    return raw ? (JSON.parse(raw) as StoredState) : null;
  } catch {
    return null;
  }
}

function safeNumber(value: string, fallback = 0) {
  const nextValue = Number(value);
  return Number.isFinite(nextValue) ? nextValue : fallback;
}

export default function CaloriePage() {
  const [profile, setProfile] = useState<Profile>(defaultProfile);
  const [selectedDate, setSelectedDate] = useState(getToday);
  const [entriesByDate, setEntriesByDate] = useState<
    Record<string, FoodEntry[]>
  >({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const [foodMode, setFoodMode] = useState<FoodMode>("preset");
  const [presetFood, setPresetFood] = useState(Object.keys(foodOptions)[0]);
  const [meal, setMeal] = useState<MealType>("breakfast");
  const [quantity, setQuantity] = useState(1);
  const [customName, setCustomName] = useState("");
  const [customCalories, setCustomCalories] = useState(100);
  const [customUnit, setCustomUnit] = useState("serving");

  useEffect(() => {
    const stored = readStoredState();

    startTransition(() => {
      if (stored) {
        setProfile({ ...defaultProfile, ...stored.profile });
        setSelectedDate(stored.selectedDate || getToday());
        setEntriesByDate(stored.entriesByDate || {});
      }

      setHasLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (!hasLoaded) return;

    const nextState: StoredState = {
      profile,
      selectedDate,
      entriesByDate,
    };

    window.localStorage.setItem(storageKey, JSON.stringify(nextState));
  }, [entriesByDate, hasLoaded, profile, selectedDate]);

  const entries = useMemo(
    () => entriesByDate[selectedDate] || [],
    [entriesByDate, selectedDate]
  );

  const bmr = useMemo(() => calculateBmr(profile), [profile]);
  const maintenanceCalories = useMemo(
    () => (bmr > 0 ? bmr * profile.activity : 0),
    [bmr, profile.activity]
  );
  const dailyTarget = useMemo(
    () => calculateTarget(profile, maintenanceCalories),
    [maintenanceCalories, profile]
  );
  const totalConsumed = useMemo(
    () => entries.reduce((sum, entry) => sum + entry.calories, 0),
    [entries]
  );

  const remainingCalories = dailyTarget - totalConsumed;
  const progressPercent =
    dailyTarget > 0 ? Math.min(100, (totalConsumed / dailyTarget) * 100) : 0;
  const isOverTarget = remainingCalories < 0;
  const activeGoal = goalOptions[profile.goal];
  const progressColor = isOverTarget ? "bg-rose-500" : activeGoal.progressClass;

  const groupedEntries = useMemo(() => {
    return mealTypes.map((mealType) => ({
      ...mealType,
      entries: entries.filter((entry) => entry.meal === mealType.value),
    }));
  }, [entries]);

  const updateProfile = <Key extends keyof Profile>(
    key: Key,
    value: Profile[Key]
  ) => {
    setProfile((current) => ({ ...current, [key]: value }));
  };

  const handleAddFood = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = customName.trim();
    const preset = foodOptions[presetFood];
    const name = foodMode === "preset" ? presetFood : trimmedName;
    const unit = foodMode === "preset" ? preset.unit : customUnit.trim();
    const caloriesPerServing =
      foodMode === "preset" ? preset.caloriesPerServing : customCalories;

    if (!name || quantity <= 0 || caloriesPerServing <= 0) return;

    const calories = quantity * caloriesPerServing;
    const nextEntry: FoodEntry = {
      id: createId(),
      date: selectedDate,
      name,
      meal,
      quantity,
      unit: unit || "serving",
      caloriesPerServing,
      calories,
    };

    setEntriesByDate((current) => ({
      ...current,
      [selectedDate]: [...(current[selectedDate] || []), nextEntry],
    }));

    setQuantity(1);

    if (foodMode === "custom") {
      setCustomName("");
      setCustomCalories(100);
      setCustomUnit("serving");
    }
  };

  const handleRemoveEntry = (entryId: string) => {
    setEntriesByDate((current) => ({
      ...current,
      [selectedDate]: (current[selectedDate] || []).filter(
        (entry) => entry.id !== entryId
      ),
    }));
  };

  const handleClearDay = () => {
    setEntriesByDate((current) => {
      const nextEntries = { ...current };
      delete nextEntries[selectedDate];
      return nextEntries;
    });
  };

  return (
    <div className="mx-auto max-w-6xl px-4 pb-12 text-slate-900 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-6 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
      >
        <div className="h-1.5 bg-gradient-to-r from-emerald-500 via-amber-400 to-sky-500" />
        <div className="flex flex-col gap-5 p-5 md:flex-row md:items-end md:justify-between md:p-6">
          <div>
            <div className="mb-3 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 ring-1 ring-emerald-100">
              Daily tracker
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950">
              Calorie dashboard
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Plan your target, log meals by date, and keep today&apos;s intake
              visible at a glance.
            </p>
          </div>

          <label className="w-full text-sm font-semibold text-slate-700 md:w-52">
            <span className="mb-2 block">Selected date</span>
            <input
              type="date"
              value={selectedDate}
              onChange={(event) => setSelectedDate(event.target.value)}
              className={inputClass}
            />
          </label>
        </div>
      </motion.div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.8fr)]">
        <section className="space-y-6">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-950">
                  Profile and goal
                </h2>
                <p className="text-sm text-slate-500">
                  Estimates use the Mifflin-St Jeor formula.
                </p>
              </div>
              <div className="rounded-lg bg-slate-950 px-3 py-2 text-sm font-semibold text-white shadow-sm">
                BMR {formatCalories(bmr)} kcal
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-5">
              <label className="space-y-2 text-sm font-medium text-slate-700">
                <span>Sex</span>
                <select
                  value={profile.sex}
                  onChange={(event) =>
                    updateProfile("sex", event.target.value as Sex)
                  }
                  className={inputClass}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>

              <label className="space-y-2 text-sm font-medium text-slate-700">
                <span>Age</span>
                <input
                  type="number"
                  min={1}
                  value={profile.age}
                  onChange={(event) =>
                    updateProfile("age", safeNumber(event.target.value))
                  }
                  className={inputClass}
                />
              </label>

              <label className="space-y-2 text-sm font-medium text-slate-700">
                <span>Height (cm)</span>
                <input
                  type="number"
                  min={1}
                  value={profile.height}
                  onChange={(event) =>
                    updateProfile("height", safeNumber(event.target.value))
                  }
                  className={inputClass}
                />
              </label>

              <label className="space-y-2 text-sm font-medium text-slate-700">
                <span>Weight (kg)</span>
                <input
                  type="number"
                  min={1}
                  value={profile.weight}
                  onChange={(event) =>
                    updateProfile("weight", safeNumber(event.target.value))
                  }
                  className={inputClass}
                />
              </label>

              <label className="space-y-2 text-sm font-medium text-slate-700">
                <span>Activity</span>
                <select
                  value={profile.activity}
                  onChange={(event) =>
                    updateProfile("activity", safeNumber(event.target.value, 1.2))
                  }
                  className={inputClass}
                >
                  {activityLevels.map((level) => (
                    <option key={level.label} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {(Object.keys(goalOptions) as Goal[]).map((goal) => (
                <button
                  key={goal}
                  type="button"
                  onClick={() => updateProfile("goal", goal)}
                  className={`rounded-lg border p-4 text-left transition ${
                    profile.goal === goal
                      ? goalOptions[goal].activeClass
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-white hover:shadow-sm"
                  }`}
                >
                  <span className="flex items-center justify-between gap-3 text-sm font-semibold">
                    {goalOptions[goal].label}
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs ${
                        profile.goal === goal
                          ? "bg-white/20"
                          : goalOptions[goal].badgeClass
                      }`}
                    >
                      {goalOptions[goal].adjustment}
                    </span>
                  </span>
                  <span className="mt-2 block text-sm opacity-80">
                    {goalOptions[goal].description}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-950">
                  Add food
                </h2>
                <p className="text-sm text-slate-500">
                  Use a preset item or enter your own calories.
                </p>
              </div>
              <div className="flex rounded-lg border border-slate-200 bg-slate-100 p-1 shadow-inner">
                {(["preset", "custom"] as FoodMode[]).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setFoodMode(mode)}
                    className={`rounded-md px-3 py-1.5 text-sm font-medium capitalize transition ${
                      foodMode === mode
                        ? "bg-white text-slate-950 shadow-sm"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleAddFood} className="grid gap-4">
              <div className="grid gap-4 lg:grid-cols-[1.5fr_0.9fr_0.9fr_0.9fr]">
                {foodMode === "preset" ? (
                  <label className="space-y-2 text-sm font-medium text-slate-700">
                    <span>Food item</span>
                    <select
                      value={presetFood}
                      onChange={(event) => setPresetFood(event.target.value)}
                      className={inputClass}
                    >
                      {Object.entries(foodOptions).map(([food, detail]) => (
                        <option key={food} value={food}>
                          {food} - {detail.caloriesPerServing} kcal/
                          {detail.unit}
                        </option>
                      ))}
                    </select>
                  </label>
                ) : (
                  <label className="space-y-2 text-sm font-medium text-slate-700">
                    <span>Food name</span>
                    <input
                      type="text"
                      value={customName}
                      onChange={(event) => setCustomName(event.target.value)}
                      placeholder="e.g. Lentil soup"
                      className={inputClass}
                    />
                  </label>
                )}

                <label className="space-y-2 text-sm font-medium text-slate-700">
                  <span>Meal</span>
                  <select
                    value={meal}
                    onChange={(event) => setMeal(event.target.value as MealType)}
                    className={inputClass}
                  >
                    {mealTypes.map((mealType) => (
                      <option key={mealType.value} value={mealType.value}>
                        {mealType.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="space-y-2 text-sm font-medium text-slate-700">
                  <span>Quantity</span>
                  <input
                    type="number"
                    min={0.1}
                    step={0.1}
                    value={quantity}
                    onChange={(event) =>
                      setQuantity(safeNumber(event.target.value))
                    }
                    className={inputClass}
                  />
                </label>

                <div className="self-end">
                  <button type="submit" className={`${buttonClass} w-full`}>
                    Add food
                  </button>
                </div>
              </div>

              {foodMode === "custom" && (
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="space-y-2 text-sm font-medium text-slate-700">
                    <span>Calories per serving</span>
                    <input
                      type="number"
                      min={1}
                      value={customCalories}
                      onChange={(event) =>
                        setCustomCalories(safeNumber(event.target.value))
                      }
                      className={inputClass}
                    />
                  </label>

                  <label className="space-y-2 text-sm font-medium text-slate-700">
                    <span>Serving unit</span>
                    <input
                      type="text"
                      value={customUnit}
                      onChange={(event) => setCustomUnit(event.target.value)}
                      placeholder="serving, cup, 100g"
                      className={inputClass}
                    />
                  </label>
                </div>
              )}
            </form>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-950">
                  Food log
                </h2>
                <p className="text-sm text-slate-500">
                  {entries.length} item{entries.length === 1 ? "" : "s"} logged
                  for {selectedDate}.
                </p>
              </div>
              <button
                type="button"
                onClick={handleClearDay}
                disabled={entries.length === 0}
                className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-rose-200 hover:text-rose-700 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-300 disabled:shadow-none"
              >
                Clear day
              </button>
            </div>

            <div className="space-y-4">
              {groupedEntries.map((group) => (
                <div
                  key={group.value}
                  className="rounded-lg border border-slate-100 bg-slate-50/80 p-4"
                >
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold text-slate-800">
                      {group.label}
                    </h3>
                    <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
                      {formatCalories(
                        group.entries.reduce(
                          (sum, entry) => sum + entry.calories,
                          0
                        )
                      )}{" "}
                      kcal
                    </span>
                  </div>

                  {group.entries.length === 0 ? (
                    <p className="text-sm text-slate-500">No foods logged.</p>
                  ) : (
                    <div className="space-y-2">
                      {group.entries.map((entry) => (
                        <div
                          key={entry.id}
                          className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm shadow-slate-200/60 sm:flex-row sm:items-center sm:justify-between"
                        >
                          <div>
                            <p className="font-medium text-slate-900">
                              {entry.name}
                            </p>
                            <p className="text-sm text-slate-500">
                              {entry.quantity} x {entry.unit} at{" "}
                              {formatCalories(entry.caloriesPerServing)} kcal
                            </p>
                          </div>
                          <div className="flex items-center justify-between gap-3 sm:justify-end">
                            <span className="text-sm font-semibold text-slate-800">
                              {formatCalories(entry.calories)} kcal
                            </span>
                            <button
                              type="button"
                              onClick={() => handleRemoveEntry(entry.id)}
                              className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-600 transition hover:border-rose-200 hover:text-rose-700"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60 xl:sticky xl:top-28">
            <h2 className="text-lg font-semibold text-slate-950">
              Daily summary
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              {activeGoal.label} goal for {selectedDate}
            </p>

            <div
              className={`mt-5 rounded-lg bg-gradient-to-br ${activeGoal.summaryClass} p-5 text-white shadow-lg shadow-slate-300/60`}
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm font-medium text-white/75">
                  Daily target
                </p>
                <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold">
                  {activeGoal.adjustment}
                </span>
              </div>
              <p className="mt-1 text-4xl font-semibold">
                {formatCalories(dailyTarget)}
              </p>
              <p className="mt-1 text-sm text-white/75">kcal</p>
            </div>

            <div className="mt-5 space-y-3">
              <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full ${progressColor}`}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="flex justify-between gap-3 text-sm">
                <span className="text-slate-500">Consumed</span>
                <span className="font-semibold">
                  {formatCalories(totalConsumed)} kcal
                </span>
              </div>
              <div className="flex justify-between gap-3 text-sm">
                <span className="text-slate-500">
                  {isOverTarget ? "Over target" : "Remaining"}
                </span>
                <span
                  className={`font-semibold ${
                    isOverTarget ? "text-rose-600" : "text-emerald-700"
                  }`}
                >
                  {formatCalories(Math.abs(remainingCalories))} kcal
                </span>
              </div>
            </div>

            <div className="mt-5 grid gap-3 text-sm">
              <div className="rounded-lg border border-slate-100 bg-slate-50 p-3">
                <p className="font-semibold text-slate-800">Maintenance</p>
                <p className="mt-1 text-slate-600">
                  {formatCalories(maintenanceCalories)} kcal/day
                </p>
              </div>
              <div className="rounded-lg border border-slate-100 bg-slate-50 p-3">
                <p className="font-semibold text-slate-800">
                  Activity multiplier
                </p>
                <p className="mt-1 text-slate-600">
                  {profile.activity.toFixed(3)}
                </p>
              </div>
            </div>

            <p className="mt-5 text-xs leading-5 text-slate-500">
              Estimates are general wellness guidance. Consult a qualified
              professional for medical or nutrition advice.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
