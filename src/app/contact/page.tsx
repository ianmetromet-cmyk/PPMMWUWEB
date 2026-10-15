import type { Metadata } from "next";
import featuredPhoto from "@/assets/news/featured-photo.png";
import groupPhoto from "@/assets/voices/group-photo.png";
import { ContactForm } from "@/components/ContactForm";
import { PillLink } from "@/components/PillLink";
import { type Voice, VoicesGallery } from "@/components/VoicesGallery";
import { externalLinks } from "@/lib/site";

export const metadata: Metadata = { title: "Contact Us" };

const voices: Voice[] = [
  {
    label: "VOICE 01",
    title: "Member story",
    image: groupPhoto,
    imageAlt: "PPMM Workers United members raising their fists together",
    imageFit: "contain",
    quote: "Quote placeholder — insert member story here.",
    memberName: "Member name placeholder",
    worksite: "Worksite / role placeholder",
  },
  {
    label: "VOICE 02",
    title: "Member story",
    image: featuredPhoto,
    imageAlt: "Two PPMM Workers United members smiling",
    imageFit: "cover",
    quote: "Quote placeholder — insert member story here.",
    memberName: "Member name placeholder",
    worksite: "Worksite / role placeholder",
  },
  {
    label: "VOICE 03",
    title: "Member story",
    image: featuredPhoto,
    imageAlt: "Two PPMM Workers United members smiling",
    imageFit: "cover",
    quote: "Quote placeholder — insert member story here.",
    memberName: "Member name placeholder",
    worksite: "Worksite / role placeholder",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto flex max-w-[1440px] flex-col px-5 pt-12 pb-24 md:px-[72px]">
      <h1 className="text-[clamp(36px,4.5vw,52px)] font-black">HOW CAN WE HELP?</h1>

      <section
        aria-label="Send a message"
        className="mt-10 flex flex-col gap-10 rounded-[24px] bg-ink p-6 md:p-10 lg:flex-row lg:gap-12"
      >
        <div className="flex flex-col gap-[18px] lg:w-[400px] lg:shrink-0">
          <p className="text-lg font-black text-pink">SEND A MESSAGE</p>
          <h2 className="text-[clamp(34px,4vw,46px)] leading-none font-black text-gold">
            YOUR MESSAGE GOES TO OUR UNION.
          </h2>
          <p className="text-lg leading-normal font-bold text-white">
            Choose the topic that best fits. Share only the information you are comfortable providing.
          </p>
        </div>
        <ContactForm />
      </section>

      <section aria-labelledby="our-voices" className="mt-24 flex flex-col gap-10">
        <h2 id="our-voices" className="text-[clamp(40px,5.5vw,63px)] font-black text-purple">
          OUR VOICES
        </h2>
        <VoicesGallery voices={voices} />
      </section>

      <aside className="mt-24 flex flex-col gap-6 rounded-[24px] bg-ink p-7 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-[760px] flex-col gap-2.5">
          <p className="text-2xl font-extrabold text-cream md:text-[32px]">Ready to build power with coworkers?</p>
          <p className="text-lg leading-[1.4] font-bold text-white">
            Join the Member Action Team to share updates, connect your worksite, and prepare for collective action.
          </p>
        </div>
        <PillLink href={externalLinks.memberActionTeam} className="self-start px-5 lg:self-auto" textSize="text-lg">
          JOIN THE MEMBER ACTION TEAM →
        </PillLink>
      </aside>
    </div>
  );
}
