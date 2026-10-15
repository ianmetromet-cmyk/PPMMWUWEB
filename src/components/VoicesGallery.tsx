"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef, useState } from "react";

export type Voice = {
  label: string;
  title: string;
  image: StaticImageData;
  imageAlt: string;
  imageFit: "contain" | "cover";
  quote: string;
  memberName: string;
  worksite: string;
};

export function VoicesGallery({ voices }: { voices: Voice[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<Voice | null>(null);

  function open(voice: Voice) {
    setActive(voice);
    dialogRef.current?.showModal();
  }

  return (
    <>
      <ul className="grid gap-6 md:grid-cols-3">
        {voices.map((voice) => (
          <li
            key={voice.label}
            className="flex h-[334px] flex-col overflow-hidden rounded-[24px] border border-line bg-cream shadow-[0px_12px_28px_0px_rgba(0,0,0,0.08)]"
          >
            <div className="relative h-[220px] w-full">
              <Image
                src={voice.image}
                alt={voice.imageAlt}
                fill
                sizes="(min-width: 768px) 420px, 100vw"
                className={voice.imageFit === "contain" ? "object-contain" : "object-cover"}
              />
            </div>
            <div className="flex flex-1 items-center justify-between gap-3 p-4">
              <div className="flex flex-col gap-1">
                <p className="text-xs font-extrabold text-purple">{voice.label}</p>
                <p className="text-base font-extrabold">{voice.title}</p>
                <p className="text-[13px] leading-[1.4] font-semibold opacity-75">Click to open quote window</p>
              </div>
              <button
                type="button"
                onClick={() => open(voice)}
                className="shrink-0 rounded-full border-2 border-ink bg-yellow px-3.5 py-2.5 text-sm font-extrabold text-purple transition-transform hover:-translate-y-0.5"
              >
                OPEN QUOTE
              </button>
            </div>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClick={(event) => event.target === dialogRef.current && dialogRef.current?.close()}
        className="m-auto w-[min(1309px,calc(100vw-32px))] rounded-[24px] border-2 border-line bg-cream p-0 text-ink shadow-[0px_12px_28px_0px_rgba(0,0,0,0.08)] backdrop:bg-ink/60"
      >
        {active && (
          <div className="flex flex-col gap-5 p-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-1 font-extrabold">
                <p className="text-sm text-purple">{active.label}</p>
                <p className="text-[28px]">{active.title}</p>
              </div>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="rounded-full bg-ink px-3 py-2 text-xs font-extrabold text-cream"
              >
                CLOSE ✕
              </button>
            </div>
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="relative aspect-[469/392] w-full shrink-0 overflow-hidden rounded-[20px] md:w-[469px]">
                <Image
                  src={active.image}
                  alt={active.imageAlt}
                  fill
                  sizes="469px"
                  className={active.imageFit === "contain" ? "object-contain" : "object-cover"}
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 rounded-[20px] border border-line bg-cream p-6">
                <p className="text-xs font-extrabold text-purple">QUOTE</p>
                <blockquote className="text-[clamp(20px,2.2vw,28px)] leading-[1.3] font-extrabold">
                  “{active.quote}”
                </blockquote>
                <p className="text-xs font-extrabold text-purple">ATTRIBUTION</p>
                <p className="text-base font-extrabold">{active.memberName}</p>
                <p className="text-sm leading-[1.4] font-bold opacity-75">{active.worksite}</p>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
