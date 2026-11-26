"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef, useState } from "react";
import aliyaCaler from "@/assets/team/aliya-caler.png";
import teamPortrait01 from "@/assets/team/t01.png";
import teamPortrait02 from "@/assets/team/t02.png";
import teamPortrait04 from "@/assets/team/t04.png";
import teamPortrait05 from "@/assets/team/t05.png";
import teamPortrait06 from "@/assets/team/t06.jpg";
import teamPortrait07 from "@/assets/team/t07.png";
import teamPortrait08 from "@/assets/team/t08.png";
import teamPortrait09 from "@/assets/team/t09.png";

type TeamMember = {
  id: string;
  nameImage?: string;
  name?: string;
  hiddenPhoto?: boolean;
  role: string;
  photo?: StaticImageData;
  quote?: string;
};

const team: TeamMember[] = [
  { id: "emmanuel-aglubat", nameImage: "/nameplates/n06-light.png", role: "Float Clinician III", photo: teamPortrait02 },
  {
    id: "luis-berber",
    name: "Luis Berber",
    nameImage: "/nameplates/n01-light.png",
    role: "HSS II",
    photo: teamPortrait07,
    quote:
      "Our proposals establish transparency in financial decisions that impact our livelihoods and meaningful protections to ensure we are placed internally in any available positions in the event of a mass layoff, well before outside candidates are offered our jobs.",
  },
  {
    id: "aliya-caler",
    name: "Aliya Caler",
    role: "Clinician II",
    photo: aliyaCaler,
    quote:
      "I believe in my coworkers and patients who deserve the same compassion and respect we dedicate to our shared mission of respectful care and a stronger workforce. When we are respected, valued and supported, we will only improve the quality of care for the communities that depend on us. The mission runs on us",
  },
  {
    id: "allison-chung",
    name: "Allison Chung",
    nameImage: "/nameplates/n04-light.png",
    role: "Clinician II",
    photo: teamPortrait01,
    quote:
      "I believe the people who care for our patients and communities deserve to be cared for, too. We organized because we wanted a voice in the decisions that affect our work, our families, and the care we provide. When we support one another, speak up for what’s right, and work toward a better future, we strengthen not only our workplace but the community we serve. Our collective voice gives us the opportunity to create a workplace where we can thrive and continue providing the care our patients deserve.",
  },
  {
    id: "isabel-elias",
    name: "Isabel Elias",
    nameImage: "/nameplates/n05-light.png",
    role: "Clinician III",
    photo: teamPortrait04,
    quote:
      "I believe in our union because transparency builds trust, and trust is essential in healthcare. As a clinician, I am committed to this mission because I believe deeply in the care we provide. Our union gives us a meaningful voice in decisions that affect our work, our coworkers, and our patients.",
  },
  {
    id: "laura-flores-galicia",
    name: "Laura Flores Galicia",
    nameImage: "/nameplates/n08-light.png",
    role: "RN",
    photo: teamPortrait06,
    quote:
      "It’s more important than ever to unite with our community and ensure that our employer realizes that we are human beings, who truly believe in our mission, before many more good people leave our team.",
  },
  {
    id: "ryah-issa",
    name: "Ryah Issa",
    nameImage: "/nameplates/n07-light.png",
    role: "RN/Clinician I",
    photo: teamPortrait09,
    quote:
      "I do this work because reproductive justice and access to quality care matter to our communities. To continue providing that care, we need safe, supportive, and sustainable working conditions, transparency from leadership, and a meaningful voice in workplace decisions.",
  },
  { id: "wendy-ramirez-orellana", name: "Wendy Ramirez-Orellana", role: "HSS II", hiddenPhoto: true },
  { id: "josefina-rodriguez", nameImage: "/nameplates/n02-light.png", role: "HSS II", photo: teamPortrait05 },
  { id: "rosio-rosillo", nameImage: "/nameplates/n03-light.png", role: "HSS II", photo: teamPortrait08 },
  { id: "veronica-torres-vargas", name: "Veronica Torres-Vargas", role: "HSS II", hiddenPhoto: true },
];

function TeamCard({ member, onOpen }: { member: TeamMember; onOpen?: () => void }) {
  const card = (
    <>
      {member.photo && !member.hiddenPhoto && (
        <Image
          src={member.photo}
          alt={member.name ? `${member.name} portrait` : "PPMMWU bargaining team member portrait"}
          sizes="(min-width: 1024px) 386px, (min-width: 640px) 50vw, 100vw"
          className="absolute inset-x-0 top-0 h-auto w-full"
        />
      )}
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-linear-to-t from-ink/85 via-ink/45 to-transparent px-5 pt-14 pb-4">
        <p className="text-xs leading-tight font-black text-cream">{member.role}</p>
        {member.nameImage ? (
          <img src={member.nameImage} alt="Bargaining team member name graphic" className="h-7 w-auto max-w-full object-contain object-left" />
        ) : (
          <p className="text-[22px] leading-none font-black text-white">{member.name}</p>
        )}
      </div>
    </>
  );

  if (!member.quote || !onOpen) {
    return (
      <li data-portrait-hidden={member.hiddenPhoto ? "true" : undefined} className="relative h-[320px] overflow-hidden rounded-[18px] bg-purple">
        {card}
      </li>
    );
  }

  return (
    <li data-portrait-hidden={member.hiddenPhoto ? "true" : undefined} className="relative h-[320px]">
      <button
        type="button"
        onClick={onOpen}
        aria-label={member.name ? `Read ${member.name}'s quote` : "Read worker quote"}
        className="relative h-full w-full cursor-pointer overflow-hidden rounded-[18px] border-0 bg-purple p-0 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow"
      >
        {card}
      </button>
    </li>
  );
}

export function BargainingTeam() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<TeamMember | null>(null);

  function open(member: TeamMember) {
    setActive(member);
    dialogRef.current?.showModal();
  }

  return (
    <>
      <ul className="grid gap-x-6 gap-y-7 rounded-[24px] bg-ink p-6 sm:grid-cols-2 md:pt-10 md:pr-[50px] md:pb-[92px] md:pl-10 lg:grid-cols-3">
        {team.map((member) => (
          <TeamCard key={member.id} member={member} onOpen={member.quote ? () => open(member) : undefined} />
        ))}
        <li className="flex h-[320px] items-center justify-center rounded-[18px] bg-purple p-6">
          <img src="/logo-mark.png" alt="PPMMWU" className="h-auto max-h-full w-[92%] object-contain" />
        </li>
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={active?.name ? `${active.name} quote` : "Worker quote"}
        onClick={(event) => event.target === dialogRef.current && dialogRef.current.close()}
        onClose={() => setActive(null)}
        className="m-auto max-h-[calc(100dvh-32px)] w-[min(1100px,calc(100vw-32px))] overflow-y-auto rounded-[28px] border-0 bg-ink p-0 text-cream shadow-[0px_24px_60px_0px_rgba(22,6,17,0.45)] backdrop:bg-ink/70"
      >
        {active?.quote && (
          <div className="flex flex-col gap-6 p-5 md:p-10">
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm font-black tracking-[0.14em] text-yellow uppercase">{active.role}</p>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="shrink-0 rounded-full bg-yellow px-4 py-2 text-sm font-black text-ink"
              >
                CLOSE ✕
              </button>
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:items-stretch">
              {active.photo && !active.hiddenPhoto && (
                <div className="relative mx-auto aspect-[4/5] w-[min(320px,100%)] shrink-0 self-center overflow-hidden rounded-[22px] bg-purple">
                  <Image
                    src={active.photo}
                    alt={active.name ? `${active.name} portrait` : "PPMMWU bargaining team member portrait"}
                    fill
                    sizes="320px"
                    className="object-cover object-center"
                  />
                </div>
              )}
              <figure className="flex min-w-0 flex-1 flex-col justify-center">
                <span aria-hidden="true" className="block text-[92px] leading-none font-black text-yellow md:text-[140px]">
                  “
                </span>
                <blockquote className="mt-1 text-[clamp(22px,3vw,40px)] leading-[1.12] font-black text-cream">
                  {active.quote}
                </blockquote>
                <figcaption className="mt-6 text-[clamp(22px,2vw,28px)] leading-none font-black text-yellow">
                  {active.name}
                </figcaption>
              </figure>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
