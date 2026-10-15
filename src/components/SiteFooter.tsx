export function SiteFooter() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-7 md:px-[72px]">
        <div className="h-px w-full bg-purple opacity-35" />
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1.5">
            <p className="text-[26px] font-black text-purple-deep">PPMMWU</p>
            <p className="text-[11px] font-bold text-white">
              Planned Parenthood Mar Monte Workers United
            </p>
          </div>
          <p className="text-xl font-bold text-white md:text-[25px]">
            Our work. <span className="text-yellow">Our mission</span>. Our power.
          </p>
        </div>
      </div>
    </footer>
  );
}
