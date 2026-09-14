"use client";

import { ArrowDownRight, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { SplineSpace } from "@/components/spline-space";
import { Starfield } from "@/components/starfield";
import { BlurFade } from "@/components/ui/blur-fade";
import { Particles } from "@/components/ui/particles";
import { Spotlight } from "@/components/ui/spotlight";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate -mt-16 overflow-clip bg-navy pt-16 text-mist [clip-path:inset(0)]"
    >
      <Starfield />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#90E0EF" />
      <Particles
        className="absolute inset-0 z-0 motion-reduce:hidden"
        quantity={520}
        color="#CAF0F8"
        size={0.7}
        ease={70}
        vy={0.18}
      />
      <Particles
        className="absolute inset-0 z-0 motion-reduce:hidden"
        quantity={140}
        color="#90E0EF"
        size={1.35}
        ease={80}
        vx={0.03}
        vy={0.26}
      />
      <Particles
        className="absolute inset-0 z-0 motion-reduce:hidden"
        quantity={36}
        color="#FFFFFF"
        size={1.55}
        ease={60}
        vy={0.1}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,180,216,0.18),transparent_46%)]" />
      <SplineSpace />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <BlurFade inView className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-ice/20 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-ice">
            <MapPin className="size-3.5" />
            {site.location} · {site.status}
          </p>
          <h1 className="font-heading text-5xl leading-[1.05] tracking-tight text-mist sm:text-7xl">
            {site.name}
          </h1>
          <p className="mt-5 text-lg font-medium leading-relaxed text-ice sm:text-xl">
            {site.headline}
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ice/85 sm:text-lg">
            {site.summary}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
        </BlurFade>
      </div>
    </section>
  );
}
