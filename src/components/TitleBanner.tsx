type TitleBannerProps = {
  children: React.ReactNode;
  className?: string;
};

export function TitleBanner({ children, className = "" }: TitleBannerProps) {
  return (
    <div className={`rounded-[18px] border border-line bg-cream px-6 py-5 ${className}`}>
      <h2 className="text-[clamp(34px,5vw,60px)] leading-tight font-black text-purple">{children}</h2>
    </div>
  );
}
