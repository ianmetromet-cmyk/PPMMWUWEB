import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import allisonChung from "@/assets/team/allison-chung.png";
import emmanuelAglubat from "@/assets/team/emmanuel-aglubat.png";
import hannahTunnell from "@/assets/team/hannah-tunnell.png";
import isabelElias from "@/assets/team/isabel-elias.png";
import josefinaRodriguez from "@/assets/team/josefina-rodriguez.png";
import lauraFloresGalicia from "@/assets/team/laura-flores-galicia.jpg";
import luisBerber from "@/assets/team/luis-berber.png";
import rosioRolliso from "@/assets/team/rosio-rolliso.png";
import ryahIssa from "@/assets/team/ryah-issa.png";
import { PrioritiesPanel } from "@/components/PrioritiesPanel";

export const metadata: Metadata = { title: "About" };

type TeamMember = {
  name: string;
  role: string;
  photo: StaticImageData;
};

const team: TeamMember[] = [
  { name: "Luis Berber", role: "HSS", photo: luisBerber },
  { name: "Josefina Rodriguez", role: "HSS", photo: josefinaRodriguez },
  { name: "Rosio Rolliso", role: "HSS", photo: rosioRolliso },
  { name: "Allison Chung", role: "Clinician", photo: allisonChung },
  { name: "Isabel Elias", role: "Clinician", photo: isabelElias },
  { name: "Emmanuel Aglubat", role: "HSS", photo: emmanuelAglubat },
  { name: "Ryah Issa", role: "RN", photo: ryahIssa },
  { name: "Laura Flores Galicia", role: "RN", photo: lauraFloresGalicia },
  { name: "Hannah Tunnell", role: "HSS", photo: hannahTunnell },
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <li className="relative h-[320px] overflow-hidden rounded-[18px] bg-purple">
      <Image
        src={member.photo}
        alt={`Portrait of ${member.name}`}
        sizes="(min-width: 1024px) 386px, (min-width: 640px) 50vw, 100vw"
        className="absolute inset-x-0 top-0 h-auto w-full"
      />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-linear-to-t from-ink/85 via-ink/45 to-transparent px-5 pt-14 pb-4">
        <p className="text-[11px] font-black text-cream opacity-80">{member.role}</p>
        <p className="text-[17px] font-bold text-white">{member.name}</p>
      </div>
    </li>
  );
}

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-16 md:px-[72px]">
      <h1 className="text-[clamp(38px,5vw,54px)] leading-[0.98] font-black text-purple">ABOUT OUR UNION</h1>

      <PrioritiesPanel />

      <section aria-labelledby="bargaining-team" className="flex flex-col gap-10">
        <h2 id="bargaining-team" className="text-[clamp(26px,3.2vw,42px)] font-black text-purple">
          MEET YOUR 2026 PPMMWU BARGAINING TEAM
        </h2>
        <ul className="grid gap-x-6 gap-y-7 rounded-[24px] bg-ink p-6 sm:grid-cols-2 md:pt-10 md:pr-[50px] md:pb-[92px] md:pl-10 lg:grid-cols-3">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </ul>
      </section>
    </div>
  );
}
