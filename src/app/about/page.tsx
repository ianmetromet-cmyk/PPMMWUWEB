import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import teamPortrait01 from "@/assets/team/t01.png";
import teamPortrait02 from "@/assets/team/t02.png";
import teamPortrait03 from "@/assets/team/t03.png";
import teamPortrait04 from "@/assets/team/t04.png";
import teamPortrait05 from "@/assets/team/t05.png";
import teamPortrait06 from "@/assets/team/t06.jpg";
import teamPortrait07 from "@/assets/team/t07.png";
import teamPortrait08 from "@/assets/team/t08.png";
import teamPortrait09 from "@/assets/team/t09.png";
import { PrioritiesPanel } from "@/components/PrioritiesPanel";

export const metadata: Metadata = { title: "About", robots: "noindex, noimageindex, follow" };

type TeamMember = {
  nameImage: string;
  hiddenPhoto?: boolean;
  role: string;
  photo: StaticImageData;
};

const team: TeamMember[] = [
  { nameImage: "/nameplates/n01-light.png", role: "HSS", photo: teamPortrait07 },
  { nameImage: "/nameplates/n02-light.png", role: "HSS", photo: teamPortrait05 },
  { nameImage: "/nameplates/n03-light.png", role: "HSS", photo: teamPortrait08 },
  { nameImage: "/nameplates/n04-light.png", role: "Clinician", photo: teamPortrait01 },
  { nameImage: "/nameplates/n05-light.png", role: "Clinician", photo: teamPortrait04 },
  { nameImage: "/nameplates/n06-light.png", role: "HSS", photo: teamPortrait02 },
  { nameImage: "/nameplates/n07-light.png", role: "RN", photo: teamPortrait09 },
  { nameImage: "/nameplates/n08-light.png", role: "RN", photo: teamPortrait06 },
  { nameImage: "/nameplates/n09-light.png", role: "HSS", photo: teamPortrait03, hiddenPhoto: true },
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <li data-portrait-hidden={member.hiddenPhoto ? "true" : undefined} className="relative h-[320px] overflow-hidden rounded-[18px] bg-purple">
      {!member.hiddenPhoto && (
      <Image
        src={member.photo}
        alt="PPMMWU bargaining team member portrait"
        sizes="(min-width: 1024px) 386px, (min-width: 640px) 50vw, 100vw"
        className="absolute inset-x-0 top-0 h-auto w-full"
      />
      )}
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-linear-to-t from-ink/85 via-ink/45 to-transparent px-5 pt-14 pb-4">
        <p className="text-[11px] font-black text-cream opacity-80">{member.role}</p>
        <img src={member.nameImage} alt="Bargaining team member name graphic" className="h-7 w-auto max-w-full object-contain object-left" />
      </div>
    </li>
  );
}

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-16 md:px-[72px]">
      <h1 className="text-[clamp(38px,5vw,54px)] leading-[0.98] font-black text-purple">ABOUT OUR UNION</h1>

      <section aria-labelledby="bargaining-team" className="flex flex-col gap-10">
        <h2 id="bargaining-team" className="text-[clamp(26px,3.2vw,42px)] font-black text-purple">
          MEET YOUR 2026 PPMMWU BARGAINING TEAM
        </h2>
        <ul className="grid gap-x-6 gap-y-7 rounded-[24px] bg-ink p-6 sm:grid-cols-2 md:pt-10 md:pr-[50px] md:pb-[92px] md:pl-10 lg:grid-cols-3">
          {team.map((member) => (
            <TeamCard key={member.nameImage} member={member} />
          ))}
        </ul>
      </section>

      <PrioritiesPanel />
    </div>
  );
}
