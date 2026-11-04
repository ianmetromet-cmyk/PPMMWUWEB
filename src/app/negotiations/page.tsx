import type { Metadata } from "next";
import Image from "next/image";
import teamPortrait05 from "@/assets/team/t05.png";
import { PillLink } from "@/components/PillLink";
import { externalLinks } from "@/lib/site";

export const metadata: Metadata = { title: "2027 Negotiations" };

const member = {
  nameImage: "/nameplates/n02-purple.png",
  role: "HSS II, Fulton",
  team: "PPMMWU Bargaining Team Member",
};

const preparationQuote =
  "A strong contract starts with an organized membership. Every conversation, every voice, and every action brings us closer to winning the wages, protections, and working conditions we deserve.";

function EventPanel({
  title,
  date,
  message,
  action,
  href,
  surface,
}: {
  title: string;
  date: string;
  message: string;
  action: string;
  href: string;
  surface: "bg-purple" | "bg-purple-deep";
}) {
  return (
    <article className={`flex h-full flex-col justify-between gap-8 rounded-[28px] p-8 md:p-10 lg:p-12 ${surface}`}>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl leading-tight font-black tracking-[0.03em] text-yellow md:text-2xl">{title}</h2>
        <p className="text-xl font-black text-cream md:text-2xl">{date}</p>
        <p className="max-w-[36ch] text-xl leading-snug font-extrabold text-cream md:text-2xl">{message}</p>
      </div>
      <PillLink
        href={href}
        withArrow
        textSize="text-base md:text-lg"
        textColor="text-purple-deep"
        className="w-full justify-center px-6 text-center text-balance"
      >
        {action}
      </PillLink>
    </article>
  );
}

export default function NegotiationsPage() {
  return (
    <>
      <header className="mx-auto max-w-[1440px] px-5 pt-10 md:px-[72px] md:pt-16">
        <h1 className="text-[clamp(40px,5.5vw,64px)] leading-[0.98] font-black">
          <span className="text-ink">Get Ready for </span>
          <span className="text-purple">2027 Negotiations!</span>
          <br />
          <span className="mt-2 inline-block bg-yellow px-2 text-purple-deep">Register Now!</span>
        </h1>
      </header>

      <section aria-label="Upcoming events" className="mx-auto mt-8 grid max-w-[1440px] gap-5 px-5 md:mt-12 md:gap-8 md:px-[72px] lg:grid-cols-2">
        <EventPanel
          surface="bg-purple"
          title="VIRTUAL CAMPAIGN KICKOFF"
          date="November 18 @7:00 PM"
          message="Join our union elected leadership and demonstrate our solidarity!"
          action="VIRTUAL CAMPAIGN KICKOFF RSVP"
          href={externalLinks.virtualKickoffRsvp}
        />
        <EventPanel
          surface="bg-purple-deep"
          title="OPEN BARGAINING"
          date="November 19 @7:00 PM"
          message="Register for open bargaining now! Save your spot to support your bargaining team!"
          action="RSVP FOR OPEN BARGAINING"
          href={externalLinks.openBargainingRsvp}
        />
      </section>

      <section aria-label="Why it matters" className="mt-10 bg-yellow md:mt-14">
        <div className="mx-auto max-w-[1440px] px-5 py-12 md:px-[72px] md:py-16">
          <h2 className="text-sm font-black tracking-[0.08em] text-purple-deep md:text-base">WHY IT MATTERS</h2>
          <blockquote className="mt-4 max-w-[65ch] text-2xl leading-snug font-extrabold text-ink md:text-[32px]">
            “{preparationQuote}”
          </blockquote>
        </div>
      </section>

      <section aria-label="Membership message" className="mx-auto grid max-w-[1440px] items-center gap-8 px-5 py-12 md:px-[72px] md:py-16 lg:grid-cols-[minmax(300px,440px)_1fr] lg:gap-16">
        <figure className="flex w-full max-w-[340px] flex-col gap-4 lg:max-w-none">
          <div className="relative">
            <div className="absolute -bottom-3 -left-3 h-full w-full rounded-[24px] bg-yellow" />
            <div className="relative overflow-hidden rounded-[24px]">
              <Image
                src={teamPortrait05}
                alt="PPMMWU bargaining team member portrait"
                sizes="(min-width: 1024px) 440px, 340px"
                className="h-auto w-full"
              />
            </div>
          </div>
          <figcaption className="flex flex-col gap-1.5 pl-1">
            <img
              src={member.nameImage}
              alt="Bargaining team member name graphic"
              className="h-11 w-auto max-w-full object-contain object-left md:h-12"
            />
            <p className="text-lg font-bold text-ink md:text-xl">{member.role}</p>
            <p className="text-base font-bold text-muted md:text-lg">{member.team}</p>
          </figcaption>
        </figure>
        <div className="flex flex-col gap-3">
          <p className="max-w-[16ch] text-balance text-[clamp(36px,4.8vw,60px)] leading-[1.05] font-black text-purple">
            Join the Virtual Campaign Kickoff!
          </p>
          <p className="max-w-[16ch] text-balance text-[clamp(36px,4.8vw,60px)] leading-[1.05] font-black text-ink">
            Let’s come together to fulfill our mission!
          </p>
        </div>
      </section>
    </>
  );
}
