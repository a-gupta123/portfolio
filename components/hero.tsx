"use client";

import { ArrowDownRight, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { SplineSpace } from "@/components/spline-space";
import { Particles } from "@/components/ui/particles";
import { Spotlight } from "@/components/ui/spotlight";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const starfield = [
  "radial-gradient(1px 1px at 4% 8%, rgba(255,255,255,0.95), transparent)",
  "radial-gradient(1.5px 1.5px at 11% 22%, rgba(202,240,248,0.9), transparent)",
  "radial-gradient(1px 1px at 18% 6%, rgba(144,224,239,0.8), transparent)",
  "radial-gradient(2px 2px at 27% 16%, rgba(255,255,255,0.85), transparent)",
  "radial-gradient(1px 1px at 35% 4%, rgba(202,240,248,0.7), transparent)",
  "radial-gradient(1px 1px at 43% 19%, rgba(144,224,239,0.75), transparent)",
  "radial-gradient(1.5px 1.5px at 52% 9%, rgba(255,255,255,0.95), transparent)",
  "radial-gradient(1px 1px at 61% 24%, rgba(202,240,248,0.8), transparent)",
  "radial-gradient(2px 2px at 69% 7%, rgba(144,224,239,0.85), transparent)",
  "radial-gradient(1px 1px at 77% 18%, rgba(255,255,255,0.7), transparent)",
  "radial-gradient(1px 1px at 86% 5%, rgba(202,240,248,0.9), transparent)",
  "radial-gradient(1.5px 1.5px at 94% 14%, rgba(255,255,255,0.8), transparent)",
  "radial-gradient(1px 1px at 8% 36%, rgba(144,224,239,0.7), transparent)",
  "radial-gradient(2px 2px at 16% 48%, rgba(255,255,255,0.9), transparent)",
  "radial-gradient(1px 1px at 25% 33%, rgba(202,240,248,0.65), transparent)",
  "radial-gradient(1.5px 1.5px at 34% 44%, rgba(144,224,239,0.85), transparent)",
  "radial-gradient(1px 1px at 47% 38%, rgba(255,255,255,0.75), transparent)",
  "radial-gradient(1px 1px at 55% 51%, rgba(202,240,248,0.8), transparent)",
  "radial-gradient(2px 2px at 64% 35%, rgba(255,255,255,0.85), transparent)",
  "radial-gradient(1px 1px at 73% 47%, rgba(144,224,239,0.7), transparent)",
  "radial-gradient(1.5px 1.5px at 82% 32%, rgba(202,240,248,0.9), transparent)",
  "radial-gradient(1px 1px at 91% 43%, rgba(255,255,255,0.65), transparent)",
  "radial-gradient(1px 1px at 6% 62%, rgba(202,240,248,0.8), transparent)",
  "radial-gradient(1.5px 1.5px at 19% 71%, rgba(255,255,255,0.85), transparent)",
  "radial-gradient(2px 2px at 31% 58%, rgba(144,224,239,0.75), transparent)",
  "radial-gradient(1px 1px at 42% 67%, rgba(202,240,248,0.7), transparent)",
  "radial-gradient(1px 1px at 58% 74%, rgba(255,255,255,0.8), transparent)",
  "radial-gradient(1.5px 1.5px at 70% 63%, rgba(144,224,239,0.85), transparent)",
  "radial-gradient(1px 1px at 81% 78%, rgba(202,240,248,0.75), transparent)",
  "radial-gradient(2px 2px at 93% 69%, rgba(255,255,255,0.9), transparent)",
  "radial-gradient(1px 1px at 13% 88%, rgba(144,224,239,0.7), transparent)",
  "radial-gradient(1.5px 1.5px at 28% 93%, rgba(255,255,255,0.8), transparent)",
  "radial-gradient(1px 1px at 49% 86%, rgba(202,240,248,0.85), transparent)",
  "radial-gradient(1px 1px at 67% 91%, rgba(144,224,239,0.7), transparent)",
  "radial-gradient(2px 2px at 84% 95%, rgba(255,255,255,0.75), transparent)",
  "radial-gradient(1px 1px at 97% 82%, rgba(202,240,248,0.8), transparent)",
].join(",");

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate -mt-16 overflow-clip bg-navy pt-16 text-mist [clip-path:inset(0)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-90"
        style={{ backgroundImage: starfield, animation: "star-twinkle 5.5s ease-in-out infinite" }}
      />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#90E0EF" />
      <Particles
        className="absolute inset-0 z-0"
        quantity={220}
        color="#CAF0F8"
        size={0.5}
        ease={80}
      />
      <Particles
        className="absolute inset-0 z-0"
        quantity={48}
        color="#90E0EF"
        size={1.2}
        ease={90}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,180,216,0.18),transparent_46%)]" />
      <SplineSpace />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
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
        </div>
      </div>
    </section>
  );
}
