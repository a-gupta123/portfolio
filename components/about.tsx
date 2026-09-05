"use client";

import Image from "next/image";
import { GraduationCap, Sparkles, Trophy } from "lucide-react";
import { site, skillCategories } from "@/data/site";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";

const skills = skillCategories.flatMap((category) => category.skills);

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="Education, interests, and the work I care about"
          description="A CMU Math + CS student focused on software that is both theoretically grounded and production-ready."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <BlurFade inView className="relative">
            <Card className="overflow-hidden py-0 ring-pacific/20">
              <Image
                src={site.photo}
                alt={site.photoAlt}
                width={640}
                height={800}
                className="aspect-[4/5] w-full object-cover"
              />
              <CardContent className="space-y-3 py-5">
                <p className="font-heading text-2xl text-navy">{site.name}</p>
                <p className="text-sm text-ocean">{site.headline}</p>
                <div className="flex items-end gap-2 pt-2">
                  <NumberTicker
                    value={site.education.gpa}
                    decimalPlaces={1}
                    className="font-heading text-5xl text-navy"
                  />
                  <span className="pb-1 text-sm font-medium text-ocean">GPA</span>
                </div>
              </CardContent>
            </Card>
          </BlurFade>

          <div className="space-y-6">
            {site.about.map((paragraph, index) => (
              <BlurFade key={paragraph} inView delay={0.08 * (index + 1)}>
                <p className="text-base leading-relaxed text-navy/80 sm:text-lg">
                  {paragraph}
                </p>
              </BlurFade>
            ))}

            <BlurFade inView delay={0.2}>
              <Card className="ring-pacific/20">
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="mt-0.5 size-5 text-ocean" />
                    <div>
                      <p className="font-medium text-navy">{site.education.school}</p>
                      <p className="text-sm text-ocean">
                        {site.education.degree} · {site.education.extra}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {site.education.dates} · {site.education.graduation} · {site.education.gpa} GPA
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-0.5 size-5 text-ocean" />
                    <div>
                      <p className="font-medium text-navy">{site.education.prior.school}</p>
                      <p className="text-sm text-ocean">{site.education.prior.detail}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {site.education.prior.course}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Trophy className="mt-0.5 size-5 text-ocean" />
                    <div>
                      <p className="font-medium text-navy">{site.education.highSchool.school}</p>
                      <p className="text-sm text-ocean">
                        {site.education.highSchool.honors.join(" · ")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade inView delay={0.28}>
              <div>
                <p className="mb-3 text-sm font-semibold tracking-wide text-ocean uppercase">
                  Interests
                </p>
                <div className="flex flex-wrap gap-2">
                  {site.interests.map((interest) => (
                    <Badge key={interest} variant="secondary" className="h-7 px-3 text-navy">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>
        </div>

        <div className="mt-12">
          <p className="mb-4 text-center text-sm font-semibold tracking-wide text-ocean uppercase">
            Skills
          </p>
          <div className="relative">
            <Marquee pauseOnHover className="[--duration:36s]">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-pacific/30 bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:42s]">
              {skillCategories.map((category) =>
                category.skills.map((skill) => (
                  <span
                    key={`${category.title}-${skill}`}
                    className="rounded-full bg-navy px-4 py-2 text-sm font-medium text-mist"
                  >
                    {skill}
                  </span>
                ))
              )}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-mist to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-mist to-transparent" />
          </div>
        </div>

        <BlurFade inView delay={0.1} className="mt-10">
          <p className="mb-3 text-sm font-semibold tracking-wide text-ocean uppercase">
            Selected coursework
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {site.education.coursework.map((course) => (
              <div
                key={course}
                className="rounded-xl border border-pacific/20 bg-white/70 px-4 py-3 text-sm text-navy"
              >
                {course}
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
