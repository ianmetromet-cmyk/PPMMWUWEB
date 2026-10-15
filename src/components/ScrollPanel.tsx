"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const MIN_THUMB = 48;

const tones = {
  dark: {
    track: "bg-white/10",
    thumb: "bg-white/30 hover:bg-white/45",
    fade: "from-ink",
  },
  light: {
    track: "bg-purple/10",
    thumb: "bg-purple/45 hover:bg-purple/65",
    fade: "from-cream",
  },
} as const;

type ScrollPanelProps = {
  label: string;
  children: ReactNode;
  height: string;
  tone?: keyof typeof tones;
  className?: string;
};

export function ScrollPanel({ label, children, height, tone = "dark", className = "" }: ScrollPanelProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [thumb, setThumb] = useState({ top: 0, height: 0, atEnd: false });
  const colors = tones[tone];

  useEffect(() => {
    const scroller = scrollRef.current;
    const track = trackRef.current;
    if (!scroller || !track) return;

    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = scroller;
      const trackHeight = track.clientHeight;
      if (scrollHeight <= clientHeight) {
        setThumb({ top: 0, height: trackHeight, atEnd: true });
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
    const range = track.clientHeight - thumb.height;
    if (range <= 0) return;
    event.preventDefault();
    const startY = event.clientY;
    const startScroll = scroller.scrollTop;
    const ratio = (scroller.scrollHeight - scroller.clientHeight) / range;

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
    <div className={`relative flex gap-4 md:gap-8 ${className}`}>
      <div className="relative min-w-0 flex-1">
        <div
          ref={scrollRef}
          role="region"
          aria-label={label}
          tabIndex={0}
          className={`no-scrollbar overflow-y-auto rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow ${height}`}
        >
          <div>{children}</div>
        </div>
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t to-transparent transition-opacity ${colors.fade} ${
            thumb.atEnd ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>

      <div
        ref={trackRef}
        aria-hidden
        onPointerDown={jumpTo}
        className={`relative w-[18px] shrink-0 cursor-pointer rounded-[9px] ${colors.track}`}
      >
        <div
          onPointerDown={startDrag}
          style={{ height: thumb.height, transform: `translateY(${thumb.top}px)` }}
          className={`absolute inset-x-0 top-0 cursor-grab touch-none rounded-[9px] active:cursor-grabbing ${colors.thumb}`}
        />
      </div>
    </div>
  );
}
