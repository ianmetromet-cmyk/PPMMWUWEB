"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/site";

function normalize(path: string) {
  return path.length > 1 ? path.replace(/\/$/, "") : path;
}

export function SiteHeader() {
  const pathname = normalize(usePathname());

  return (
    <header className="border-b border-line bg-white">
      <nav
        aria-label="Main"
        className="mx-auto flex w-full min-w-0 max-w-[1440px] items-center overflow-x-auto px-3 py-3 md:min-h-[88px] md:px-[72px] md:py-0"
      >
        <ul className="flex flex-wrap items-center gap-x-2.5 gap-y-1 md:flex-nowrap md:gap-7">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className="group flex flex-col gap-1.5 pt-1 text-xs font-extrabold whitespace-nowrap text-purple md:gap-2 md:pt-3 md:text-[25px]"
                >
                  {item.label}
                  <span
                    className={`h-1 w-full rounded-full transition-colors ${
                      active ? "bg-purple" : "bg-transparent group-hover:bg-purple/40"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
