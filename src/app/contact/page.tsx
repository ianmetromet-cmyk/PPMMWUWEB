import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import teamPortrait01 from "@/assets/team/t01.png";
import teamPortrait05 from "@/assets/team/t05.png";
import teamPortrait06 from "@/assets/team/t06.jpg";
import teamPortrait09 from "@/assets/team/t09.png";
import voicePortrait01 from "@/assets/voices/v01.jpg";
import voicePortrait02 from "@/assets/voices/v02.jpg";
import voicePortrait03 from "@/assets/voices/v03.jpg";
import { ContactForm } from "@/components/ContactForm";
import { PillLink } from "@/components/PillLink";
import { type Voice, VoicesGallery } from "@/components/VoicesGallery";
import { externalLinks } from "@/lib/site";

export const metadata: Metadata = { title: "Contact Us", robots: "noindex, noimageindex, follow" };

function portrait(image: StaticImageData) {
  return { image, imageAlt: "PPMMWU worker portrait", imageFit: "portrait" } as const;
}

const voices: Voice[] = [
  {
    ...portrait(voicePortrait01),
    nameImage: "/nameplates/n10-purple.png",
    role: "Clinician, Oakland",
    team: "PPMMWU Member Action Team Member",
    quote:
      "I do this work for people in our communities who too often feel unheard, disrespected, or undervalued. Everyone deserves compassionate, judgment-free care and the freedom to make decisions about their own lives and futures. Our patients and coworkers deserve the same compassion and respect that drive our mission. When workers are respected, valued, and supported, we can provide stronger care and build a stronger future for the communities we serve. The mission runs on us.",
  },
  {
    ...portrait(teamPortrait09),
    nameImage: "/nameplates/n07-purple.png",
    role: "RN, San Jose Eastside",
    team: "PPMMWU Bargaining Team Member",
    quote:
      "Our community of workers and patients are seeking safe, and supportive working conditions, and transparency in leadership decisions. Our working conditions directly impact the care we provide. Our voice is crucial to strengthen and shape a stronger and sustainable future of Planned Parenthood Mar Monte Workers United run clinics: reproductive justice and access to quality health care matters!",
  },
  {
    ...portrait(teamPortrait05),
    nameImage: "/nameplates/n02-purple.png",
    role: "HSS II, Fulton",
    team: "PPMMWU Bargaining Team Member",
    quote:
      "I do this work for all the individuals who sit in a Planned Parenthood waiting room, pregnant, scared, and uncertain about the future. Someone was there for me without judgment. Every patient deserves compassion, dignity, and someone they can trust. The mission runs on us.",
  },
  {
    ...portrait(voicePortrait02),
    nameImage: "/nameplates/n11-purple.png",
    team: "PPMMWU Member Action Team",
    quote:
      "New hires at Planned Parenthood Mar Monte are routinely placed on the clinic floor without adequate training. Leadership decisions that impact staffing and constant turnover leave our community unprepared for critical responsibilities. When a young patient comes to us scared or facing an important, deeply personal healthcare decision, proper training and mentorship are essential to supporting our coworkers and protecting our patients. The mission runs on us.",
  },
  {
    ...portrait(teamPortrait01),
    nameImage: "/nameplates/n04-purple.png",
    role: "Clinician, Sacramento B St",
    team: "PPMMWU Bargaining Team Member",
    quote:
      "I do this work because it’s my livelihood, and like my coworkers, I deserve a job that provides stability and a future I can count on. Keeping our clinics strong means keeping experienced workers from leaving. We need fair compensation, manageable workloads, and working conditions that make people want to stay. Investing in a sustainable workforce means investing in the long-term future of our clinics and the patients who depend on them.",
  },
  {
    ...portrait(teamPortrait06),
    nameImage: "/nameplates/n08-purple.png",
    role: "HSS, Sacramento B St",
    team: "PPMMWU Bargaining Team Member",
    quote:
      "It’s more important than ever to unite with our community and ensure that our employer realizes that we are human beings, who truly believe in our mission, before many more good people leave our team.",
  },
  {
    ...portrait(voicePortrait03),
    nameImage: "/nameplates/n12-purple.png",
    role: "Nurse Practitioner, Roseville",
    team: "PPMMWU Member Action Team",
    quote:
      "I became a nurse practitioner because I believe in caring for patients and supporting the communities we serve. Too often, we are asked to see more patients with fewer resources and less time to meet their needs. Quality patient care should always come before patient volume.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto flex max-w-[1440px] flex-col px-5 pt-12 pb-24 md:px-[72px]">
      <h1 className="text-[clamp(36px,4.5vw,52px)] font-black text-purple">HOW CAN WE HELP?</h1>

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
          <p className="text-2xl font-extrabold text-cream md:text-[32px]">We believe in the mission.</p>
          <p className="text-lg leading-[1.4] font-bold text-white">
            We’re advocating for the people who carry it out. The Member Action Team is how coworkers stay in touch
            and take a small next step at their clinic.
          </p>
        </div>
        <PillLink href={externalLinks.memberActionTeam} className="self-start px-5 lg:self-auto" textSize="text-lg">
          JOIN THE MEMBER ACTION TEAM →
        </PillLink>
      </aside>
    </div>
  );
}
