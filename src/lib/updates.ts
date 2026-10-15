import { externalLinks } from "@/lib/site";

export type UnionUpdate = {
  tag: string;
  title: string;
  paragraphs: string[];
  cta?: { label: string; href: string };
};

// Newest first. Add a new update to the top of the list.
export const unionUpdates: UnionUpdate[] = [
  {
    tag: "UNION UPDATE - OCT 2026",
    title: "SIGN ONTO OUR BARGAINING PRINCIPLES!",
    paragraphs: [
      "Our principles reflect the priorities identified by hundreds of Registered Nurses, Clinicians, and Health Service Specialists, focusing on strengthening our workforce, improving working conditions, supporting quality patient care, and sustaining Planned Parenthood Mar Monte's mission.",
      "Every day, we show up for our patients and communities, often without the staffing, resources, and support we need. Our work makes PPMM's mission possible. That's why the mission runs on us!",
      "Our new website is your one-stop destination for bargaining updates, member stories, campaign priorities, and opportunities to get involved. Winning a strong first contract takes all of us standing together.",
      "Visit our website, sign on to our bargaining principles, and help demonstrate our collective support for the priorities guiding our bargaining team as we enter negotiations.",
    ],
    cta: { label: "SIGN ON TO BARGAINING PRINCIPLES", href: externalLinks.bargainingPrinciples },
  },
];
