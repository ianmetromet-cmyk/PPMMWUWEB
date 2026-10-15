"use client";

import { useState } from "react";
import { PillLink } from "@/components/PillLink";
import { externalLinks } from "@/lib/site";

const paragraphs = [
  "Our principles reflect the priorities identified by hundreds of Registered Nurses, Clinicians, and Health Service Specialists, focusing on strengthening our workforce, improving working conditions, supporting quality patient care, and sustaining Planned Parenthood Mar Monte's mission.",
  "Every day, we show up for our patients and communities, often without the staffing, resources, and support we need. Our work makes PPMM's mission possible. That's why the mission runs on us!",
  "Our new website is your one-stop destination for bargaining updates, member stories, campaign priorities, and opportunities to get involved. Winning a strong first contract takes all of us standing together.",
  "Visit our website, sign on to our bargaining principles, and help demonstrate our collective support for the priorities guiding our bargaining team as we enter negotiations.",
];

export function UnionUpdate() {
  const [expanded, setExpanded] = useState(true);
  const visible = expanded ? paragraphs : paragraphs.slice(0, 1);

  return (
    <article className="rounded-[24px] bg-ink p-6 md:p-10">
      <div
        className={`update-scroll flex flex-col gap-6 pr-2 md:pr-8 ${
          expanded ? "max-h-[559px] overflow-y-auto" : ""
        }`}
      >
        <header className="flex flex-col gap-2">
          <p className="text-lg font-extrabold text-blue md:text-[23px]">UNION UPDATE - OCT 2026</p>
          <h3 className="text-2xl font-black text-snow md:text-[30px]">
            SIGN ONTO OUR BARGAINING PRINCIPLES!
          </h3>
        </header>
        <div id="union-update-body" className="flex flex-col gap-4 text-base leading-normal font-medium text-snow md:text-lg">
          {visible.map((text) => (
            <p key={text.slice(0, 24)}>{text}</p>
          ))}
        </div>
        <div className="flex flex-col items-start gap-3">
          {expanded && (
            <PillLink href={externalLinks.bargainingPrinciples} withArrow>
              SIGN ON TO BARGAINING PRINCIPLES
            </PillLink>
          )}
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            aria-controls="union-update-body"
            className="text-base font-extrabold text-snow underline"
          >
            {expanded ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </article>
  );
}
