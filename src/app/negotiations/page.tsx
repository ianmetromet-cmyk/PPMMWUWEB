import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import josefinaRodriguez from "@/assets/team/josefina-rodriguez.png";
import { PillLink } from "@/components/PillLink";
import { externalLinks } from "@/lib/site";

export const metadata: Metadata = { title: "2026 Negotiations" };

const quote = {
  memberName: "Josefina Rodriguez",
  role: "HSS II, Fulton",
  team: "PPMMWU Bargaining Team Member",
  text: "I do this work for all the individuals who sit in a Planned Parenthood waiting room, pregnant, scared, and uncertain about the future. Someone was there for me without judgment. Every patient deserves compassion, dignity, and someone they can trust. The mission runs on us.",
};

export default function NegotiationsPage() {
  return (
    <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-16 md:px-[72px]">
      <header className="flex flex-col gap-4">
        <p className="text-lg font-black text-pink">OPEN BARGAINING · CAMPAIGN KICKOFF</p>
        <h1 className="text-[clamp(38px,5vw,54px)] leading-[0.98] font-black text-purple">2026 NEGOTIATIONS</h1>
        <p className="max-w-[760px] text-lg leading-[1.35] font-extrabold md:text-2xl">
          We believe in the mission. We’re advocating for the people who carry it out. If PPMM leadership values
          reproductive healthcare, this contract is how they invest in the workers who provide it.
        </p>
      </header>

      <section aria-labelledby="bargaining-voice" className="flex flex-col gap-6">
        <h2 id="bargaining-voice" className="text-[clamp(26px,3.2vw,42px)] font-black text-purple">
          A VOICE FROM YOUR BARGAINING TEAM
        </h2>
        <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(280px,420px)_1fr]">
          <div className="overflow-hidden rounded-[24px] bg-purple">
            <Image
              src={josefinaRodriguez}
              alt="Portrait of Josefina Rodriguez"
              sizes="(min-width: 1024px) 420px, 100vw"
              className="h-auto w-full"
            />
          </div>
          <figure className="flex flex-col justify-between gap-6 rounded-[24px] bg-ink p-6 md:p-10">
            <p className="text-xs font-extrabold tracking-wide text-gold">QUOTE</p>
            <blockquote className="text-[clamp(18px,2vw,26px)] leading-[1.35] font-extrabold text-cream">
              “{quote.text}”
            </blockquote>
            <figcaption className="flex flex-col gap-1">
              <p className="text-xl font-black text-yellow">{quote.memberName}</p>
              <p className="text-base font-bold text-white">{quote.role}</p>
              <p className="text-base font-bold text-white/80">{quote.team}</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <aside className="flex flex-col gap-6 rounded-[24px] bg-ink p-7 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-[760px] flex-col gap-2.5">
          <p className="text-2xl font-extrabold text-cream md:text-[32px]">
            PPMM leadership can strengthen the mission at the table.
          </p>
          <p className="text-lg leading-[1.4] font-bold text-white">
            Open bargaining is a place to listen, bargain, and invest in the workforce. RSVP for the kickoff and
            stand with the team carrying that message.
          </p>
          <Link href="/about#bargaining-team" className="text-base font-extrabold text-gold hover:underline">
            Meet the full bargaining team →
          </Link>
        </div>
        <PillLink
          href={externalLinks.openBargainingRsvp}
          withArrow
          textSize="text-sm md:text-xl"
          className="shrink-0 self-start px-5 whitespace-nowrap lg:self-auto"
        >
          RSVP FOR OPEN BARGAINING
        </PillLink>
      </aside>
    </div>
  );
}
