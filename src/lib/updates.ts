export type UnionUpdate = {
  tag: string;
  title: string;
  subtitle?: string;
  paragraphs: string[];
  cta?: { label: string; href: string };
};

// Newest first. Add a new update to the top of the list.
export const unionUpdates: UnionUpdate[] = [
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
