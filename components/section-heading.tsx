import { BlurFade } from "@/components/ui/blur-fade";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <BlurFade inView delay={0.05} className="mx-auto mb-12 max-w-2xl text-center">
      <p className="text-xs font-semibold tracking-[0.28em] text-ocean uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-heading text-3xl tracking-tight text-navy sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ocean/90">{description}</p>
      ) : null}
    </BlurFade>
  );
}
