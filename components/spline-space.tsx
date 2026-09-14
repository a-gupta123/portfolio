"use client";

import { useEffect, useState } from "react";

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
      <div
        className="absolute left-[-4vw] top-[4%] sm:left-0 lg:left-6"
        data-spline-body=""
        data-id="planet"
        data-clip-hero=""
        data-x="0vw, 4vw, 7vw, 3vw"
        data-y="0px, 140px, 300px, 480px"
        data-rotate="-12, 6, 14, 22"
        data-scale="1, 0.97, 0.93, 0.88"
        style={{
          width: 320,
          height: 320,
          willChange: "transform",
        }}
      >
        <div className="pointer-events-none absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(0,180,216,0.62),rgba(144,224,239,0.22)_42%,transparent_70%)] blur-2xl" />
        <div
          className="relative h-full w-full overflow-hidden rounded-full"
          style={{
            filter:
              "saturate(1.5) brightness(1.65) contrast(1.14) hue-rotate(12deg) drop-shadow(0 0 48px rgba(0, 180, 216, 0.62))",
            animation: "spline-float 14s ease-in-out infinite",
          }}
        >
          <div className="h-[124%] w-[124%] -translate-x-[10%] -translate-y-[16%]">
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
      </div>
    </div>
  );
}
