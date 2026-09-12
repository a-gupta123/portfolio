"use client";

import { GraduationCap, Sparkles, Trophy } from "lucide-react";
import { site, skillCategories } from "@/data/site";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";
import { NumberTicker } from "@/components/ui/number-ticker";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title={site.aboutTitle}
        />

        <BlurFade inView delay={0.08}>
          <Card className="ring-pacific/20">
            <CardContent className="space-y-4">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 size-5 text-ocean" />
                  <div>
                    <p className="font-medium text-navy">{site.education.school}</p>
                    <p className="text-sm text-ocean">
                      {site.education.degree} · {site.education.extra}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {site.education.dates} · {site.education.graduation}
                    </p>
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <NumberTicker
                    value={site.education.gpa}
                    decimalPlaces={1}
                    className="font-heading text-5xl text-navy"
                  />
                  <span className="pb-1 text-sm font-medium text-ocean">GPA</span>
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

        <BlurFade inView delay={0.12} className="mt-8">
          <p className="mb-3 text-center text-sm font-semibold tracking-wide text-ocean uppercase">
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

        <BlurFade inView delay={0.18} className="mt-10">
          <p className="mb-3 text-center text-sm font-semibold tracking-wide text-ocean uppercase">
            Interests
          </p>
          <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-navy/80 sm:text-lg">
            {site.interestsBlurb}
          </p>
        </BlurFade>

        <div className="mt-12">
          <p className="mb-6 text-center text-sm font-semibold tracking-wide text-ocean uppercase">
            Skills
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <p className="mb-3 text-sm font-medium text-navy">{category.title}</p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-pacific/30 bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
