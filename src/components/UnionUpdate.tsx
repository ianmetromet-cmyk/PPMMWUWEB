import { PillLink } from "@/components/PillLink";
import { ScrollPanel } from "@/components/ScrollPanel";
import { unionUpdates } from "@/lib/updates";

export function UnionUpdate() {
  return (
    <ScrollPanel label="Union updates" height="h-[440px]" className="rounded-[24px] bg-ink p-6 md:p-10">
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
    </ScrollPanel>
  );
}
