import Image from "next/image";
import Link from "next/link";
import arrowRight from "@/assets/arrow-right.svg";

type PillLinkProps = {
  href: string;
  children: React.ReactNode;
  withArrow?: boolean;
  className?: string;
  textSize?: string;
};

export function PillLink({
  href,
  children,
  withArrow,
  className = "px-6",
  textSize = "text-base md:text-xl",
}: PillLinkProps) {
  const isExternal = /^https?:/.test(href) || href === "#";
  const classes = `inline-flex items-center gap-3 rounded-full border-3 border-ink bg-yellow py-3.5 font-extrabold text-purple transition-transform hover:-translate-y-0.5 ${textSize} ${className}`;
  const content = (
    <>
      {children}
      {withArrow && <Image src={arrowRight} alt="" width={18} height={18} />}
    </>
  );

  return isExternal ? (
    <a href={href} className={classes} target={href === "#" ? undefined : "_blank"} rel="noreferrer">
      {content}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
