import Link from "next/link";
import { HomeHero } from "@/components/HomeHero";
import { TitleBanner } from "@/components/TitleBanner";
import { UnionUpdate } from "@/components/UnionUpdate";
import { UpdatesSignup } from "@/components/UpdatesSignup";
import { externalLinks } from "@/lib/site";

const resourceCards = [
  {
    eyebrow: "FEATURED RESOURCE",
    title: "OUR LINKTREE",
    body: "FIND ALL OF OUR RESOURCES RIGHT AT YOUR FINGERTIPS",
    link: "CLICK FOR OUR LINKTREE!",
    href: externalLinks.linktree,
    card: "bg-black border-white",
    eyebrowColor: "text-blue",
    titleColor: "text-white",
    bodyColor: "text-white",
    divider: "bg-white",
    linkColor: "text-white",
  },
  {
    eyebrow: "MEMBER SUPPORT",
    title: "QUESTIONS, OR CONCERNS?",
    body: "REACH OUT TO US DIRECTLY",
    link: "CONTACT YOUR UNION →",
    href: "/contact",
    card: "bg-purple border-ink",
    eyebrowColor: "text-snow",
    titleColor: "text-white",
    bodyColor: "text-ink",
    divider: "bg-ink",
    linkColor: "text-white",
  },
  {
    eyebrow: "GET INVOLVED",
    title: "STRONGER WORKFORCE. STRONGER CARE.",
    body: "ASK PPMM LEADERSHIP TO INVEST IN THE WORKERS WHO CARRY OUT THE MISSION.",
    link: "JOIN THE MEMBER ACTION TEAM →",
    href: externalLinks.memberActionTeam,
    card: "bg-yellow border-ink",
    eyebrowColor: "text-ink",
    titleColor: "text-purple",
    bodyColor: "text-ink",
    divider: "bg-ink",
    linkColor: "text-ink",
  },
];

export default function HomePage() {
  return (
    <>
      <div className="h-1 w-full rounded-full bg-pink" />
      <div className="pt-4 md:pt-6">
        <HomeHero />
      </div>

      <div className="mx-auto flex max-w-[1440px] flex-col px-5 pt-8 pb-24 md:px-10 md:pt-10">
        <section aria-labelledby="union-updates">
          <TitleBanner>
            <span id="union-updates">UNION UPDATES</span>
          </TitleBanner>
          <UnionUpdate />
        </section>

        <div className="mt-16">
          <UpdatesSignup />
        </div>

        <section aria-labelledby="resources" className="mt-24 flex flex-col gap-6">
          <h2 id="resources" className="text-[clamp(34px,5vw,60px)] leading-tight font-black text-purple">
            RESOURCES AND WAYS TO CONNECT
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {resourceCards.map((card) => {
              const isInternal = card.href.startsWith("/");
              const Wrapper = isInternal ? Link : "a";
              return (
                <Wrapper
                  key={card.title}
                  href={card.href}
                  {...(isInternal ? {} : { target: "_blank", rel: "noreferrer" })}
                  className={`flex min-h-[380px] flex-col gap-[18px] rounded-[20px] border-3 p-6 transition-transform hover:-translate-y-1 ${card.card}`}
                >
                  <p className={`text-[23px] font-extrabold ${card.eyebrowColor}`}>{card.eyebrow}</p>
                  <p className={`text-[29px] font-extrabold ${card.titleColor}`}>{card.title}</p>
                  <p className={`text-base leading-[1.4] font-bold ${card.bodyColor}`}>{card.body}</p>
                  <div className={`h-[3px] w-full ${card.divider}`} />
                  <p className={`text-xl font-extrabold ${card.linkColor}`}>{card.link}</p>
                </Wrapper>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
