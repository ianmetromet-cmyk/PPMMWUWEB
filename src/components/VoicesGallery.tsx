"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef, useState } from "react";

export type Voice = {
  image: StaticImageData;
  imageAlt: string;
  imageFit: "contain" | "cover" | "portrait";
  quote: string;
  nameImage: string;
  role?: string;
  team: string;
};

const fitClasses: Record<Voice["imageFit"], string> = {
  contain: "object-contain",
  cover: "object-cover",
  portrait: "object-cover object-[center_20%]",
};

export function VoicesGallery({ voices }: { voices: Voice[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : voices[activeIndex];

  function open(index: number) {
    setActiveIndex(index);
    dialogRef.current?.showModal();
  }

  return (
    <>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {voices.map((voice, index) => (
          <li
            key={voice.quote.slice(0, 32)}
            className="flex h-[334px] flex-col overflow-hidden rounded-[24px] border border-line bg-cream shadow-[0px_12px_28px_0px_rgba(0,0,0,0.08)]"
          >
            <div className="relative h-[220px] w-full bg-purple">
              <Image
                src={voice.image}
                alt={voice.imageAlt}
                fill
                sizes="(min-width: 1024px) 420px, (min-width: 768px) 50vw, 100vw"
                className={fitClasses[voice.imageFit]}
              />
            </div>
            <div className="flex flex-1 items-center justify-between gap-3 p-4">
              <div className="flex flex-col gap-1">
                <img src={voice.nameImage} alt="Worker name graphic" className="h-7 w-auto max-w-full object-contain object-left" />
                <p className="text-[13px] leading-[1.4] font-semibold opacity-75">Click to open quote window</p>
              </div>
              <button
                type="button"
                onClick={() => open(index)}
                aria-label="Open worker quote"
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
        aria-label={active ? "Quote from a worker" : undefined}
        onClick={(event) => event.target === dialogRef.current && dialogRef.current?.close()}
        className="m-auto max-h-[calc(100dvh-32px)] w-[min(1309px,calc(100vw-32px))] rounded-[24px] border-2 border-line bg-cream p-0 text-ink shadow-[0px_12px_28px_0px_rgba(0,0,0,0.08)] backdrop:bg-ink/60"
      >
        {active && (
          <div className="flex flex-col gap-5 p-6">
            <div className="flex items-center justify-between gap-4">
              <img src={active.nameImage} alt="Worker name graphic" className="h-10 w-auto max-w-[70%] object-contain object-left" />
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="rounded-full bg-ink px-3 py-2 text-xs font-extrabold text-cream"
              >
                CLOSE ✕
              </button>
            </div>
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="relative aspect-[469/392] w-full shrink-0 overflow-hidden rounded-[20px] bg-purple md:w-[469px]">
                <Image
                  src={active.image}
                  alt={active.imageAlt}
                  fill
                  sizes="469px"
                  className={fitClasses[active.imageFit]}
                />
              </div>
              <figure className="flex flex-1 flex-col gap-4 rounded-[20px] border border-line bg-cream p-6">
                <p className="text-xs font-extrabold text-purple">QUOTE</p>
                <blockquote className="text-[clamp(17px,1.6vw,22px)] leading-[1.4] font-extrabold">
                  “{active.quote}”
                </blockquote>
                <figcaption className="flex flex-col gap-1">
                  <img src={active.nameImage} alt="Worker name graphic" className="h-8 w-auto max-w-full object-contain object-left" />
                  {active.role && <p className="text-sm leading-[1.4] font-bold opacity-75">{active.role}</p>}
                  <p className="text-sm leading-[1.4] font-bold opacity-75">{active.team}</p>
                </figcaption>
              </figure>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
