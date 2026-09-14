"use client";

import { useEffect, useState } from "react";

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function starShadow(count: number, seed: number, width: number, height: number) {
  const rand = mulberry32(seed);
  const dots: string[] = [];

  for (let i = 0; i < count; i += 1) {
    const x = Math.round(rand() * width);
    const y = Math.round(rand() * height);
    const size = rand() > 0.86 ? 2.4 : rand() > 0.5 ? 1.5 : 1;
    const color =
      rand() > 0.62
        ? "rgba(202,240,248,1)"
        : rand() > 0.35
          ? "rgba(255,255,255,1)"
          : "rgba(144,224,239,0.92)";
    dots.push(`${x}px ${y}px 0 ${size}px ${color}`);
  }

  return dots.join(",");
}

const layers = [
  {
    id: "far",
    shadow: starShadow(320, 11, 1600, 1400),
    duration: "140s",
    x: "0px, -12px, -22px, -10px",
    y: "0px, 36px, 78px, 120px",
    opacity: 0.85,
  },
  {
    id: "mid",
    shadow: starShadow(210, 29, 1600, 1400),
    duration: "95s",
    x: "0px, 10px, 18px, 8px",
    y: "0px, 58px, 120px, 190px",
    opacity: 0.8,
  },
  {
    id: "near",
    shadow: starShadow(110, 47, 1600, 1400),
    duration: "70s",
    x: "0px, -16px, -8px, 12px",
    y: "0px, 80px, 170px, 260px",
    opacity: 1,
  },
] as const;

export function Starfield() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) {
    return null;
  }

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-clip">
      {layers.map((layer) => (
        <div
          key={layer.id}
          data-star-layer=""
          data-x={layer.x}
          data-y={layer.y}
          className="absolute inset-0 motion-reduce:hidden"
          style={{ opacity: layer.opacity, willChange: "transform" }}
        >
          <div
            className="absolute left-0 top-0 size-px rounded-full"
            style={{
              boxShadow: layer.shadow,
              animation: `star-drift ${layer.duration} linear infinite`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
