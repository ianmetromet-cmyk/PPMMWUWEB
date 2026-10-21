import type { Metadata } from "next";

const everyActionUrl = "https://secure.ngpvan.com/jiBxJnPajUKRIzjfSsE9RQ2";

export const metadata: Metadata = {
  title: "Bargaining Principles | PPMM Workers United",
  description:
    "Read and sign on to PPMM Workers United's bargaining principles for our first union contract.",
};

export default function BargainingPrinciplesPage() {
  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-5 py-12 md:gap-10 md:px-[72px] md:py-16">
      <header className="flex max-w-[980px] flex-col gap-5">
        <p className="text-sm font-black tracking-[0.14em] text-pink uppercase md:text-base">
          The mission runs on us!
        </p>
        <h1 className="text-[clamp(38px,5vw,64px)] leading-[1.05] font-black text-purple">
          OUR BARGAINING PRINCIPLES
        </h1>
        <p className="text-lg leading-relaxed font-semibold text-ink md:text-[22px]">
          Our bargaining principles reflect the priorities identified by PPMM
          workers. Read them below and add your name to stand united for better
          staffing, wages, benefits, training, and working conditions.
        </p>
        <div>
          <a
            href={everyActionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border-3 border-ink bg-yellow px-6 py-3.5 text-base font-extrabold text-purple transition-transform hover:-translate-y-0.5 md:text-xl"
          >
            OPEN THE SIGN-ON FORM ↗
          </a>
        </div>
      </header>

      <section aria-labelledby="sign-our-principles" className="overflow-hidden rounded-[24px] border-2 border-purple/20 bg-white">
        <div className="bg-purple px-5 py-5 md:px-8">
          <h2 id="sign-our-principles" className="text-2xl font-black text-white md:text-3xl">
            READ THE PRINCIPLES &amp; ADD YOUR NAME
          </h2>
          <p className="mt-2 text-base font-medium text-white">
            The original SEIU 521 EveryAction sign-on form is displayed below.
          </p>
        </div>
        <iframe
          src={everyActionUrl}
          title="PPMM Workers United bargaining principles and EveryAction sign-on form"
          loading="eager"
          referrerPolicy="strict-origin-when-cross-origin"
          className="block h-[900px] w-full border-0 bg-white md:h-[1200px]"
        />
      </section>

      <p className="max-w-[950px] text-base leading-relaxed font-medium text-ink">
        If the form does not display or submit on your device,{
          " "
        }
        <a
          href={everyActionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-extrabold text-purple underline underline-offset-4"
        >
          open the original EveryAction form directly
        </a>
        . Your submission is handled by EveryAction, not stored on this website.
      </p>
    </div>
  );
}
