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
        className="mx-auto flex min-h-[88px] max-w-[1440px] items-center overflow-x-auto px-5 md:px-[72px]"
      >
        <ul className="flex items-center gap-5 md:gap-7">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className="group flex flex-col gap-2 pt-3 text-base font-extrabold whitespace-nowrap text-purple md:text-[25px]"
                >
                  {item.label}
                  <span
                    className={`h-1 w-full rounded-full transition-colors ${
                      active ? "bg-pink" : "bg-transparent group-hover:bg-pink/40"
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
