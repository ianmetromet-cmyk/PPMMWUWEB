"use client";

import Image from "next/image";
import { useState } from "react";
import featuredPhoto from "@/assets/news/featured-photo.png";
import { contactFormEndpoint } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const inputClasses =
  "h-[52px] w-full rounded-xl border-2 border-ink bg-white px-3.5 text-[15px] text-ink placeholder:text-muted focus:outline-none focus:ring-4 focus:ring-yellow/50";

const statusMessages: Partial<Record<Status, string>> = {
  sent: "You’re signed up! Watch for bargaining updates from PPMM Workers United.",
  error: "Something went wrong. Please try again.",
};

export function UpdatesSignup() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    try {
      const response = await fetch(contactFormEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(response.statusText);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      aria-labelledby="updates-signup"
      className="relative overflow-hidden rounded-[24px] border-3 border-ink bg-purple-deep"
    >
      <div className="absolute inset-y-0 left-0 hidden w-[28%] lg:block">
        <Image
          src={featuredPhoto}
          alt=""
          fill
          sizes="28vw"
          className="object-cover object-top grayscale"
        />
        <div className="absolute inset-0 bg-purple-deep/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-purple-deep/40 to-purple-deep" />
      </div>

      <div className="relative flex flex-col gap-6 p-6 md:p-10 lg:ml-[23%]">
        <div className="flex flex-col gap-2">
          <h2 id="updates-signup" className="text-[clamp(28px,3.4vw,44px)] leading-tight font-black text-snow">
            DON’T MISS A BARGAINING UPDATE.
          </h2>
          <p className="text-base leading-[1.4] font-bold text-snow/90 md:text-lg">
            Get campaign news, bargaining alerts and actions from PPMM Workers United.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input type="hidden" name="_subject" value="Bargaining update signup" />
          <input type="hidden" name="form" value="Bargaining update signup" />
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_auto]">
            <label>
              <span className="sr-only">Email address</span>
              <input name="email" type="email" required placeholder="Email address" className={inputClasses} />
            </label>
            <label>
              <span className="sr-only">Mobile number (optional)</span>
              <input name="phone" type="tel" placeholder="Mobile number (optional)" className={inputClasses} />
            </label>
            <label>
              <span className="sr-only">Clinic or location (optional)</span>
              <input name="worksite" placeholder="Clinic / Location (optional)" className={inputClasses} />
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="h-[52px] rounded-full border-3 border-ink bg-yellow px-6 text-lg font-extrabold whitespace-nowrap text-purple transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {status === "sending" ? "SIGNING UP…" : "KEEP ME UPDATED →"}
            </button>
          </div>
          <p role="status" className="min-h-5 text-sm font-bold text-snow">
            {statusMessages[status]}
          </p>
        </form>
      </div>
    </section>
  );
}
