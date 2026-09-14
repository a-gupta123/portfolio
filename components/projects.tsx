"use client";

import { useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { projects } from "@/data/site";
import { GitHubIcon } from "@/components/icons";
import { BlurFade } from "@/components/ui/blur-fade";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { withBasePath } from "@/lib/paths";
import { cn } from "@/lib/utils";

type Project = (typeof projects)[number];

function hasDemo(project: Project): project is Project & { demo: string } {
  return "demo" in project && typeof project.demo === "string" && project.demo.length > 0;
}

function hasHref(project: Project): project is Project & { href: string } {
  return "href" in project && typeof project.href === "string" && project.href.length > 0;
}

function hasImage(project: Project): project is Project & { image: string } {
  return "image" in project && typeof project.image === "string" && project.image.length > 0;
}

function isFeatured(project: Project) {
  return "featured" in project && project.featured === true;
}

function ProjectPreview({
  title,
  demo,
  image,
}: {
  title: string;
  demo: string;
  image: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden bg-[#120a24] md:aspect-auto md:min-h-[300px] md:w-[54%] md:self-stretch">
      {playing ? (
        <iframe
          src={demo}
          title={`${title} live demo`}
          className="absolute inset-0 size-full border-0"
          allow="fullscreen"
        />
      ) : (
        <>
          <img
            src={withBasePath(image)}
            alt={`${title} gameplay`}
            className="size-full object-cover"
          />
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-navy/35 text-mist transition-colors hover:bg-navy/50"
          >
            <span className="inline-flex size-14 items-center justify-center rounded-full bg-pacific text-navy shadow-lg">
              <Play className="size-6 fill-current" />
            </span>
            <span className="text-sm font-medium tracking-wide">Play in browser</span>
          </button>
        </>
      )}
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  const demo = hasDemo(project) ? project.demo : null;
  const href = hasHref(project) ? project.href : null;

  if (!demo && !href) return null;

  if (isFeatured(project)) {
    return (
      <div className="mt-5 flex flex-wrap gap-2">
        {demo ? (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-10 rounded-full bg-pacific px-4 text-navy hover:bg-ice"
            )}
          >
            Play live
            <ArrowUpRight className="size-4" />
          </a>
        ) : null}
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "h-10 rounded-full border-pacific/40 bg-transparent px-4 text-navy hover:bg-mist"
            )}
          >
            <GitHubIcon className="size-4" />
            GitHub
          </a>
        ) : null}
      </div>
    );
  }

  return (
    <div className="flex shrink-0 items-center gap-2">
      {demo ? (
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          aria-label={`Play ${project.title}`}
          className="mt-1 text-ocean hover:text-navy"
        >
          <ArrowUpRight className="size-4" />
        </a>
      ) : null}
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} on GitHub`}
          className="mt-1 text-ocean hover:text-navy"
        >
          <GitHubIcon className="size-4" />
        </a>
      ) : null}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Projects" title="Selected work" />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => {
            const featured = isFeatured(project);
            const showPreview = featured && hasImage(project) && hasDemo(project);

            return (
              <BlurFade
                key={project.id}
                inView
                delay={index * 0.02}
                className={featured ? "md:col-span-2" : undefined}
              >
                <Card
                  className={cn(
                    "h-full ring-pacific/15",
                    featured && "gap-0 py-0 md:flex-row md:items-stretch"
                  )}
                >
                  {featured && hasImage(project) && hasDemo(project) ? (
                    <ProjectPreview
                      title={project.title}
                      demo={project.demo}
                      image={project.image}
                    />
                  ) : null}
                  <div className={cn(featured && "flex flex-1 flex-col py-4")}>
                    <CardHeader>
                      <p className="text-xs font-semibold tracking-[0.2em] text-ocean uppercase">
                        {project.dates}
                      </p>
                      <CardTitle className="flex items-start justify-between gap-3 font-heading text-2xl">
                        <span>{project.title}</span>
                        {featured ? null : <ProjectLinks project={project} />}
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
                      {featured ? <ProjectLinks project={project} /> : null}
                    </CardContent>
                  </div>
                </Card>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
