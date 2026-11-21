import Image from "next/image";
import { PillLink } from "@/components/PillLink";
import { ScrollPanel } from "@/components/ScrollPanel";
import { unionUpdates, type UpdateCopy, type UnionUpdate as UnionUpdateItem } from "@/lib/updates";

function WorkerAttribution({ text }: { text: string }) {
  const match = text.match(/^(- )(.+?)(, HSS)$/);
  if (!match) return text;
  return (
    <>
      {match[1]}
      <strong className="font-black">{match[2]}</strong>
      {match[3]}
    </>
  );
}

function UpdateCopyBlocks({ items }: { items: UpdateCopy[] }) {
  return items.map((item) =>
    typeof item === "string" ? (
      <p key={item.slice(0, 48)}>{item}</p>
    ) : (
      <figure key={item.attribution} className="m-0 flow-root">
        <Image
          src={item.image}
          alt={item.alt}
          className="float-left mt-1 mr-3 mb-2 h-auto w-[112px] rounded-[14px] md:mr-5 md:w-[200px]"
        />
        <blockquote className="m-0">
          <p className="italic">{item.quote}</p>
          <footer className="mt-2">
            <WorkerAttribution text={item.attribution} />
          </footer>
        </blockquote>
      </figure>
    ),
  );
}

function RegistrationButtons({ actions }: { actions: NonNullable<UnionUpdateItem["actions"]> }) {
  return (
    <div className="flex w-full flex-col gap-3">
      {actions.map((action) => (
        <PillLink
          key={action.href}
          href={action.href}
          withArrow
          textSize="text-base md:text-lg"
          className="w-full justify-center px-4 text-center md:w-auto md:self-start md:px-6"
        >
          {action.label}
        </PillLink>
      ))}
    </div>
  );
}

function UpdateArticle({ update, className = "" }: { update: UnionUpdateItem; className?: string }) {
  const placements = update.actionPlacements ?? (update.actions ? ["bottom"] : []);
  const showActions = (place: "top" | "middle" | "bottom") =>
    Boolean(update.actions && placements.includes(place));

  return (
    <article className={`flex flex-col gap-5 md:gap-6 ${className}`}>
      <header className="flex flex-col gap-2">
        <p className="text-base font-extrabold text-blue md:text-[23px]">{update.tag}</p>
        <h3 className="text-[22px] leading-[1.12] font-black text-snow md:text-[30px] md:leading-[1.08]">{update.title}</h3>
        {update.subtitle && <p className="text-lg font-extrabold text-yellow md:text-xl">{update.subtitle}</p>}
      </header>
      {showActions("top") && <RegistrationButtons actions={update.actions!} />}
      <div className="flex flex-col gap-4 text-[14pt] leading-normal font-medium text-snow">
        <UpdateCopyBlocks items={update.paragraphs} />
        {update.principles && (
          <ul className="list-disc space-y-2 pl-5 marker:text-yellow">
            {update.principles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {showActions("middle") && <RegistrationButtons actions={update.actions!} />}
        {update.closing && <UpdateCopyBlocks items={update.closing} />}
      </div>
      {showActions("bottom") && <RegistrationButtons actions={update.actions!} />}
      {update.signoff && <p className="text-[14pt] leading-normal font-medium text-snow">{update.signoff}</p>}
      {update.cta && (
        <PillLink
          href={update.cta.href}
          withArrow
          textSize="text-sm md:text-lg"
          className="w-full justify-center px-4 text-center md:w-auto md:self-start md:px-6"
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
    <div className="rounded-[24px] bg-ink p-4 md:p-10">
      {current && <UpdateArticle update={current} />}
      {earlier.length > 0 && (
        <div className="mt-8 border-t border-white/15 pt-8">
          <div className="flex flex-col divide-y divide-white/15 md:hidden">
            {earlier.map((update) => (
              <UpdateArticle key={update.title} update={update} className="py-8 first:pt-0 last:pb-2" />
            ))}
          </div>
          <div className="hidden md:block">
            <ScrollPanel label="Earlier union updates" height="h-[440px]">
              <div className="flex flex-col divide-y divide-white/15">
                {earlier.map((update) => (
                  <UpdateArticle key={update.title} update={update} className="py-8 first:pt-0 last:pb-10" />
                ))}
              </div>
            </ScrollPanel>
          </div>
        </div>
      )}
    </div>
  );
}
