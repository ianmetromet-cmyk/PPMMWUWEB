import type { Metadata } from "next";
import { BargainingTeam } from "@/components/BargainingTeam";
import { PrioritiesPanel } from "@/components/PrioritiesPanel";

export const metadata: Metadata = { title: "About", robots: "noindex, noimageindex, follow" };

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-16 md:px-[72px]">
      <h1 className="text-[clamp(38px,5vw,54px)] leading-[0.98] font-black text-purple">ABOUT OUR UNION</h1>

      <section aria-labelledby="bargaining-team" className="flex flex-col gap-10">
        <h2 id="bargaining-team" className="text-[clamp(26px,3.2vw,42px)] font-black text-purple">
          MEET YOUR 2026 PPMMWU BARGAINING TEAM
        </h2>
        <BargainingTeam />
      </section>

      <PrioritiesPanel />
    </div>
  );
}
