import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import almanac from "@/assets/news/almanac.png";
import featuredPhoto from "@/assets/news/featured-photo.png";
import kget from "@/assets/news/kget.png";
import localNewsMatters from "@/assets/news/local-news-matters.png";
import sfChronicle from "@/assets/news/sf-chronicle.png";
import sfgate from "@/assets/news/sfgate.png";
import victoryFlyer from "@/assets/news/victory-flyer.jpg";
import { PillLink } from "@/components/PillLink";
import { ScrollPanel } from "@/components/ScrollPanel";
import { TitleBanner } from "@/components/TitleBanner";
import { externalLinks } from "@/lib/site";

export const metadata: Metadata = { title: "News" };

type Article = {
  image: StaticImageData;
  headline: string;
  href: string;
  // Pixel row in the image where the section label (e.g. "HEALTH") begins.
  labelTop: number;
};

const sideArticles: Article[] = [
  {
    image: sfgate,
    labelTop: 215,
    headline: "SFGATE: Regional: Nurses and others at Planned Parenthood's largest affiliate vote to form union",
    href: "https://www.sfgate.com/news/bayarea/article/regional-workers-at-largest-planned-parenthood-22256377.php",
  },
  {
    image: kget,
    labelTop: 307,
    headline: "KGET 17: Bakersfield, statewide Planned Parenthood clinic to unionize under SEIU",
    href: "https://www.kget.com/news/local-news/bakersfield-statewide-planned-parenthood-clinic-to-unionize-under-seiu/",
  },
];

const bottomArticles: Article[] = [
  {
    image: almanac,
    labelTop: 251,
    headline: "The Almanac: Nurses and staff at local Planned Parenthood affiliate vote to form union",
    href: "https://www.almanacnews.com/health/2026/05/21/nurses-and-others-at-local-planned-parenthood-affiliate-vote-to-form-union/",
  },
  {
    image: localNewsMatters,
    labelTop: 249,
    headline: "Local News Matters: Workers at Planned Parenthood's largest affiliate weigh joining SEIU Local 521",
    href: "https://localnewsmatters.org/2026/05/13/planned-parenthood-mar-monte-union-vote/",
  },
  {
    image: sfChronicle,
    labelTop: 154,
    headline: "San Francisco Chronicle: Workers at Planned Parenthood's largest affiliate are unionizing, citing Trump cuts",
    href: "https://www.sfchronicle.com/politics/article/planned-parenthood-union-medicaid-trump-22249797.php",
  },
];

const labelRatio = (article: Article) => article.labelTop / article.image.width;
const bottomLabelRatio = Math.max(...bottomArticles.map(labelRatio));

function ArticleLink({ article, alignLabel }: { article: Article; alignLabel?: boolean }) {
  const offset = alignLabel ? bottomLabelRatio - labelRatio(article) : 0;
  return (
    <a
      href={article.href}
      target="_blank"
      rel="noreferrer"
      style={{ "--label-offset": `${offset * 100}%` } as React.CSSProperties}
      className="block transition-transform hover:-translate-y-1 md:pt-(--label-offset)"
    >
      <Image src={article.image} alt={article.headline} className="h-auto w-full" />
    </a>
  );
}

export default function NewsPage() {
  return (
    <div className="mx-auto flex max-w-[1440px] flex-col px-5 pt-4 pb-16 md:px-14">
      <header className="flex flex-col gap-2 md:px-6">
        <h1 className="text-[clamp(40px,5.5vw,63px)] font-black text-purple">IN THE NEWS</h1>
        <p className="text-[clamp(22px,3vw,40px)] font-black italic">
          Click on a headline to access each article.
        </p>
      </header>

      <ScrollPanel
        label="News coverage"
        tone="light"
        height="h-[640px] md:h-[760px]"
        className="mt-10 md:px-6"
      >
        <div className="grid gap-x-10 gap-y-12 pb-10 md:grid-cols-3 md:items-start">
          <div className="flex flex-col gap-12">
            {sideArticles.map((article) => (
              <ArticleLink key={article.headline} article={article} />
            ))}
          </div>
          <div className="relative aspect-[877/494] w-full shadow-[0px_10px_10px_0px_rgba(0,0,0,0.25)] md:col-span-2">
            <Image
              src={featuredPhoto}
              alt="Two PPMM Workers United members smiling"
              fill
              sizes="(min-width: 768px) 65vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          {bottomArticles.map((article) => (
            <ArticleLink key={article.headline} article={article} alignLabel />
          ))}
        </div>
      </ScrollPanel>

      <aside className="mt-12 flex flex-col gap-6 rounded-[20px] bg-ink p-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-[760px] flex-col gap-2.5">
          <p className="text-2xl font-extrabold text-cream md:text-[32px]">
            Ready to move from election to action?
          </p>
          <p className="text-sm leading-[1.4] font-bold text-snow">
            Join the Member Action Team, stay updated on bargaining progress, and connect with the organizing team.
          </p>
        </div>
        <PillLink href={externalLinks.memberActionTeam} withArrow className="shrink-0 self-start px-[18px] lg:self-auto">
          JOIN THE MEMBER ACTION TEAM
        </PillLink>
      </aside>

      <section aria-labelledby="san-jose" className="mt-8 flex flex-col gap-6">
        <TitleBanner className="self-start">
          <span id="san-jose">VICTORIES AT SAN JOSE CLINIC!</span>
        </TitleBanner>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-[72px]">
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH}/downloads/ppmmwu-victory-flyer.pdf`}
            download="PPMMWU Victory Flyer.pdf"
            className="block shrink-0 rounded-[24px] bg-ink p-6 transition-transform hover:-translate-y-1 md:w-[507px] md:p-10"
          >
            <Image
              src={victoryFlyer}
              alt="Our Voice, At Work campaign update flyer — download the PDF to share"
              className="h-auto w-full"
            />
          </a>
          <div className="flex flex-col gap-[1.2em] text-[clamp(22px,2.5vw,35px)] font-black italic md:pt-2">
            <p>
              We recently experienced a victory at our San Jose clinic which demonstrates the power of
              bringing our union together!
            </p>
            <p>Click on the flyer to download and share with your coworkers!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
