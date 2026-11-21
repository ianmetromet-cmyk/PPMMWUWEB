import type { StaticImageData } from "next/image";
import josefinaRodriguez from "@/assets/updates/josefina-rodriguez.jpg";
import luisBerber from "@/assets/updates/luis-berber.jpg";
import { externalLinks } from "@/lib/site";

export type UpdateQuote = {
  quote: string;
  attribution: string;
  image: StaticImageData;
  alt: string;
};

export type UpdateCopy = string | UpdateQuote;

export type UnionUpdate = {
  tag: string;
  title: string;
  subtitle?: string;
  paragraphs: UpdateCopy[];
  principles?: string[];
  closing?: UpdateCopy[];
  actions?: { label: string; href: string }[];
  actionPlacements?: Array<"top" | "middle" | "bottom">;
  signoff?: string;
  cta?: { label: string; href: string };
};

// Newest first. Add a new update to the top of the list.
export const unionUpdates: UnionUpdate[] = [
  {
    tag: "UNION UPDATE | NOV 20 2026",
    title:
      "Last night our elected bargaining committee and 93 of our co-workers united in support of bargaining our first union contract.",
    paragraphs: [
      "We met with Planned Parenthood Mar Monte’s Executive Leadership Team, making it clear that no one is more dedicated to running our mission than our union’s frontline staff.",
      {
        quote:
          "\"Real job security is among the main concerns impacting our staff, especially following the closure of the 5 clinics that came without warning last year. Our proposals establish transparency in financial decisions that impact our livelihoods and meaningful protections to ensure we are placed internally in any available positions in the event of a mass layoff, well before outside candidates are offered our jobs.\"",
        attribution: "- Luis Berber, HSS",
        image: luisBerber,
        alt: "Luis Berber, HSS",
      },
      "Our proposals highlighted our bargaining principles:",
    ],
    principles: [
      "Competitive wages and benefits that recognize our work.",
      "Job security that includes financial transparency and layoff protections.",
      "Sustainable staffing that protects patients and workers.",
      "Protection from last minute changes in schedule and work locations.",
      "Fair and consistent workplace protections.",
    ],
    closing: [
      {
        quote:
          "\"Safe staffing is essential to quality patient care. Our proposals establish sustainable staffing standards that prevent errors, protect employee wellbeing, and ensure patients receive timely, quality care. That means fair workloads, equitable assignment rotations and staffing levels that reflect patient volume, acuity and the demands of each position.\"",
        attribution: "- Josefina Rodriguez, HSS",
        image: josefinaRodriguez,
        alt: "Josefina Rodriguez, HSS",
      },
      "PPMM’s Leadership team reviewed our proposals, left to caucus, and did not return.",
      "Their team included:",
      "Maria Miller, Chief Spokesperson; Tom Motsiff, CFO; Gregory Krause, HR VP; Navi Athwal, HR; Sandra Sequeira, HR; Michael Liberato, HC Operations.",
      "We received a response for the next bargaining dates.",
      "We will continue to run the mission, state our issues, and remain present to resolve the problems facing our staff and patients.",
      "Click to register for our next bargaining sessions!",
    ],
    actions: [
      {
        label: "PPMMWU SEIU 521 Collective Bargaining December 10th",
        href: externalLinks.december10BargainingRsvp,
      },
      {
        label: "PPMMWU SEIU 521 Collective Bargaining December 22nd",
        href: externalLinks.december22BargainingRsvp,
      },
    ],
    actionPlacements: ["top", "bottom"],
    signoff: "In solidarity,",
  },
  {
    tag: "UNION UPDATE | NOVEMBER 2026",
    title: "OUR UNION. OUR MISSION. OUR FUTURE.",
    subtitle: "Virtual Campaign Kickoff | November 18 at 7 PM",
    paragraphs: [
      "Our mission depends on the people who make it possible every day. But we cannot sustain that mission with high staff turnover, noncompetitive wages, or a union where only some of us are involved.",
      "Winning a strong first contract will take all of us.",
      "On November 18, we’re coming together for our Virtual Campaign Kickoff to build the collective power we need as we prepare to begin contract negotiations.",
      "Every Registered Nurse, Clinician, and Health Service Specialist has a role to play in strengthening our union, improving our working conditions, and securing the contract we deserve.",
      "Our strength comes from our participation, our solidarity, and our willingness to stand together.",
      "Join us November 18 at 7 PM. Make your voice heard and help build the power to win!",
    ],
    cta: {
      label: "REGISTER FOR OUR VIRTUAL CAMPAIGN KICKOFF",
      href: "https://seiu521-org.zoom.us/meeting/register/mMj7dnspSGSZEyfUYe0O5g#/registration",
    },
  },
  {
    tag: "UNION UPDATE - OCT 2026",
    title: "SIGN ONTO OUR BARGAINING PRINCIPLES!",
    paragraphs: [
      "Our principles reflect the priorities identified by hundreds of Registered Nurses, Clinicians, and Health Service Specialists, focusing on strengthening our workforce, improving working conditions, supporting quality patient care, and sustaining Planned Parenthood Mar Monte's mission.",
      "Every day, we show up for our patients and communities, often without the staffing, resources, and support we need. Our work makes PPMM's mission possible. That's why the mission runs on us!",
      "If PPMM leadership values reproductive healthcare, they invest in the workers who provide it.",
      "Our new website is your one-stop destination for bargaining updates, member stories, campaign priorities, and opportunities to get involved. Winning a strong first contract takes all of us standing together.",
      "Visit our website, sign on to our bargaining principles, and help demonstrate our collective support for the priorities guiding our bargaining team as we enter negotiations.",
    ],
    cta: { label: "LEARN MORE & GET INVOLVED", href: "https://www.ppmmwu.org/negotiations/" },
  },
];
