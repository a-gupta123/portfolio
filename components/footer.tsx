const credits = [
  { label: "Next.js", href: "https://nextjs.org/" },
  { label: "React", href: "https://react.dev/" },
  { label: "Tailwind CSS", href: "https://tailwindcss.com/" },
  { label: "shadcn/ui", href: "https://ui.shadcn.com/" },
  { label: "Magic UI", href: "https://magicui.design/" },
  { label: "Aceternity UI", href: "https://ui.aceternity.com/" },
  { label: "Motion", href: "https://motion.dev/" },
  { label: "Lucide", href: "https://lucide.dev/" },
  { label: "Google Fonts", href: "https://fonts.google.com/" },
  { label: "GitHub Pages", href: "https://pages.github.com/" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy px-4 py-8 text-ice/75 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-4 text-center text-sm leading-relaxed">
        <p>
          Color palette from{" "}
          <a
            href="https://coolors.co/palette/03045e-0077b6-00b4d8-90e0ef-caf0f8"
            target="_blank"
            rel="noreferrer"
            className="text-ice underline decoration-ice/40 underline-offset-4 hover:text-mist"
          >
            Coolors
          </a>
          . UI building blocks from the tools below; I did not create those libraries.
        </p>
        <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          {credits.map((credit) => (
            <a
              key={credit.href}
              href={credit.href}
              target="_blank"
              rel="noreferrer"
              className="text-ice underline decoration-ice/30 underline-offset-4 hover:text-mist"
            >
              {credit.label}
            </a>
          ))}
        </p>
      </div>
    </footer>
  );
}
