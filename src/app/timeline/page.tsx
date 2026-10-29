import type { Metadata } from "next";

export const metadata: Metadata = { title: "Timeline" };

const timeline = [
  "In 2024, workers organized through in-person meetings outside clinics and peer-to-peer conversations, launching their authorization card campaign in October.",
  "Support continued to grow in 2025, when workers went public in June and, amid the closure of five clinics that July, called for a stronger voice in decisions affecting their jobs and patients. In October, workers and supporters including elected officials and community leaders called on PPMM to agree to neutrality.",
  "PPMM leadership publicly acknowledged workers’ efforts to form a union. On March 25, 2026, PPMM and PPMM Workers United reached a neutrality agreement, allowing union organizers into clinic breakrooms beginning April 1. Voting began May 11, and on May 20, 2026, PPMM Workers United won its union election.",
  "Workers kept showing up for patients through those closures and changes. PPMM leadership now has the responsibility, and the opportunity, to sustain the workforce and the mission.",
];

export default function TimelinePage() {
  return (
    <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-16 md:px-[72px]">
      <h1 className="text-[clamp(38px,5vw,54px)] leading-[0.98] font-black text-purple">TIMELINE</h1>
      <div className="flex flex-col gap-[1.25em] text-lg leading-[1.25] font-extrabold md:text-2xl">
        {timeline.map((text) => (
          <p key={text.slice(0, 24)}>{text}</p>
        ))}
      </div>
    </div>
  );
}
