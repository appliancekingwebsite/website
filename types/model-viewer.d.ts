import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        poster?: string;
        alt?: string;
        loading?: "auto" | "lazy" | "eager";
        reveal?: "auto" | "interaction" | "manual";
        "camera-controls"?: boolean;
        "disable-zoom"?: boolean;
        "interaction-prompt"?: "auto" | "none";
        "auto-rotate"?: boolean;
        "rotation-per-second"?: string;
        "camera-orbit"?: string;
        "shadow-intensity"?: string;
        exposure?: string;
      };
    }
  }
}
