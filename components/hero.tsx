"use client";

import Image from "next/image";
import { ArrowDownRight, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { BorderBeam } from "@/components/ui/border-beam";
import { Particles } from "@/components/ui/particles";
import { Spotlight } from "@/components/ui/spotlight";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy text-mist"
    >
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#90E0EF" />
      <Particles
        className="absolute inset-0 z-0"
        quantity={90}
        color="#90E0EF"
        size={0.5}
        ease={70}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,180,216,0.28),transparent_42%)]" />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-ice/20 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-ice">
            <MapPin className="size-3.5" />
            {site.location} · {site.status}
          </p>
          <h1 className="font-heading text-5xl leading-[1.05] tracking-tight text-mist sm:text-7xl">
            {site.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ice/90 sm:text-xl">
            {site.headline}. {site.summary}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 rounded-full bg-pacific px-5 text-navy hover:bg-ice"
              )}
            >
              View projects
              <ArrowDownRight className="size-4" />
            </a>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-11 rounded-full border-ice/30 bg-transparent px-5 text-mist hover:bg-white/10 hover:text-mist"
              )}
            >
              Contact me
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex size-11 items-center justify-center rounded-full border border-ice/20 text-ice transition-colors hover:bg-white/10 hover:text-mist"
            >
              <GitHubIcon className="size-5" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-11 items-center justify-center rounded-full border border-ice/20 text-ice transition-colors hover:bg-white/10 hover:text-mist"
            >
              <LinkedInIcon className="size-5" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative overflow-hidden rounded-[2rem] border-2 border-ice/50 bg-mist p-2 shadow-[0_30px_80px_rgba(3,4,94,0.45)]">
            <BorderBeam
              size={140}
              duration={9}
              colorFrom="#CAF0F8"
              colorTo="#00B4D8"
              borderWidth={2}
            />
            <Image
              src={site.photo}
              alt={site.photoAlt}
              width={640}
              height={800}
              priority
              className="aspect-[4/5] w-full rounded-[1.4rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
