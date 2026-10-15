import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import allisonChung from "@/assets/team/allison-chung.png";
import emmanuelAglubat from "@/assets/team/emmanuel-aglubat.png";
import hannahTunnell from "@/assets/team/hannah-tunnell.png";
import isabelElias from "@/assets/team/isabel-elias.png";
import josefinaRodriguezName from "@/assets/team/josefina-rodriguez-name.png";
import josefinaRodriguez from "@/assets/team/josefina-rodriguez.png";
import lauraFloresGalicia from "@/assets/team/laura-flores-galicia.png";
import luisBerberName from "@/assets/team/luis-berber-name.png";
import luisBerber from "@/assets/team/luis-berber.png";
import rosioRolliso from "@/assets/team/rosio-rolliso.png";
import ryahIssa from "@/assets/team/ryah-issa.png";

export const metadata: Metadata = { title: "About" };

type TeamMember = {
  name: string;
  role: string;
  photo: StaticImageData;
  nameImage?: { src: StaticImageData; width: number };
};

const team: TeamMember[] = [
  { name: "Luis Berber", role: "HSS", photo: luisBerber, nameImage: { src: luisBerberName, width: 103 } },
  {
    name: "Josefina Rodriguez",
    role: "HSS",
    photo: josefinaRodriguez,
    nameImage: { src: josefinaRodriguezName, width: 175 },
  },
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
      <div className="absolute top-[196px] left-5 flex flex-col gap-1">
        <p className="text-[11px] font-black text-cream opacity-60">{member.role}</p>
        {member.nameImage ? (
          <Image
            src={member.nameImage.src}
            alt={member.name}
            style={{ width: member.nameImage.width, height: "auto" }}
          />
        ) : (
          <p className="text-[17px] font-bold text-white">{member.name}</p>
        )}
      </div>
    </li>
  );
}

const timeline = [
  "In 2024, workers organized through in-person meetings outside clinics and peer-to-peer conversations, launching their authorization card campaign in October.",
  "Support continued to grow in 2025, when workers went public in June and, amid the closure of five clinics that July, called for a stronger voice in decisions affecting their jobs and patients. In October, workers and supporters including elected officials and Dolores Huerta called on PPMM to agree to neutrality.",
  "CEO Stacy Cross publicly acknowledged workers’ efforts to form a union. On March 25, 2026, PPMM and PPMM Workers United reached a neutrality agreement, allowing union organizers into clinic breakrooms beginning April 1. Voting began May 11, and on May 20, 2026, PPMM Workers United won its union election.",
];

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
            <TeamCard key={member.name} member={member} />
          ))}
        </ul>
      </section>

      <section aria-labelledby="timeline" className="flex flex-col gap-10">
        <h2 id="timeline" className="text-[clamp(38px,5vw,54px)] leading-[0.98] font-black text-purple">
          TIMELINE
        </h2>
        <div className="flex flex-col gap-[1.25em] text-lg leading-[1.25] font-extrabold md:text-2xl">
          {timeline.map((text) => (
            <p key={text.slice(0, 24)}>{text}</p>
          ))}
        </div>
      </section>
    </div>
  );
}
