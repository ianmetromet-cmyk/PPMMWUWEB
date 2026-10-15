import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import featuredPhoto from "@/assets/news/featured-photo.png";
import allisonChung from "@/assets/team/allison-chung.png";
import josefinaRodriguez from "@/assets/team/josefina-rodriguez.png";
import lauraFloresGalicia from "@/assets/team/laura-flores-galicia.png";
import ryahIssa from "@/assets/team/ryah-issa.png";
import groupPhoto from "@/assets/voices/group-photo.png";
import { ContactForm } from "@/components/ContactForm";
import { PillLink } from "@/components/PillLink";
import { type Voice, VoicesGallery } from "@/components/VoicesGallery";
import { externalLinks } from "@/lib/site";

export const metadata: Metadata = { title: "Contact Us" };

const groupImage = {
  image: groupPhoto,
  imageAlt: "PPMM Workers United members raising their fists together",
  imageFit: "contain",
} as const;

const pairImage = {
  image: featuredPhoto,
  imageAlt: "Two PPMM Workers United members smiling",
  imageFit: "cover",
} as const;

function portrait(image: StaticImageData, name: string) {
  return { image, imageAlt: `Portrait of ${name}`, imageFit: "portrait" } as const;
}

const voices: Voice[] = [
  {
    ...groupImage,
    memberName: "Aliya Caler",
    role: "Clinician, Oakland",
    team: "PPMMWU Member Action Team Member",
    quote:
      "I do this work for people in our communities who too often feel unheard, disrespected, or undervalued. Everyone deserves compassionate, judgment-free care and the freedom to make decisions about their own lives and futures. Our patients and coworkers deserve the same compassion and respect that drive our mission. When workers are respected, valued, and supported, we can provide stronger care and build a stronger future for the communities we serve. The mission runs on us.",
  },
  {
    ...portrait(ryahIssa, "Ryah Issa"),
    memberName: "Ryah Issa",
    role: "RN, San Jose Eastside",
    team: "PPMMWU Bargaining Team Member",
    quote:
      "Our community of workers and patients are seeking safe, and supportive working conditions, and transparency in leadership decisions. Our working conditions directly impact the care we provide. Our voice is crucial to strengthen and shape a stronger and sustainable future of Planned Parenthood Mar Monte Workers United run clinics: reproductive justice and access to quality health care matters!",
  },
  {
    ...portrait(josefinaRodriguez, "Josefina Rodriguez"),
    memberName: "Josefina Rodriguez",
    role: "HSS II, Fulton",
    team: "PPMMWU Bargaining Team Member",
    quote:
      "I do this work for all the individuals who sit in a Planned Parenthood waiting room, pregnant, scared, and uncertain about the future. Someone was there for me without judgment. Every patient deserves compassion, dignity, and someone they can trust. The mission runs on us.",
  },
  {
    ...pairImage,
    memberName: "Leticia Ornelas",
    team: "PPMMWU Member Action Team",
    quote:
      "New hires at Planned Parenthood Mar Monte are routinely placed on the clinic floor without adequate training. Leadership decisions that impact staffing and constant turnover leave our community unprepared for critical responsibilities. When a young patient comes to us scared or facing an important, deeply personal healthcare decision, proper training and mentorship are essential to supporting our coworkers and protecting our patients. The mission runs on us.",
  },
  {
    ...portrait(allisonChung, "Allison Chung"),
    memberName: "Allison Chung",
    role: "Clinician, Sacramento B St",
    team: "PPMMWU Bargaining Team Member",
    quote:
      "I do this work because it’s my livelihood, and like my coworkers, I deserve a job that provides stability and a future I can count on. Keeping our clinics strong means keeping experienced workers from leaving. We need fair compensation, manageable workloads, and working conditions that make people want to stay. Investing in a sustainable workforce means investing in the long-term future of our clinics and the patients who depend on them.",
  },
  {
    ...portrait(lauraFloresGalicia, "Laura Flores Galicia"),
    memberName: "Laura Flores Galicia",
    role: "HSS, Sacramento B St",
    team: "PPMMWU Bargaining Team Member",
    quote:
      "It’s more important than ever to unite with our community and ensure that our employer realizes that we are human beings, who truly believe in our mission, before many more good people leave our team.",
  },
  {
    ...groupImage,
    memberName: "Nancy Griffith",
    role: "Nurse Practitioner, Roseville",
    team: "PPMMWU Member Action Team",
    quote:
      "I became a nurse practitioner because I believe in caring for patients and supporting the communities we serve. Too often, we are asked to see more patients with fewer resources and less time to meet their needs. Quality patient care should always come before patient volume.",
  },
  {
    ...portrait(josefinaRodriguez, "Josefina Rodriguez"),
    memberName: "Josefina Rodriguez",
    role: "HSS II, Fulton",
    team: "PPMMWU Bargaining Team Member",
    quote:
      "The dignity and respect we provide our patients must extend to the workers who care for them. Through our union, we are standing together for a meaningful voice, fairness, and the support we need to deliver quality care. When we stand up for each other, we stand up for our patients. The mission runs on us.",
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
