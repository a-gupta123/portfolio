"use client";

import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";
import { BlurFade } from "@/components/ui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="AI pipelines, systems software, quantitative tools, and product engineering."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <BlurFade key={project.id} inView delay={index * 0.06}>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="block h-full"
              >
                <Card className="h-full transition-transform duration-300 hover:-translate-y-1 hover:ring-pacific/40">
                  <CardHeader>
                    <div className="flex items-center justify-between gap-3">
                      <Badge variant="secondary" className="text-navy">
                        {project.category}
                      </Badge>
                      <span className="text-xs font-semibold tracking-wide text-ocean uppercase">
                        {project.result}
                      </span>
                    </div>
                    <CardTitle className="flex items-start justify-between gap-3 font-heading text-2xl">
                      {project.title}
                      <ArrowUpRight className="mt-1 size-4 shrink-0 text-ocean" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm leading-relaxed text-navy/80">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-pacific/40 text-navy"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
