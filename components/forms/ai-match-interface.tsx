"use client";

import { RetreatCard } from "@/components/retreats/retreat-card";
import { retreats } from "@/lib/data/retreats";
import { Retreat } from "@/lib/types";
import { Sparkles, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

type Answers = {
  burnout: number;
  budget: string;
  group: string;
  transformation: string;
  energy: string;
  luxury: string;
  social: number;
  medical: string;
};

const initial: Answers = {
  burnout: 3,
  budget: "$1,500–$2,000",
  group: "Solo",
  transformation: "Deep rest",
  energy: "Gentle flow",
  luxury: "Boutique quality",
  social: 3,
  medical: "None",
};

type Step = {
  question: string;
  key: keyof Answers;
  type: "scale" | "choice";
  labels?: string[];
  options?: string[];
};

const steps: Step[] = [
  {
    question: "How burned out are you right now?",
    key: "burnout",
    type: "scale",
    labels: ["Fine", "Slightly tired", "Noticeably stressed", "Running on empty", "Completely depleted"],
  },
  {
    question: "What's your budget per person?",
    key: "budget",
    type: "choice",
    options: ["Under $1,500", "$1,500–$2,000", "$2,000–$3,000", "Over $3,000"],
  },
  {
    question: "Who are you traveling with?",
    key: "group",
    type: "choice",
    options: ["Solo", "Couple", "Small group", "Friends"],
  },
  {
    question: "What transformation are you seeking?",
    key: "transformation",
    type: "choice",
    options: ["Deep rest", "Emotional healing", "Physical reset", "Creative spark", "Relationship reconnection", "Career clarity"],
  },
  {
    question: "What's your energy preference?",
    key: "energy",
    type: "choice",
    options: ["Silent sanctuary", "Gentle flow", "Active adventure", "Social connection"],
  },
  {
    question: "How important is luxury?",
    key: "luxury",
    type: "choice",
    options: ["Comfort matters", "Boutique quality", "Premium everything", "Ultra-luxury only"],
  },
  {
    question: "Do you prefer social or quiet?",
    key: "social",
    type: "scale",
    labels: ["Completely quiet", "Mostly quiet", "Mix of both", "Mostly social", "Very social"],
  },
  {
    question: "Any medical wellness interest?",
    key: "medical",
    type: "choice",
    options: ["None", "Hormone balance", "Burnout recovery", "Sleep optimization", "Digestive reset", "Longevity protocols"],
  },
];

function scoreRetreat(retreat: Retreat, answers: Answers): number {
  let score = 0;
  const ws = retreat.wellnessScores;

  const burnoutLevel = answers.burnout;
  if (burnoutLevel >= 4) {
    score += ws.calm * 0.8 + ws.transformation * 0.6 + ws.sleepRecovery * 0.6;
  } else if (burnoutLevel >= 2) {
    score += ws.calm * 0.4 + ws.transformation * 0.4;
  } else {
    score += ws.socialEnergy * 0.4;
  }

  const budgetMatch =
    (answers.budget === "Under $1,500" && retreat.price <= 1500) ||
    (answers.budget === "$1,500\u2013$2,000" && retreat.price > 1500 && retreat.price <= 2000) ||
    (answers.budget === "$2,000\u2013$3,000" && retreat.price > 2000 && retreat.price <= 3000) ||
    (answers.budget === "Over $3,000" && retreat.price > 3000);
  if (budgetMatch) score += 15;

  if (answers.group === "Solo" && retreat.suitableFor.some((s) => s.toLowerCase().includes("solo"))) score += 10;
  if (answers.group === "Couple" && retreat.suitableFor.some((s) => s.toLowerCase().includes("couple"))) score += 10;
  if (answers.group === "Small group" && retreat.suitableFor.includes("All levels")) score += 5;

  if (answers.transformation === "Deep rest") score += ws.calm + ws.sleepRecovery;
  if (answers.transformation === "Emotional healing") score += ws.transformation * 1.5;
  if (answers.transformation === "Physical reset") score += ws.detoxDepth * 1.5;
  if (answers.transformation === "Creative spark") score += ws.socialEnergy;
  if (answers.transformation === "Relationship reconnection" && retreat.suitableFor.some((s) => s.toLowerCase().includes("couple"))) score += 15;
  if (answers.transformation === "Career clarity" && retreat.fitTags.some((t) => t.toLowerCase().includes("executive"))) score += 15;

  if (answers.energy === "Silent sanctuary") score += ws.calm * 1.2;
  if (answers.energy === "Gentle flow") score += (ws.calm + ws.sleepRecovery) * 0.6;
  if (answers.energy === "Active adventure") score += retreat.tags.some((t) => t.includes("surf")) ? 15 : ws.socialEnergy * 0.5;
  if (answers.energy === "Social connection") score += ws.socialEnergy * 1.2;

  if (answers.luxury === "Boutique quality" && ws.luxury >= 6) score += 10;
  if (answers.luxury === "Premium everything" && ws.luxury >= 8) score += 15;
  if (answers.luxury === "Ultra-luxury only" && ws.luxury === 10) score += 20;

  const socialLevel = answers.social;
  const diff = Math.abs(ws.socialEnergy - socialLevel * 2);
  score += Math.max(0, 10 - diff);

  if (answers.medical === "Hormone balance" && retreat.wellnessExtras.some((e) => e.toLowerCase().includes("hormone"))) score += 15;
  if (answers.medical === "Burnout recovery") score += retreat.fitTags.some((t) => t.toLowerCase().includes("burnout")) ? 15 : ws.transformation * 0.5;
  if (answers.medical === "Sleep optimization") score += ws.sleepRecovery * 1.5;
  if (answers.medical === "Digestive reset") score += ws.detoxDepth * 1.2;
  if (answers.medical === "Longevity protocols" && retreat.wellnessExtras.some((e) => e.toLowerCase().includes("infra"))) score += 15;

  return score;
}

function toMatchPct(raw: number): number {
  const clamped = Math.min(Math.max(raw, 0), 200);
  return Math.round(60 + (clamped / 200) * 39);
}

function buildProfile(answers: Answers): string {
  const burnoutLabels = ["feeling balanced", "slightly fatigued", "noticeably stressed", "running on empty", "deeply depleted"];
  const burnoutDesc = burnoutLabels[answers.burnout - 1] ?? "stressed";
  const groupDesc = answers.group === "Solo" ? "traveling solo" : `going as a ${answers.group.toLowerCase()}`;
  return `You're currently ${burnoutDesc}, ${groupDesc}, and seeking ${answers.transformation.toLowerCase()}. ${answers.energy} suits your rhythm right now.`;
}

export function AIMatchInterface() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initial);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<{ retreat: Retreat; pct: number }[] | null>(null);

  const currentStep = steps[step];
  const isLast = step === steps.length - 1;

  const handleChoice = (key: keyof Answers, value: string | number) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const next = () => {
    if (isLast) {
      setLoading(true);
      setTimeout(() => {
        const scored = retreats
          .map((r) => ({ retreat: r, raw: scoreRetreat(r, answers) }))
          .sort((a, b) => b.raw - a.raw)
          .slice(0, 3)
          .map(({ retreat, raw }) => ({ retreat, pct: toMatchPct(raw) }));
        setResults(scored);
        setLoading(false);
      }, 1500);
    } else {
      setStep((s) => s + 1);
    }
  };

  const prev = () => setStep((s) => Math.max(0, s - 1));
  const restart = () => { setStep(0); setAnswers(initial); setResults(null); };

  if (loading) {
    return (
      <div className="rounded-3xl border border-stone-200 bg-white p-10 text-center space-y-4">
        <Sparkles size={32} className="mx-auto text-stone-400 animate-pulse" />
        <p className="text-lg font-medium text-stone-800">Analysing your wellness profile&hellip;</p>
        <p className="text-sm text-stone-500">Matching across 12 curated retreats.</p>
      </div>
    );
  }

  if (results) {
    const profile = buildProfile(answers);
    return (
      <div className="space-y-8">
        <div className="rounded-3xl border border-stone-200 bg-white p-6 space-y-3">
          <p className="text-xs uppercase tracking-[0.22em] text-stone-500">Your Wellness Profile</p>
          <p className="text-stone-800 leading-relaxed">{profile}</p>
          <button onClick={restart} className="text-sm text-stone-500 hover:text-stone-700 underline">
            Retake quiz
          </button>
        </div>
        <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Best matches for you</p>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {results.map(({ retreat, pct }) => (
            <div key={retreat.id} className="relative">
              <div className="absolute -top-3 left-4 z-10 rounded-full bg-stone-900 px-3 py-1 text-xs font-bold text-white">
                {pct}% match
              </div>
              <RetreatCard retreat={retreat} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <section className="space-y-8">
      <div className="rounded-3xl border border-stone-200 bg-white p-6 space-y-6">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles size={18} className="text-stone-600" />
          <p className="font-medium text-stone-900">AI Wellness Match</p>
          <span className="ml-auto text-xs text-stone-500">{step + 1} / {steps.length}</span>
        </div>

        <div className="h-1.5 w-full overflow-hidden rounded-full bg-stone-100">
          <div
            className="h-1.5 rounded-full bg-stone-800 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-stone-900">{currentStep.question}</h2>

          {currentStep.type === "choice" && currentStep.options && (
            <div className="flex flex-wrap gap-2">
              {currentStep.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleChoice(currentStep.key, opt)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    answers[currentStep.key] === opt
                      ? "border-stone-800 bg-stone-900 text-white"
                      : "border-stone-300 text-stone-700 hover:border-stone-500"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}

          {currentStep.type === "scale" && currentStep.labels && (
            <div className="space-y-3">
              <div className="flex gap-2">
                {currentStep.labels.map((label, i) => (
                  <button
                    key={label}
                    onClick={() => handleChoice(currentStep.key, i + 1)}
                    className={`flex-1 rounded-2xl border py-3 text-xs text-center transition ${
                      answers[currentStep.key] === i + 1
                        ? "border-stone-800 bg-stone-900 text-white"
                        : "border-stone-200 text-stone-600 hover:border-stone-400"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-xs text-stone-400">
                <span>{currentStep.labels[0]}</span>
                <span>{currentStep.labels[currentStep.labels.length - 1]}</span>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between pt-2">
          <button
            onClick={prev}
            disabled={step === 0}
            className="flex items-center gap-1 rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-700 transition hover:bg-stone-100 disabled:opacity-30"
          >
            <ChevronLeft size={16} /> Back
          </button>
          <button
            onClick={next}
            className="flex items-center gap-1 rounded-full bg-stone-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-stone-700"
          >
            {isLast ? "Find My Match" : "Next"} <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
