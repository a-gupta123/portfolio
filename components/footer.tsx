import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy py-6 text-center text-sm text-ice/70">
      © {new Date().getFullYear()} {site.name}. Built with Next.js, Tailwind, shadcn/ui, Magic UI, and Aceternity UI.
    </footer>
  );
}
