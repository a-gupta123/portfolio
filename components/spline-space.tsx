export function SplineSpace() {
  return (
    <div
      data-spline-space=""
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden motion-reduce:hidden"
    >
      <div
        className="absolute left-[-8vw] top-[18%] sm:left-[-2vw] lg:left-4"
        data-spline-body=""
        data-id="planet"
        data-x="0vw, 6vw, 10vw, 4vw"
        data-y="0vh, 8vh, 18vh, 28vh"
        data-rotate="-12, 4, 14, 22"
        data-scale="1, 0.97, 0.9, 0.82"
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
