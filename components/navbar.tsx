"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/80 text-mist backdrop-blur-xl">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-ice/80 transition-colors hover:text-mist"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className={cn(
              buttonVariants({ size: "sm" }),
              "bg-pacific text-navy hover:bg-ice"
            )}
          >
            Get in touch
          </a>
        </nav>
        <button
          type="button"
          className="absolute right-4 inline-flex size-9 items-center justify-center rounded-lg text-mist sm:right-6 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <nav className="border-t border-white/10 px-4 py-4 md:hidden">
          <div className="flex flex-col items-center gap-3 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-2 text-ice hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
