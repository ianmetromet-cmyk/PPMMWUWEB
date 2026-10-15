"use client";

import { useEffect, useRef, useState } from "react";
import { PillLink } from "@/components/PillLink";
import { unionUpdates } from "@/lib/updates";

const MIN_THUMB = 48;

export function UnionUpdate() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [thumb, setThumb] = useState({ top: 0, height: 0, atEnd: false });

  useEffect(() => {
    const scroller = scrollRef.current;
    const track = trackRef.current;
    if (!scroller || !track) return;

    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = scroller;
      const trackHeight = track.clientHeight;
      if (scrollHeight <= clientHeight) {
        setThumb({ top: 0, height: 0, atEnd: true });
        return;
      }
      const height = Math.max((clientHeight / scrollHeight) * trackHeight, MIN_THUMB);
      const top = (scrollTop / (scrollHeight - clientHeight)) * (trackHeight - height);
      setThumb({ top, height, atEnd: scrollTop + clientHeight >= scrollHeight - 2 });
    };

    update();
    scroller.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(scroller);
    observer.observe(scroller.firstElementChild as Element);
    return () => {
      scroller.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);

  function startDrag(event: React.PointerEvent<HTMLDivElement>) {
    const scroller = scrollRef.current;
    const track = trackRef.current;
    if (!scroller || !track) return;
    event.preventDefault();
    const startY = event.clientY;
    const startScroll = scroller.scrollTop;
    const ratio =
      (scroller.scrollHeight - scroller.clientHeight) / (track.clientHeight - thumb.height);

    const onMove = (move: PointerEvent) => {
      scroller.scrollTop = startScroll + (move.clientY - startY) * ratio;
    };
    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  }

  function jumpTo(event: React.PointerEvent<HTMLDivElement>) {
    const scroller = scrollRef.current;
    const track = trackRef.current;
    if (!scroller || !track || event.target !== track) return;
    const { top, height } = track.getBoundingClientRect();
    const fraction = (event.clientY - top) / height;
    scroller.scrollTo({
      top: fraction * (scroller.scrollHeight - scroller.clientHeight),
      behavior: "smooth",
    });
  }

  return (
    <div className="relative flex gap-4 rounded-[24px] bg-ink p-6 md:gap-8 md:p-10">
      <div className="relative min-w-0 flex-1">
        <div
          ref={scrollRef}
          role="region"
          aria-label="Union updates"
          tabIndex={0}
          className="no-scrollbar h-[440px] overflow-y-auto rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow"
        >
          <div className="flex flex-col divide-y divide-white/15">
            {unionUpdates.map((update) => (
              <article key={update.title} className="flex flex-col gap-6 py-8 first:pt-0 last:pb-10">
                <header className="flex flex-col gap-2">
                  <p className="text-lg font-extrabold text-blue md:text-[23px]">{update.tag}</p>
                  <h3 className="text-2xl font-black text-snow md:text-[30px]">{update.title}</h3>
                </header>
                <div className="flex flex-col gap-4 text-base leading-normal font-medium text-snow md:text-lg">
                  {update.paragraphs.map((text) => (
                    <p key={text.slice(0, 24)}>{text}</p>
                  ))}
                </div>
                {update.cta && (
                  <PillLink href={update.cta.href} withArrow className="self-start px-6">
                    {update.cta.label}
                  </PillLink>
                )}
              </article>
            ))}
          </div>
        </div>
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-ink to-transparent transition-opacity ${
            thumb.atEnd ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>

      <div
        ref={trackRef}
        aria-hidden
        onPointerDown={jumpTo}
        className={`relative w-[18px] shrink-0 cursor-pointer rounded-[9px] bg-white/10 ${
          thumb.height > 0 ? "" : "invisible"
        }`}
      >
        <div
          onPointerDown={startDrag}
          style={{ height: thumb.height, transform: `translateY(${thumb.top}px)` }}
          className="absolute inset-x-0 top-0 cursor-grab touch-none rounded-[9px] bg-white/30 hover:bg-white/45 active:cursor-grabbing"
        />
      </div>
    </div>
  );
}
