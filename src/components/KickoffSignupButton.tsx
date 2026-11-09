"use client";

import Image from "next/image";
import arrowRight from "@/assets/arrow-right.svg";

const kickoffSignupUrl = "https://www.ppmmwu.org/negotiations/";

export function KickoffSignupButton() {
  return (
    <a
      href={kickoffSignupUrl}
      aria-label="Sign up for the Virtual Campaign Kickoff"
      className="mt-5 inline-flex w-fit items-center gap-3 rounded-full border-3 border-ink bg-yellow px-6 py-3.5 text-base font-extrabold text-purple-deep transition-transform hover:-translate-y-0.5 md:text-lg"
      onClick={(event) => {
        event.preventDefault();
        const popup = window.open(
          kickoffSignupUrl,
          "ppmmwu-negotiations",
          "popup=yes,width=1100,height=820",
        );
        if (popup) popup.opener = null;
        else window.location.assign(kickoffSignupUrl);
      }}
    >
      Sign up
      <Image src={arrowRight} alt="" width={18} height={18} />
    </a>
  );
}
