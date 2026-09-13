import type { CSSProperties, HTMLAttributes } from "react";

type SplineViewerProps = HTMLAttributes<HTMLElement> & {
  url?: string;
  background?: string;
  "loading-anim-type"?: string;
  style?: CSSProperties;
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": SplineViewerProps;
    }
  }
}

export {};
