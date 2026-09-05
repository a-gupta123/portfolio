"use client";

import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Projects" title="Selected work" />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <BlurFade key={project.id} inView delay={index * 0.06}>
              <Card className="h-full ring-pacific/15">
                <CardHeader>
                  <p className="text-xs font-semibold tracking-[0.2em] text-ocean uppercase">
                    {project.dates}
                  </p>
                  <CardTitle className="flex items-start justify-between gap-3 font-heading text-2xl">
                    <span>{project.title}</span>
                    {"href" in project && project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        className="mt-1 shrink-0 text-ocean hover:text-navy"
                      >
                        <ArrowUpRight className="size-4" />
                      </a>
                    ) : null}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm leading-relaxed text-navy/80">
                    {project.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="relative pl-4 before:absolute before:top-2 before:left-0 before:size-1.5 before:rounded-full before:bg-pacific"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
