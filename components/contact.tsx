"use client";

import { Mail, Phone } from "lucide-react";
import { site } from "@/data/site";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";

const contacts = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/a-gupta123",
    href: site.github,
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aryangupta111",
    href: site.linkedin,
    icon: LinkedInIcon,
  },
  ...(site.phone
    ? [
        {
          label: "Phone",
          value: site.phone,
          href: `tel:${site.phone.replace(/\s/g, "")}`,
          icon: Phone,
        },
      ]
    : []),
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-navy py-16 text-mist sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">Contact</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact, index) => (
            <BlurFade key={contact.label} inView delay={index * 0.08}>
              <a href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                <Card className="h-full bg-white/5 py-6 text-mist ring-ice/20 transition-colors hover:bg-white/10">
                  <CardContent className="flex items-start gap-4">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-pacific/20 text-ice">
                      <contact.icon className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold tracking-[0.2em] text-ice uppercase">
                        {contact.label}
                      </span>
                      <span className="mt-1 block text-sm text-mist">{contact.value}</span>
                    </span>
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
