import type { Metadata } from "next";
import Image from "next/image";
import doloresHuerta from "@/assets/negotiations/dolores-huerta.png";
import zoomBackground from "@/assets/negotiations/zoom-background.jpg";
import teamPortrait05 from "@/assets/team/t05.png";
import { KickoffSignupButton } from "@/components/KickoffSignupButton";
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

      <section aria-label="Zoom background" className="mx-auto mt-5 max-w-[1440px] px-5 md:mt-8 md:px-[72px]">
        <div className="grid items-center gap-6 rounded-[28px] bg-ink p-6 text-cream md:gap-8 md:p-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)] lg:gap-12">
          <Image
            src={zoomBackground}
            alt="PPMMWU 2027 Negotiations Zoom background. I stand with my PPMMWU Bargaining Team!"
            sizes="(min-width: 1024px) 860px, 100vw"
            className="h-auto w-full rounded-[18px]"
          />
          <div className="flex flex-col items-start gap-5">
            <h2 className="text-xl leading-tight font-black tracking-[0.03em] text-yellow md:text-2xl">
              ZOOM BACKGROUND
            </h2>
            <p className="text-xl leading-snug font-extrabold md:text-2xl">
              Download this background for the Virtual Campaign Kickoff and open bargaining.
            </p>
            <PillLink
              href={externalLinks.zoomBackground}
              withArrow
              textSize="text-base md:text-lg"
              textColor="text-purple-deep"
              className="w-full justify-center px-6 text-center text-balance lg:w-auto"
            >
              DOWNLOAD ZOOM BACKGROUND
            </PillLink>
          </div>
        </div>
      </section>

      <section className="mt-10 bg-yellow md:mt-14">
        <div className="mx-auto max-w-[1440px] px-5 py-12 md:px-[72px] md:py-16">
          <blockquote className="max-w-[65ch] text-2xl leading-snug font-extrabold text-ink md:text-[32px]">
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
          <KickoffSignupButton />
        </div>
      </section>

      <section
        aria-label="In memory of Dolores Huerta"
        className="bg-[linear-gradient(180deg,#f7f2ea_0%,#f8ecd0_40%,#f6e6ee_72%,#e7e0f4_100%)]"
      >
        <div className="mx-auto flex max-w-[1440px] flex-col items-center px-5 py-14 md:px-[72px] md:py-20">
          <figure className="flex w-full max-w-[640px] flex-col items-center gap-8">
            <div className="relative w-full">
              <div className="absolute -bottom-3 -left-3 h-full w-full rounded-[24px] bg-[#f0c846]" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[24px] bg-[#f7f2ea]">
                <Image
                  src={doloresHuerta}
                  alt="Dolores Huerta. Celebrate People’s History. ¡Sí se puede! A heart, a stethoscope, and a medical cross sit below the portrait."
                  sizes="(min-width: 768px) 640px, 100vw"
                  className="h-auto w-full"
                />
              </div>
            </div>
            <figcaption className="flex flex-col items-center gap-3 text-center">
              <p className="text-[clamp(44px,7vw,80px)] leading-none font-black tracking-tight text-[#3c3278]">
                1930 - 2026
              </p>
              <p className="text-[clamp(32px,4.6vw,56px)] leading-none font-black text-[#3c3278]">
                Rest in Power
              </p>
            </figcaption>
          </figure>
          <div className="mt-10 flex w-full max-w-[68ch] flex-col gap-5 text-left text-[15pt] leading-relaxed font-medium text-ink md:mt-12">
            <p>We pause to honor the extraordinary life of Dolores Huerta, who passed away on October 28 at the age of 96.</p>
            <p>
              A pioneering labor organizer and co-founder of the United Farm Workers, Dolores’s legacy survives through her impact which continues to change the world by inspiring generations of workers to organize together.
            </p>
            <p>
              Her enduring call, “¡Sí, se puede!”, rests in our empowered consent and collective unity to make change real. As we begin this exciting chapter, we exude her spirit of solidarity, carry forward our focused determination and worker power that helped us form our union.
            </p>
            <p className="font-black">Rest in power, Dolores.</p>
          </div>
        </div>
      </section>
    </>
  );
}
