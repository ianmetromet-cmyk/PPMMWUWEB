import { PillLink } from "@/components/PillLink";
import { ScrollPanel } from "@/components/ScrollPanel";
import { unionUpdates, type UnionUpdate as UnionUpdateItem } from "@/lib/updates";

function UpdateArticle({ update, className = "" }: { update: UnionUpdateItem; className?: string }) {
  return (
    <article className={`flex flex-col gap-6 ${className}`}>
      <header className="flex flex-col gap-2">
        <p className="text-lg font-extrabold text-blue md:text-[23px]">{update.tag}</p>
        <h3 className="text-2xl font-black text-snow md:text-[30px]">{update.title}</h3>
        {update.subtitle && <p className="text-lg font-extrabold text-yellow md:text-xl">{update.subtitle}</p>}
      </header>
      <div className="flex flex-col gap-4 text-base leading-normal font-medium text-snow md:text-lg">
        {update.paragraphs.map((text) => (
          <p key={text.slice(0, 24)}>{text}</p>
        ))}
      </div>
      {update.cta && (
        <PillLink
          href={update.cta.href}
          withArrow
          textSize="text-sm md:text-lg"
          className="max-w-full self-start px-6 text-center"
        >
          {update.cta.label}
        </PillLink>
      )}
    </article>
  );
}

export function UnionUpdate() {
  const [current, ...earlier] = unionUpdates;

  return (
    <div className="rounded-[24px] bg-ink p-6 md:p-10">
      {current && <UpdateArticle update={current} />}
      {earlier.length > 0 && (
        <div className="mt-8 border-t border-white/15 pt-8">
          <ScrollPanel label="Earlier union updates" height="h-[440px]">
            <div className="flex flex-col divide-y divide-white/15">
              {earlier.map((update) => (
                <UpdateArticle key={update.title} update={update} className="py-8 first:pt-0 last:pb-10" />
              ))}
            </div>
          </ScrollPanel>
        </div>
      )}
    </div>
  );
}
