"use client";

import { useState } from "react";
import { contactFormEndpoint } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error" | "unconfigured";

const inputClasses =
  "w-full rounded-xl border-2 border-ink bg-white px-4 py-3.5 text-base text-ink placeholder:text-muted focus:outline-none focus:ring-4 focus:ring-purple/30";

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-extrabold">{label}</span>
      <input name={name} type={type} placeholder={placeholder} required={required} className={`h-[52px] ${inputClasses}`} />
    </label>
  );
}

const statusMessages: Partial<Record<Status, string>> = {
  sent: "Thank you! Your message has been sent to our union.",
  error: "Something went wrong sending your message. Please try again.",
  unconfigured: "The contact form isn't connected yet. Please check back soon.",
};

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!contactFormEndpoint) {
      setStatus("unconfigured");
      return;
    }
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
    <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-5 rounded-[18px] bg-cream p-5 md:p-7">
      <div className="grid gap-[18px] sm:grid-cols-2 xl:grid-cols-[300px_300px]">
        <Field label="Name" name="name" placeholder="Enter name" />
        <Field label="Email" name="email" type="email" placeholder="Enter email" required />
      </div>
      <Field label="Worksite or location" name="worksite" placeholder="Enter worksite or location" />
      <Field label="I’m reaching out about" name="topic" placeholder="Enter i’m reaching out about" />
      <label className="flex flex-col gap-2">
        <span className="text-sm font-extrabold">Message</span>
        <textarea
          name="message"
          required
          placeholder="How can your union support you?"
          className={`h-[140px] resize-y p-4 ${inputClasses}`}
        />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full border-3 border-ink bg-yellow px-5 py-3.5 text-lg font-extrabold text-purple transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          {status === "sending" ? "SENDING…" : "SEND MESSAGE →"}
        </button>
        <p role="status" className="text-sm font-bold">
          {statusMessages[status]}
        </p>
      </div>
    </form>
  );
}
