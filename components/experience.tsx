"use client";

import { experience } from "@/data/site";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 bg-white/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Internships and research"
          description="Industry and research work across AI document systems and experimental data analysis."
        />
        <div className="relative space-y-6 before:absolute before:top-3 before:bottom-3 before:left-4 before:w-px before:bg-pacific/40 md:before:left-1/2">
          {experience.map((job, index) => (
            <BlurFade key={job.id} inView delay={index * 0.08}>
              <Card
                className={`relative overflow-hidden ring-pacific/15 md:w-[calc(50%-1.5rem)] ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                {job.featured ? (
                  <BorderBeam
                    size={120}
                    duration={8}
                    colorFrom="#0077B6"
                    colorTo="#00B4D8"
                  />
                ) : null}
                <CardHeader>
                  <p className="text-xs font-semibold tracking-[0.2em] text-ocean uppercase">
                    {job.dates}
                  </p>
                  <CardTitle className="font-heading text-2xl">{job.role}</CardTitle>
                  <p className="text-sm text-ocean">
                    {job.company} · {job.location}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm leading-relaxed text-navy/80">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="pl-4 relative before:absolute before:left-0 before:top-2 before:size-1.5 before:rounded-full before:bg-pacific">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-pacific/40 text-navy">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
