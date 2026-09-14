"use client";

import { useEffect, useState } from "react";

const assetPrefix = process.env.NODE_ENV === "production" ? "/portfolio" : "";

type SpaceBody = {
  id: string;
  kind: "earth" | "moon";
  size: number;
  className: string;
  x: string;
  y: string;
  rotate: string;
  scale: string;
  floatDuration: string;
};

const bodies: SpaceBody[] = [
  {
    id: "planet",
    kind: "earth",
    size: 320,
        className: "left-0 sm:left-2 lg:left-8",
    x: "0vw, 4vw, 7vw, 3vw",
    y: "0px, 120px, 260px, 420px",
    rotate: "-12, 6, 14, 22",
    scale: "1, 0.97, 0.93, 0.88",
    floatDuration: "14s",
  },
  {
    id: "moon",
    kind: "moon",
    size: 168,
    className: "right-[-10px] sm:right-6 lg:right-10",
    x: "0vw, -3vw, -6vw, -2vw",
    y: "0px, 80px, 180px, 300px",
    rotate: "8, -2, -10, -16",
    scale: "1, 0.98, 0.94, 0.9",
    floatDuration: "11s",
  },
];

export function SplineSpace() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) {
    return null;
  }

  return (
    <div
      data-spline-space=""
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[1] overflow-clip [clip-path:inset(0)] [contain:paint] motion-reduce:hidden"
    >
      {bodies.map((body) => {
        const half = body.size / 2;
        // Place Earth in the visible navy band (below the sticky nav). Keep the moon a little above it.
        const centerOffset = body.kind === "moon" ? -48 : 52;
        const top = `calc(50% - ${half - centerOffset}px)`;

        return (
          <div
            key={body.id}
            className={`absolute ${body.className}`}
            data-spline-body=""
            data-id={body.id}
            data-clip-hero=""
            data-x={body.x}
            data-y={body.y}
            data-rotate={body.rotate}
            data-scale={body.scale}
            style={{
              top,
              width: body.size,
              height: body.size,
              willChange: "transform",
            }}
          >
            {body.kind === "earth" ? <EarthGlobe duration={body.floatDuration} /> : <MoonGlobe duration={body.floatDuration} />}
          </div>
        );
      })}
    </div>
  );
}

function EarthGlobe({ duration }: { duration: string }) {
  return (
    <>
      <div className="pointer-events-none absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(0,180,216,0.62),rgba(144,224,239,0.22)_42%,transparent_70%)] blur-2xl" />
      <div
        className="relative h-full w-full overflow-hidden rounded-full"
        style={{
          filter:
            "saturate(1.5) brightness(1.65) contrast(1.14) hue-rotate(12deg) drop-shadow(0 0 48px rgba(0, 180, 216, 0.62))",
          animation: `spline-float ${duration} ease-in-out infinite`,
        }}
      >
          <div className="h-[118%] w-[118%] -translate-x-[8%] -translate-y-[2%]">
          <spline-viewer
            url="https://prod.spline.design/8tO9NQOC8Shteqek/scene.splinecode"
            background="transparent"
            loading-anim-type="spinner-small-dark"
            style={{
              width: "100%",
              height: "100%",
              background: "transparent",
              display: "block",
            }}
          />
        </div>
      </div>
    </>
  );
}

function MoonGlobe({ duration }: { duration: string }) {
  return (
    <>
      <div className="pointer-events-none absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(202,240,248,0.4),rgba(144,224,239,0.12)_46%,transparent_70%)] blur-xl" />
      <div
        className="relative h-full w-full overflow-hidden rounded-full"
        style={{
          animation: `spline-float ${duration} ease-in-out infinite`,
          filter: "drop-shadow(0 0 28px rgba(202, 240, 248, 0.42))",
        }}
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            backgroundImage: `url(${assetPrefix}/space/moon.jpg)`,
            backgroundSize: "200% 100%",
            backgroundPosition: "18% 50%",
            animation: "moon-spin 90s linear infinite",
            boxShadow:
              "inset -22px -14px 32px rgba(3, 4, 94, 0.55), inset 12px 8px 18px rgba(255, 255, 255, 0.18)",
          }}
        />
      </div>
    </>
  );
}
