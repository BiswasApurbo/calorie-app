"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const foodOptions: Record<
  string,
  { caloriesPerServing: number; unit: string }
> = {
  "Apple (1 medium)": { caloriesPerServing: 95, unit: "piece" },
  "Banana (1 medium)": { caloriesPerServing: 105, unit: "piece" },
  "Oatmeal (1 cup cooked)": { caloriesPerServing: 158, unit: "cup" },
  "Brown rice (1 cup cooked)": { caloriesPerServing: 216, unit: "cup" },
  "Chicken breast (100g)": { caloriesPerServing: 165, unit: "100g" },
  "Salmon (100g)": { caloriesPerServing: 206, unit: "100g" },
  "Broccoli (1 cup)": { caloriesPerServing: 55, unit: "cup" },
  "Egg (1 large)": { caloriesPerServing: 78, unit: "piece" },
  "Greek yogurt (1 cup)": { caloriesPerServing: 100, unit: "cup" },
  "Avocado (1/2 medium)": { caloriesPerServing: 120, unit: "half" },
  "Sweet potato (1 medium)": { caloriesPerServing: 103, unit: "piece" },
  "Whole wheat bread (1 slice)": { caloriesPerServing: 79, unit: "slice" },
  "Almonds (1 oz)": { caloriesPerServing: 164, unit: "ounce" },
  "Protein shake (1 scoop)": { caloriesPerServing: 120, unit: "scoop" },
  "Milk (1 cup)": { caloriesPerServing: 150, unit: "cup" },
};

const activityLevels = [
  { label: "Sedentary (little or no exercise)", value: 1.2 },
  { label: "Lightly active (light exercise 1-3 days/week)", value: 1.375 },
  { label: "Moderately active (moderate exercise 3-5 days/week)", value: 1.55 },
  { label: "Active (hard exercise 6-7 days/week)", value: 1.725 },
  { label: "Very active (very hard exercise or physical job)", value: 1.9 },
];

const mealSuggestions = [
  "Grilled chicken, brown rice, and steamed broccoli",
  "Oatmeal with berries, a boiled egg, and a side of avocado",
  "Greek yogurt with almonds, honey, and fresh fruit",
  "Salmon with roasted vegetables and a side salad",
  "Whole grain toast with peanut butter and banana",
];

const exerciseSuggestions = [
  "Brisk walking or jogging for 30 minutes",
  "Bodyweight circuit: squats, push-ups, lunges, and planks",
  "Cycling or swimming for 45 minutes",
  "Yoga or stretching routine to increase mobility",
  "High-intensity interval training (HIIT) for 20 minutes",
];

function formatCalories(value: number) {
  return value ? Math.round(value) : 0;
}

export default function CaloriePage() {
  const [age, setAge] = useState(25);
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [activity, setActivity] = useState(1.55);
  const [foodName, setFoodName] = useState(Object.keys(foodOptions)[0]);
  const [foodQuantity, setFoodQuantity] = useState(1);
  const [entries, setEntries] = useState<
    Array<{ name: string; quantity: number; unit: string; calories: number }>
  >([]);

  const bmr = useMemo(() => {
    if (age <= 0 || weight <= 0 || height <= 0) return 0;
    return 10 * weight + 6.25 * height - 5 * age + 5;
  }, [age, weight, height]);

  const tdee = useMemo(() => {
    return bmr > 0 ? bmr * activity : 0;
  }, [bmr, activity]);

  const totalFoodCalories = useMemo(
    () => entries.reduce((sum, entry) => sum + entry.calories, 0),
    [entries]
  );

  const handleAddFood = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (foodQuantity <= 0) return;

    const item = foodOptions[foodName];
    const calories = foodQuantity * item.caloriesPerServing;

    setEntries((current) => [
      ...current,
      {
        name: foodName,
        quantity: foodQuantity,
        unit: item.unit,
        calories,
      },
    ]);
    setFoodQuantity(1);
  };

  const handleRemoveEntry = (index: number) => {
    setEntries((current) => current.filter((_, itemIndex) => itemIndex !== index));
  };

  return (
    <div className="max-w-6xl">
      <motion.h2
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="text-3xl font-semibold mb-4"
      >
        Calorie Count App
      </motion.h2>

      <p className="text-slate-600 max-w-3xl mb-10 leading-relaxed">
        Track your food calories, enter your age, height, weight, and activity level, and get an estimated daily calorie requirement with meal and exercise suggestions.
      </p>

      <div className="grid gap-10 xl:grid-cols-[1.4fr_0.95fr]">
        <section className="space-y-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Your profile</h3>

            <div className="grid gap-4 md:grid-cols-3">
              <label className="space-y-2 text-sm text-slate-700">
                <span>Age</span>
                <input
                  type="number"
                  value={age}
                  min={1}
                  onChange={(event) => setAge(Number(event.target.value))}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-slate-500 focus:outline-none"
                />
              </label>

              <label className="space-y-2 text-sm text-slate-700">
                <span>Height (cm)</span>
                <input
                  type="number"
                  value={height}
                  min={1}
                  onChange={(event) => setHeight(Number(event.target.value))}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-slate-500 focus:outline-none"
                />
              </label>

              <label className="space-y-2 text-sm text-slate-700">
                <span>Weight (kg)</span>
                <input
                  type="number"
                  value={weight}
                  min={1}
                  onChange={(event) => setWeight(Number(event.target.value))}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-slate-500 focus:outline-none"
                />
              </label>
            </div>

            <label className="mt-5 block text-sm text-slate-700">
              <span className="mb-2 block">Daily activity</span>
              <select
                value={activity}
                onChange={(event) => setActivity(Number(event.target.value))}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-slate-500 focus:outline-none"
              >
                {activityLevels.map((level) => (
                  <option key={level.label} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Food tracker</h3>

            <form onSubmit={handleAddFood} className="grid gap-4">
              <label className="space-y-2 text-sm text-slate-700">
                <span>Food item</span>
                <select
                  value={foodName}
                  onChange={(event) => setFoodName(event.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-slate-500 focus:outline-none"
                >
                  {Object.keys(foodOptions).map((food) => (
                    <option key={food} value={food}>
                      {food}
                    </option>
                  ))}
                </select>
              </label>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-700">
                  <span>Quantity</span>
                  <input
                    type="number"
                    min={0.1}
                    step={0.1}
                    value={foodQuantity}
                    onChange={(event) => setFoodQuantity(Number(event.target.value))}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 focus:border-slate-500 focus:outline-none"
                  />
                </label>

                <div className="self-end">
                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                  >
                    Add food
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-6 space-y-4">
              {entries.length === 0 ? (
                <p className="text-sm text-slate-500">Add a food item to track calories.</p>
              ) : (
                <div className="space-y-3">
                  {entries.map((entry, index) => (
                    <div
                      key={`${entry.name}-${index}`}
                      className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between"
                    >
                      <div>
                        <p className="font-semibold">{entry.name}</p>
                        <p className="text-sm text-slate-600">
                          {entry.quantity} {entry.unit} · {formatCalories(entry.calories)} kcal
                        </p>
                      </div>
                      <button
                        onClick={() => handleRemoveEntry(index)}
                        className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-slate-500"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Daily calorie summary</h3>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="font-semibold">Estimated BMR</p>
                <p>{formatCalories(bmr)} kcal</p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="font-semibold">Activity multiplier</p>
                <p>{activity.toFixed(2)}</p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="font-semibold">Estimated maintenance calories</p>
                <p>{formatCalories(tdee)} kcal</p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="font-semibold">Weight loss target</p>
                <p>{Math.max(1200, formatCalories(tdee - 500))} kcal</p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="font-semibold">Weight gain target</p>
                <p>{formatCalories(tdee + 300)} kcal</p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="font-semibold">Total tracked food calories</p>
                <p>{formatCalories(totalFoodCalories)} kcal</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Suggested meal ideas</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              {mealSuggestions.map((suggestion) => (
                <li key={suggestion} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Exercise suggestions</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              {exerciseSuggestions.map((suggestion) => (
                <li key={suggestion} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-4">How the app works</h3>
        <p className="text-sm leading-relaxed text-slate-600">
          This app estimates daily calorie needs using a standard formula for basal metabolic rate and multiplies it by your activity level to get the total daily energy expenditure.
          It also estimates food calories using a simple lookup table for common foods and quantities. Use the numbers as a guide, and consult a professional for a personalized nutrition plan.
        </p>
      </div>
    </div>
  );
}
