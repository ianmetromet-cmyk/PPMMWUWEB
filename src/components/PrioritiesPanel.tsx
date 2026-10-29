import type { ReactNode } from "react";

type Priority = {
  stat: string;
  title: string;
  description: string;
  card: string;
  accent: string;
  icon: ReactNode;
};

const iconProps = { viewBox: "0 0 48 48", className: "size-12 shrink-0 md:size-14", "aria-hidden": true } as const;

const priorities: Priority[] = [
  {
    stat: "76%",
    title: "FAIR WAGES",
    description: "You cannot ask workers to sustain the mission on wages that do not sustain their communities.",
    card: "bg-purple/15",
    accent: "text-purple-deep",
    icon: (
      <svg {...iconProps} fill="currentColor">
        <ellipse cx="24" cy="10" rx="16" ry="6" />
        <path d="M8 16c0 3.3 7.2 6 16 6s16-2.7 16-6v6c0 3.3-7.2 6-16 6S8 25.3 8 22z" />
        <path d="M8 27c0 3.3 7.2 6 16 6s16-2.7 16-6v6c0 3.3-7.2 6-16 6S8 36.3 8 33z" />
        <path d="M8 38c0 3.3 7.2 6 16 6s16-2.7 16-6v1c0 3.3-7.2 6-16 6S8 42.3 8 39z" />
      </svg>
    ),
  },
  {
    stat: "90.1%",
    title: "JOB SECURITY",
    description: "Continuity of care starts with protecting experienced workers, including strong layoff and recall rights.",
    card: "bg-pink/15",
    accent: "text-pink",
    icon: (
      <svg {...iconProps}>
        <path d="M24 4 7 10v12c0 11 7.4 19.6 17 22 9.6-2.4 17-11 17-22V10z" fill="currentColor" />
        <path d="M24 9.5 12 14v8c0 8 5 14.6 12 16.8z" className="fill-ink" />
      </svg>
    ),
  },
  {
    stat: "83.4%",
    title: "JUST CAUSE",
    description: "Dignity and fairness should not stop at the clinic doors.",
    card: "bg-blue/15",
    accent: "text-blue",
    icon: (
      <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 6v34M14 42h20M8 12h32" />
        <path d="M12 12 5 26a7 7 0 0 0 14 0zM36 12l-7 14a7 7 0 0 0 14 0z" />
      </svg>
    ),
  },
  {
    stat: "77.3%",
    title: "STAFFING",
    description: "You cannot deliver the mission short-staffed. Adequate staffing means stronger care.",
    card: "bg-yellow/25",
    accent: "text-purple",
    icon: (
      <svg {...iconProps} fill="currentColor">
        <circle cx="24" cy="14" r="7" />
        <circle cx="10" cy="18" r="5" />
        <circle cx="38" cy="18" r="5" />
        <path d="M12 40c0-7.7 5.4-14 12-14s12 6.3 12 14z" />
        <path d="M2 38c0-5.5 3.6-10 8-10 1.6 0 3 .6 4.3 1.6A17 17 0 0 0 10 40H2zM46 38c0-5.5-3.6-10-8-10-1.6 0-3 .6-4.3 1.6A17 17 0 0 1 38 40h8z" />
      </svg>
    ),
  },
];

export function PrioritiesPanel() {
  return (
    <section aria-labelledby="priorities" className="flex flex-col gap-6">
      <h2 id="priorities" className="text-[clamp(26px,3.2vw,42px)] font-black text-purple">
        WHAT PPMM LEADERSHIP CAN DO TO LIVE THE MISSION
      </h2>
      <p className="max-w-[760px] text-lg leading-snug font-bold">
        Workers named these priorities. If PPMM leadership supports the community that carries out care, they
        strengthen the mission itself.
      </p>
      <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {priorities.map((item) => (
          <li key={item.title} className={`flex flex-col gap-3 rounded-[18px] p-6 ${item.card}`}>
            <p className={`text-[clamp(44px,4vw,56px)] leading-none font-black ${item.accent}`}>{item.stat}</p>
            <div className="flex flex-1 items-start gap-4">
              <span className={item.accent}>{item.icon}</span>
              <div className="flex flex-col gap-1">
                <h3 className={`text-xl font-black ${item.accent}`}>{item.title}</h3>
                <p className="text-base leading-snug font-semibold">{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p className="text-sm font-semibold text-muted">
        Based on survey information collected directly from PPMM workers in September 2026.
      </p>
    </section>
  );
}
