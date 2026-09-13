type SpaceBody = {
  id: string;
  scene: string;
  size: number;
  className: string;
  filter: string;
  x: string;
  y: string;
  rotate: string;
  scale: string;
  floatDuration: string;
};

const bodies: SpaceBody[] = [
  {
    id: "planet",
    scene: "https://prod.spline.design/8tO9NQOC8Shteqek/scene.splinecode",
    size: 320,
    className: "left-[-6vw] top-[10vh] sm:left-[-2vw]",
    filter:
      "saturate(1.5) brightness(1.65) contrast(1.14) hue-rotate(12deg) drop-shadow(0 0 48px rgba(0, 180, 216, 0.62))",
    x: "0vw, 8vw, 16vw, 4vw",
    y: "0vh, 24vh, 54vh, 82vh",
    rotate: "-12, 8, 22, 38",
    scale: "1, 0.94, 0.82, 0.7",
    floatDuration: "14s",
  },
  {
    id: "crystal",
    scene: "https://prod.spline.design/IN9PUsuOpxoZgPWh/scene.splinecode",
    size: 240,
    className: "right-[-3vw] top-[8vh] hidden md:block lg:right-2",
    filter:
      "hue-rotate(168deg) saturate(1.55) brightness(1.45) contrast(1.12) drop-shadow(0 0 34px rgba(144, 224, 239, 0.78))",
    x: "0vw, -10vw, -26vw, -6vw",
    y: "4vh, 32vh, 64vh, 96vh",
    rotate: "16, -6, -24, -44",
    scale: "0.88, 1.04, 0.94, 1.1",
    floatDuration: "9s",
  },
  {
    id: "orb",
    scene: "https://prod.spline.design/AXibkf19VXlDJI8T/scene.splinecode",
    size: 150,
    className: "right-[18%] top-[6vh] hidden md:block",
    filter:
      "hue-rotate(198deg) saturate(1.6) brightness(1.55) drop-shadow(0 0 26px rgba(202, 240, 248, 0.8))",
    x: "-6vw, -30vw, -18vw, 10vw",
    y: "0vh, 22vh, 46vh, 74vh",
    rotate: "0, 28, 52, 84",
    scale: "0.84, 1.08, 0.92, 1.16",
    floatDuration: "11s",
  },
];

export function SplineSpace() {
  return (
    <div
      data-spline-space=""
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[15] overflow-hidden motion-reduce:hidden"
    >
      {bodies.map((body) => (
        <div
          key={body.id}
          className={`absolute ${body.className}`}
          data-spline-body=""
          data-id={body.id}
          data-x={body.x}
          data-y={body.y}
          data-rotate={body.rotate}
          data-scale={body.scale}
          style={{
            width: body.size,
            height: body.size,
            willChange: "transform",
          }}
        >
          <div className="pointer-events-none absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(0,180,216,0.62),rgba(144,224,239,0.22)_42%,transparent_70%)] blur-2xl" />
          <div className="pointer-events-none absolute inset-[18%] rounded-full border border-ice/25" />
          <div
            className="relative h-full w-full overflow-hidden rounded-full"
            style={{
              filter: body.filter,
              animation: `spline-float ${body.floatDuration} ease-in-out infinite`,
            }}
          >
            <div className="h-[124%] w-[124%] -translate-x-[10%] -translate-y-[16%]">
              <spline-viewer
                url={body.scene}
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
      ))}
    </div>
  );
}
