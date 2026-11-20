import Image from "next/image";
import heroBanner from "@/assets/home/hero-banner.png";

/** Hero art is 2130×564 (~3.78:1). Cap width with the rest of the site so ultra-wide desktops stay proportionate. */
const HERO_ASPECT = 2130 / 564;

export function HomeHero() {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-4 md:px-10">
      <div
        className="relative w-full overflow-hidden rounded-[12px] md:max-h-[420px] md:rounded-[16px]"
        style={{ aspectRatio: HERO_ASPECT }}
      >
        <Image
          src={heroBanner}
          alt="The mission runs on us! PPMM Workers United — People. Care. Power."
          fill
          priority
          sizes="(min-width: 1440px) 1360px, 100vw"
          className="object-contain object-center"
        />
      </div>
    </div>
  );
}
